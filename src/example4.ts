import { of } from "rxjs";
import { startWith } from "rxjs/operators";

const observable1 = of(1, 2, 3, 4).pipe(
  startWith(0) // Emite um valor inicial antes de qualquer outro do observable
);

observable1.subscribe(data => console.log(data));
