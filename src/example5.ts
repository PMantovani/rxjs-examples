import { of } from "rxjs";
import { map } from "rxjs/operators";

// O bacana do pipe é que ele gera um novo observable de resposta, 
// o observable inicial é preservado da forma como foi gerada.
const observable1 = of(1, 2, 3, 4);
const observable2 = observable1.pipe(map(data => data * 3));
console.log('Observable 1: ');
observable1.subscribe(data => console.log(data));
console.log('Observable 2: ');
observable2.subscribe(data => console.log(data));
