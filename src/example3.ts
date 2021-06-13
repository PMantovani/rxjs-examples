import { of } from "rxjs";
import { filter } from "rxjs/operators";

// pipe é uma forma de aplicar operadores após um observable para mudar seu comportamento

const observable1 = of(1, 2, 3, 4).pipe(
  filter(data => data < 3) // Emite apenas os valores cuja condição seja verdadeira
);

observable1.subscribe(data => console.log(data));
