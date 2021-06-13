

// mergeMap também é uma forma de achatar observables.

import { interval } from "rxjs";
import { mergeMap, take, tap } from "rxjs/operators";

// Mas ao invés de trocar a subscrição interna, as subscrições são "fundidas".
interval(5000).pipe(
  take(2),
  tap((data) => console.log('Original observable: ' + data)),
  mergeMap((data) => interval(1000).pipe(take(10)))
).subscribe(data => console.log('Resultado: ' + data));
