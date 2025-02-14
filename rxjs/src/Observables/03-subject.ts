import { Observable, Observer, Subject } from 'rxjs';

const observer: Observer<any> = {
    next : value => console.log('next:', value ),
    error: error => console.warn('error:', error ),
    complete: () => console.info('completado')
};


const intervalo$ = new Observable<number>( subscriber => {
    
    const intervalID = setInterval( () => {
        subscriber.next( Math.random() );
    }, 1000);

    return () => {
        clearInterval(intervalID);
        console.log('Intervalo destruido');
    }
});

const subject$ = new Subject();
intervalo$.subscribe( subject$ ); // Se puede hacer esto porque Subject es un Observer

//const subs1 = intervalo$.subscribe( rnd => console.log('sub1',rnd));
//const subs2 = intervalo$.subscribe( rnd => console.log('sub2',rnd));

// EN lugar de subscribirnos al intervalo$, nos subscribimos al subject$
const subs1 = subject$.subscribe( rnd => console.log('sub1',rnd));
const subs2 = subject$.subscribe( rnd => console.log('sub2',rnd));