import { interval } from "rxjs";
import { switchMap, take, tap } from "rxjs/operators";

// switchMap é uma forma de "achatar" observables que podem estar um dentro do outro.
// O resultado é uma trocar (switch) de um observable externo por um interno
interval(4000).pipe(
  take(5),
  tap((data) => console.log('Original observable: ' + data)),
  switchMap((data) => interval(1000).pipe(take(10)))
).subscribe(data => console.log('Resultado: ' + data));
