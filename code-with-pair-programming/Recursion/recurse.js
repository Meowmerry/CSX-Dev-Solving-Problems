function recurse(count = 0) {
    if (count === 2) return 'done';
    const newCount = count + 1;
    return recurse(newCount);
};
const output = recurse();
console.log(output)