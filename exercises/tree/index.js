// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
    constructor(data, children = []) {
        this.data = data;
        this.children = children;
    }
    
    add(data) {
        this.children.push(new Node(data));
    }

    remove(data) {
        this.children = this.children.filter(child => {
            return data !== child.data
        })
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    traverseBF(fn) {
        const array = [this.root];
        while (array.length) {
            const node = array.shift(); // shift removes the first element of an array
            
            array.push(...node.children); // spread operator of ES2015
            // for (let child of children) {
            //     array.push(child);
            // }

            fn(node);
        }
    }

    traverseDF(fn) {
        const array = [this.root];
        while (array.length) {
            const node = array.shift(); // shift removes the first element of an array
            
            array.unshift(...node.children); // spread operator of ES2015

            fn(node);
        }
    }
}

module.exports = { Tree, Node };
