var mergeTwoLists = function (list1, list2) {
    const result = [...list1, ...list2];
    return result.sort();
};

const list1 = [1, 2, 4], list2 = [1, 3, 4] // [1,1,2,3,4,4]
const list11 = [], list22 = [] // []
const list12 = [], list33 = [0] // [0]
console.log(mergeTwoLists(list1, list2))
console.log(mergeTwoLists(list11, list22))
console.log(mergeTwoLists(list12, list33))