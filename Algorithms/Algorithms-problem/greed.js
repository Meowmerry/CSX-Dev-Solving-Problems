ใconst pesudoGreed = (dic) => {
    // Declare a variabl 'SCORDS' and assign it to nad object containing property/value pairs that correspond to the given scoring system

    // Declare a number, 'total' - and initialize it to 0;

    // Reduce input data to determine score for triplets and get a count of any additional singles
    // --> While reducting, update a cache of die numbers, reset a die count if a triple is found so it is not additionally counted as a single

}
const greed = (dice) => {
    const SCORED = {
        111: 1000,
        666: 600,
        555: 500,
        444: 400,
        333: 300,
        222: 200,
        1: 100,
        5: 50,
    }
    let total = 0;
    const singleCount = dice.reduce((singlesCache, die) => {

        if (!singlesCache[die]) singlesCache[die] = 0;

        singlesCache[die]++;

        if (singlesCache[die] === 3) {
            total += SCORED[`${die}${die}${die}`];
            delete singlesCache[die];
        }

        return singlesCache;
    }, {});
    // EXAMPLE, How did we get here?
    // input : [1, 1, 3, 4, 4]
    // singleCount = { 1: 2, 3: 1, 4: 2}
    // Keys of singleCount => [1,3,4]
    Object.keys(singleCount).forEach((die) => {
        if (SCORED[die]) {
            for (let i = 0; i < singleCount[die]; i++) {
                total += SCORED[die];
            }
        }
    })
    return total;
}
console.log(greed([1, 1, 3, 4, 4])) // 200