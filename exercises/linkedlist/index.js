// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        const newNode = new Node(data);
        if (this.head) {
            newNode.next = this.head;
            // this.head = newNode;
        }
        this.head = newNode;

        // Ou plus concis
        // this.head = new Node(data, this.head);
    }

    size() {
        let size = 0;
        let node = this.head;
        while (node) {
            size++;
            node = node.next;
        }
        return size;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        if (!this.head) {
                return null;
            }
        let node = this.head;
        while (node) {
            if (!node.next) {
                return node;
            }
            node = node.next;
        }
    }

    clear() {
         this.head = null;
    }

    removeFirst() {
        if (!this.head ) {
                return null;
            }
        return this.head = this.head.next;
    }

    removeLast() {
        if (!this.head) {
            return;
        } 

        if (!this.head.next) {
            this.head = null;
            return;
        }

        let previous = this.head;
        let node = this.head.next;

        while (node.next) {
            previous = node;
            node = node.next;
        }

        previous.next = null;
        // return;
    }

    insertLast(data) {
        const node = new Node(data);
        const lastNode = this.getLast();

        if (!lastNode) {
            this.head = node;
        } 
        else { 
            lastNode.next = node;
        }
    }

    getAt(index) {
        if (!this.head) {
            return null;
        } else {
            let node = this.head;
            let counter = 0;
            while (counter !== index) {
                if (node.next) {
                    node = node.next;
                    counter++;
                }
                else return null;
            }
            return node;
        }
        // OU
        // while (node) {
        //     if (counter === index) {
        //         return node;
        //     }
        //     counter++;
        //     node = node.next;
        // }
        // return null;
    }

    removeAt(index) {
        if (!this.head) return;

        if (index === 0) {
            this.head = this.head.next;
            return;
        }

        const previous = this.getAt(index - 1);
        if (!previous || !previous.next) return;
        previous.next = previous.next.next; // to skip the node at index;
    }

    insertAt(data, index) {
        if (!this.head || index === 0) {
            this.insertFirst(data);
            return;
        }

        if (index > this.size()){
            this.insertLast(data);
            return;
        }

        const previous = this.getAt(index - 1);
        previous.next = new Node(data,this.getAt(index));

    }

     forEach(fn) {
        let node = this.head;
        let counter = 0;
        while (node) {
            fn(node, counter);
            node = node.next;
            counter++;
        }
    }

    *[Symbol.iterator]() {
        let node = this.head;
        while (node) {
            yield node;
            node = node.next;
        }
    }
}

module.exports = { Node, LinkedList };
