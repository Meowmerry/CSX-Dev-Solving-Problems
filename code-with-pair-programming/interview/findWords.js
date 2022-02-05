const findWords = function(words) {
    let row1 = 'qwertyuiopQWERTYUIOP'
    let row2 = 'asdfghjklASDFGHJKL'
    let row3 = 'zxcvbnmZXCVBNM'
    const result = [];
    for(let word of words){
        let push = true;
        let row;
        if(row1.includes(word[0])) {row = row1}
        else if(row2.includes(word[0])) {row = row2}
        else if(row3.includes(word[0])) {row = row3}
        console.log(row)
        for(let w of word){
            if(!row.includes(w)){
                push = false;
                break;
            }
        }
        if(push){
            result.push(word)
        }
    }
    return result;
};
console.log(findWords(["Hello","Alaska","Dad","Peace"])) // ["Alaska","Dad"]
console.log(findWords(["omk"])) // []
console.log(findWords(["adsdf","sfd"])) // ["adsdf","sfd"]