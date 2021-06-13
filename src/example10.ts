

import { Subject } from "rxjs";

// Subscrições podem ser canceladas quando não forem mais necessárias, e também para que não haja vazamento de memória
const subject1 = new Subject<number>();
const subscription1 = subject1.asObservable().subscribe(data => console.log('Observer 1: ' + data));
const subscription2 = subject1.asObservable().subscribe(data => console.log('Observer 2: ' + data));

subject1.next(1);
subject1.next(2);

subscription1.unsubscribe();

subject1.next(3);

subscription2.unsubscribe();

subject1.next(4);

subject1.complete(); 
