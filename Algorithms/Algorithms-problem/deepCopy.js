
/*
Write a function 'deepCopy' that creates a deep copy of every level of a given object or array, and returns it, no matter deep the object is nested.

Input : Array of nested Object
Output : Boolean

creat a function deepCopy take array as aguments
	
         iterate thru array 
                each current element check 
      
   

*/
/* ================= SOLUTION 1 ====================== */
const deepCopy = (collection) => {
    if(typeof collection !== 'object' || collection === null) return collection;
    const output = Array.isArray(collection) ? [] : {};
    for (const [key, value] of Object.entries(collection)) {
            output[key] = deepCopy(value)       
    }
    return output;
};
const tools = [
{ editor: { favorite: { mine: { name: "vscode" } } } },
{ shell: "zsh" },
];
const copyOfTools = deepCopy(tools);
//console.log(copyOfTools);
console.log(copyOfTools === tools); // -> false
console.log(copyOfTools[0] === tools[0]); // -> false
console.log(copyOfTools[0].editor === tools[0].editor); // -> false
console.log(copyOfTools[0].editor.favorite === tools[0].editor.favorite); // -> false
console.log(copyOfTools[0].editor.favorite.mine === tools[0].editor.favorite.mine);           // -> false
console.log(copyOfTools[0].editor.favorite.mine.name === tools[0].editor.favorite.mine.name); // -> true

/* ================= SOLUTION 2 ====================== */
const deepCopy2 = (collection) => {
    if(typeof collection !== 'object' || collection === null) return collection;
    const copy = collection.constructor();
    for (const key in collection) {
        if (typeof collection[key] === 'object') {
            copy[key] = deepCopy2(collection[key])
            console.log(' copy', copy);
        } else {
            copy[key] = collection[key];
        }
    }
    return copy;
};
const tools2 = [
{ editor: { favorite: { mine: { name: "vscode" } } } },
{ shell: "zsh" },
];
const copyOfTools2 = deepCopy2(tools2);
console.log(copyOfTools2);
console.log(copyOfTools2 === tools2); // -> false
console.log(copyOfTools2[0] === tools2[0]); // -> false
console.log(copyOfTools2[0].editor === tools2[0].editor); // -> false
console.log(copyOfTools2[0].editor.favorite === tools2[0].editor.favorite); // -> false
console.log(copyOfTools2[0].editor.favorite.mine === tools2[0].editor.favorite.mine);           // -> false
console.log(copyOfTools2[0].editor.favorite.mine.name === tools2[0].editor.favorite.mine.name); // -> true
