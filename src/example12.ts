import { concat, of } from "rxjs";

const observable1 = of(1, 2);
const observable2 = of(3, 4);

concat(observable1, observable2).subscribe(data => console.log(data));
