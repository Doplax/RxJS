import { Observable } from "rxjs";

//Forma poco comun
//const obs$ = Observable.create()

const obs$ = new Observable<string>(subs => { // Recomendable especificar el tipo
    subs.next('hola')
    subs.next('mundo')

    subs.complete()
    // Esto, al estár despues del complete ya no se emitiria
    subs.next('hola')
    subs.next('mundo')

});


//obs$.subscribe( resp => console.log(resp));
obs$.subscribe( console.log ); // Es lo mismo pero más breve 
