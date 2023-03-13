function getNumber(binary) {
    // Write your code here
    let bstNums = String(binary.data);
    
    while(binary.next !== null){
        binary = binary.next;
        bstNums += binary.data;
    }
    return parseInt(bstNums, 2)
}