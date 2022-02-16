/* Declare function "itemRetriever" that returns function that when called,  will return one of my favorite authors.
The function "itemRetriever" will take two argument (an array of objects and a string that will represent a key).
When the returned function is called it should return the next object in the array at the key that was passed to "itemRetriever". example.
*/
/*

Input : Arr of Obj
Output : return function 

Innner func ==> return String


create func itemRetriever take arr of obje
	
        declare a varible index assign to 0
    
    creat a inner func take no argument 
            	
          return arr with increment index 
                       

*/
const itemRetriever = (arrObj, key) => {
    let index = 0;

    return () => {
        return arrObj[index++][key];
    };
};

const favoriteAuthors = [
    { name: "Earnest Hemingway" },
    { name: "Agatha Christie" },
    { name: "J.K. Rowling" },
    { name: "Steven King" },
];

const nextAuthor = itemRetriever(favoriteAuthors, "name");
// console.log(nextAuthor()) //-> 'Earnest Hemingway'
// console.log(nextAuthor()) //-> 'Agatha Christie'
// console.log(nextAuthor()) //-> 'J.K. Rowling'
// console.log(nextAuthor()) //-> 'Steven King'
