

import { Subject } from "rxjs";

// Subject é uma classe que gera um observable multicast.
// As subscrições de um observable multicast são compartilhadas entre todos.

// Isso significa também que os observers podem perder valores emitidos, 
// caso não se inscrevam a tempo ao observable.
const subject1 = new Subject<number>();
subject1.asObservable().subscribe(data => console.log('Observer 1: ' + data));

subject1.next(1);
subject1.asObservable().subscribe(data => console.log('Observer 2: ' + data));
subject1.next(2);
subject1.next(3);
subject1.complete(); 
// Precisamos chamar o método complete() quando o Subject para de emitir novos valores para indicar seu término.
