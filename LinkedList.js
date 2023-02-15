import { Node } from "./Node.js";

export class LinkedList {
    constructor() {
        this.list = [];
    }

    append(value) {
        let newNode = new Node(value);
        this.list.push(newNode);
    }

    prepend(value) {
        let newNode = new Node(value);
        if (this.list.length == 0) {
            this.push(new Node(value));
        } else {
            let newList = [newNode];
            newList[0].setNext(this.list[0]);
            this.list.forEach(item => {
                newList.push(item);
            });
            this.list = newList;
        }
        
    }

    size() {
        return this.list.length;
    }

    head() {
        return this.list[0];
    }

    tail() {
        return this.list[this.size() - 1];
    }

    at(idx) {
        return this.list[idx];
    }

    pop() {
        return this.list.pop()
    }

    contains(value) {
        this.list.forEach(node => {
            if (node.value == value) {
                return true;
            }
        });
        return false;
    }

    find(value) {
        let i = 0;
        this.list.forEach(node => {
            if (node.value == value) {
                return i;
            }
            ++i;
        });
        return null;
    }

    toString() {
        let listStr = '';
        this.list.forEach(node => {
            listStr = listStr + '( ' + node.value + ' ) -> '; 
        });
        listStr = listStr + 'null';

        return listStr;
    }
}