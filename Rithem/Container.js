class Container {
    constructor() {
        this.storage = [];
    }

    /**
     * Adds the specified value to the container
     */
    add(value) {
        // TODO: implement this method
        this.storage.push(value)
    }

    /**
     * Attempts to delete one item of the specified value from the container
     *
     * @return {boolean} true, if the value has been deleted, or
     *                   false, otherwise.
     */
    delete(value) {
        // TODO: implement this method
        const idx = this.storage.findIndex(el => ele === value);
        if (idx === -1) return false;
        this.storage.splice(idx, 1);
        return false;
    }

    /**
     * Finds the container's median integer value, which is
     * the middle integer when the all integers are sorted in order.
     * If the sorted array has an even length,
     * the leftmost integer between the two middle
     * integers should be considered as the median.
     *
     * @return {number} the median if the array is not empty, or
     * @throws {Error} a runtime exception, otherwise.
     */
    getMedian() {
        // TODO: implement this method
        this.storage.sort((a, b) => a - b);
        const mid = Math.floor((this.storage.length - 1) / 2);
        return this.storage[mid];
    }
}

const container = new Container();
container.add(5)
container.add(15)
container.add(25)
container.add(6)
container.add(3)
container.add(46)
container.add(54)

//Container { storage: Array(7) }
container.getMedian() // 15
container.storage // (7)[3, 5, 6, 15, 25, 46, 54]
container.delete(5)//true
container.delete(9)//false