function randomUntilFive(result = 0, count = 0) {
    if (result === 5) {
        console.log(`The random result: ${result}`);
        console.log(`How many times random is executed: ${count}`);
        return;
    }
    result = Math.floor(Math.random() * (10 - 1 + 1) + 1);
    count++;
    return randomUntilFive(result, count);
}

console.log(randomUntilFive(4)); 
