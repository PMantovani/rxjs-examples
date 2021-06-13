import { of, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

// Porém podemos capturar os erros também!
const observable1 = throwError(() => new Error('This is an error!'))
  .pipe(
    catchError((err) => of('em caso de erro emitir essa string!'))
  );


observable1.subscribe({
  next: val => console.log('Valor emitido: ' + val),
  complete: () => console.log('Observable completado!'),
  error: val => console.log(`Erro no observable! : ${val}`)
});
