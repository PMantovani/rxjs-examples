import { throwError } from "rxjs";

// Observables podem falhar também!
const observable1 = throwError(() => new Error('This is an error!'));
observable1.subscribe({
  next: val => console.log('Valor emitido: ' + val),
  complete: () => console.log('Observable completado!'),
  error: val => console.log(`Erro no observable! : ${val}`)
});
