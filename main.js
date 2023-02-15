import { LinkedList } from "./LinkedList.js";

const myList = new LinkedList();

myList.append(5);       //idx 0
myList.append(69);      //idx 1
myList.append(420);     //idx 2
myList.append('dog');   //idx 3
myList.append(true);    //idx 4
myList.append(4.2);     //idx 5
myList.append(50);      //idx 6

console.log('Testing methods:');
console.log('toStr:')
console.log(myList + "");
console.log(myList.toString());
console.log('');
console.log('prepend:');
myList.prepend(-12);
console.log(myList.toString());
console.log('');

console.log('size:');
console.log(myList.getSize());
console.log('');

console.log('head/tail:');
console.log(myList.getHead() + "");
console.log(myList.getTail() + "");
console.log('');

console.log('at index:');
console.log(myList.at(3) + "");
console.log('');

console.log('pop:');
console.log(myList.pop() + "");
console.log('');

console.log('contains (present/not present):');
console.log(myList.contains('dog'));
console.log(myList.contains('cat'));
console.log('');

console.log('find value (present/not present):');
console.log(myList.find(69));
console.log(myList.find(111385));
console.log('');

console.log(myList.toString()); 