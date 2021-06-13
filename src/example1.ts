import { of } from "rxjs";

// of é a forma mais fácil de se criar um observable.
// Ele emite todos os valores sequencialmente especificados dentro dele, e depois completa.

const observable1 = of(1, 2, 3, 4);

// Subscribe é o método utilizado para se inscrever nas emissões de um observable
observable1.subscribe(data => console.log(data));
