import { Observable, Observer } from "rxjs";



const obs$ = new Observable<string>(subs => { // Recomendable especificar el tipo
    subs.next('hola')
    subs.next('mundo')

    // Forzar un error
    const a = undefined;
    a.nombre = 'Fernando'

    subs.complete()
});

// Interfaz
const observer: Observer<any> = {
    next: value => console.log('siguiente [next]:',value),
    error: error => console.warn('siguiente [error]:',error),
    complete: () => console.info('completado')

}
obs$.subscribe(observer)


//obs$.subscribe(
//    valor => console.log('next', valor),
//    error => console.warn('error', error),
//    () => console.info('completado')
//); 
