import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const numbersCollection = new NumbersCollection([4, 7, -10, -2, 69]);

numbersCollection.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection("TypeScript");
charactersCollection.sort();
console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(3);
linkedList.add(3333);
linkedList.add(33);
linkedList.add(333);

linkedList.sort();
linkedList.print();
