import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([10, 523, 999, 3, -5, 0]);
numbersCollection.sort();
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('Xyaaabb');
// const sorterString = new Sorter(charactersCollection);
charactersCollection.sort();
console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(49);

linkedList.sort();
linkedList.print();
