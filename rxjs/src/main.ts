import './style.css'
import { Observable, Observer, Subscriber, count, of } from "rxjs";

//import './Observables/01-observables'

// Interfaz
const observer: Observer<any> = {
  next: value => console.log('Next:',value),
  error: error => console.warn('Error:',error),
  complete: () => console.info('completado')

}

const intervalo$ = new Observable<number>(Subscriber => {
  
  // Crear un contador, 1,2,3,4,5...
  let contador:number  = 0;

  const interval = setInterval(() => {
    // Cada Segundo
    ++contador;
    Subscriber.next( contador );
    console.log(contador);
  },1000);

  return () => {
    clearInterval(interval)
    console.log('Intervalo Destruido');
  }
})

const subs1 = intervalo$.subscribe();
const subs2 = intervalo$.subscribe();
const subs3 = intervalo$.subscribe();

// Cancelariamos la subscription despues del timepo indicado
setTimeout(() => { 


  subs1.unsubscribe() 
  subs2.unsubscribe() 
  subs3.unsubscribe() 

  console.log('Completado timeout');
},4000)
