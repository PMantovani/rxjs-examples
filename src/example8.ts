

import { of } from "rxjs";

// O of() gera um observable unicast. O que significa isso?
// As subscrições são exclusivas para cada observable.

const observable1 = of(1, 2, 3, 4);

console.log('Primeira subscrição: ');
observable1.subscribe(data => console.log(data));
console.log('Segunda subscrição do mesmo observable: ');
observable1.subscribe(data => console.log(data));
