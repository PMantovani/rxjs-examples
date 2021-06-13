import { concat, forkJoin, interval, of } from "rxjs";
import { switchMap, take, tap } from "rxjs/operators";


// Podemos também combinar observables diferentes.

const observable1 = of(1, 2);
const observable2 = of(3, 4);

// forkJoin espera todos os últimos observables completarem e emite os últimos valores deles
console.log('forkJoin: ');
forkJoin([observable1, observable2]).subscribe(data => console.log(data));

// concat emite os observables em sequência: espera o primeiro terminar para se subscrever ao próximo
console.log('concat: ');
concat(observable1, observable2).subscribe(data => console.log(data));

// switchMap é uma forma de "achatar" observables que podem estar um dentro do outro.
// O resultado é uma trocar (switch) de um observable externo por um interno
interval(4000).pipe(
  take(5),
  tap((data) => console.log('Original observable: ' + data)),
  switchMap((data) => interval(1000).pipe(take(10)))
).subscribe(data => console.log('Resultado: ' + data));
