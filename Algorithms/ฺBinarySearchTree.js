function BinarySearchTree(value) {
    this.value = value;
    this.right = null;
    this.left = null;
}

BinarySearchTree.prototype.add = function add(value) {
    const newNode = new BinarySearchTree(value);
    if (value > this.value) {
        if (this.right === null) {
            this.right = newNode;
        } else {
            return this.right.add(value)
        }
    }
    if(value < this.value){
        if(this.left === null){
            this.left = newNode;
        } else {
            return this.left.add(value)
        }
    }
}

const treeDemo = new BinarySearchTree(10);
console.log(treeDemo);
treeDemo.add(17);
treeDemo.add(5);
treeDemo.add(22);
console.log(treeDemo)