export class Node {
    constructor(value) {
        this.value = value;
        this.nextNode = null;
    }

    setNext(node) {
        this.nextNode = node;
    }

    toString() {
        return this.value;
    }
}

