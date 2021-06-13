import { of } from "rxjs";
import { map } from "rxjs/operators";

// pipe é uma forma de aplicar operadores após um observable para mudar seu comportamento

const observable1 = of(1, 2, 3, 4).pipe(
  map(data => data * 2) // Transforma o resultado de um observable em um valor de saída
);

observable1.subscribe(data => console.log(data));
