import './style.css'
import { Observable, Observer, Subscriber, count } from "rxjs";

// Interfaz
const observer: Observer<any> = {
  next: value => console.log('Next:',value),
  error: error => console.warn('Error:',error),
  complete: () => console.info('completado')

}

const intervalo$ = new Observable<number>(Subscriber => {
  
  let count:number  = 0;

  const interval = setInterval(() => {
    // Cada Segundo
    ++count;
    Subscriber.next( count );
    console.log(count);
  },1000);

  return () => {
    clearInterval(interval)
    console.log('Intervalo Destruido');
  }
})

const subs1 = intervalo$.subscribe( observer );
const subs2 = intervalo$.subscribe( observer );
const subs3 = intervalo$.subscribe( observer );

subs1.add(subs2)
subs2.add(subs3)

// Cancelariamos la subscription despues del timepo indicado
setTimeout(() => { 

  subs1.unsubscribe() // Al usar 


  console.log('Completado timeout'); // Se dispara despues de completar unsubscribes
},6000)
