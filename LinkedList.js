import { Node } from "./Node.js";

export class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    append(value) {
        let newNode = new Node(value);
        if (this.head == null) {
            this.head = newNode;
            this.tail = newNode;
            ++this.size;
        } else {
            this.tail.setNext(newNode);
            this.tail = newNode;
            ++this.size;
        }
    }

    prepend(value) {
        let newNode = new Node(value);
        if (this.head == null) {
            this.head = newNode;
            this.tail = newNode;
            ++this.size;
        } else {
            newNode.setNext(this.head);
            this.head = newNode;
            ++this.size;
        }
        
    }

    getSize() {
        return this.size;
    }

    getHead() {
        return this.head;
    }

    getTail() {
        return this.tail;
    }

    at(idx) {
        //idx 0 is head
        if (idx == 0) {
            return this.head;
        }

        //make sure idx isn't too high or low
        if (idx > this.size - 1  || idx < 0) {
            return null;
        }

        let count = 0;
        let thisNode = this.head;
        while (thisNode != null) {
            if (count == idx) {
                return thisNode;
            }
            thisNode = thisNode.nextNode;
            ++count
        }
        
    }

    pop() {
        let thisNode = this.head;
        while(thisNode.nextNode.nextNode != null) {
            thisNode = thisNode.nextNode;
        }
        let lastNode = thisNode.nextNode;
        thisNode.setNext(null);
        return lastNode;
    }

    contains(search) {
        let thisNode = this.head;
        while (thisNode != null) {
            if (thisNode.value == search) {
                return true;
            } else {
                thisNode = thisNode.nextNode;
            }
        }
        return false;
    }

    find(search) {
        let idx = 0;
        let thisNode = this.head;
        while (thisNode != null) {
            if (thisNode.value == search) {
                return idx;
            } else {
                ++idx;
                thisNode = thisNode.nextNode;
            }
        }
        return null;
    }

    toString() {
        let printString = '';
        let thisNode = this.head;
        while (thisNode != null) {
            printString = printString + '( ' + thisNode.value + ' ) -> ';
            thisNode = thisNode.nextNode;
        }
        printString = printString + 'null'

        return printString;
    }
}