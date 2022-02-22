// CHALLENGE 1 hellooo

function createFunction() {
    // create a function and return it 
      return function(){
        console.log('hello')
      }
      // console log hello
    }
    
    // /*** Uncomment these to check your work! ***/
    // const function1 = createFunction();
    // function1(); // => should console.log('hello');
    
    
    // CHALLENGE 2
    // Input : String
    // Output : return function () ==> return string
    function createFunctionPrinter(input) {
      return ()  =>  console.log(input);
    
    }
    
    // /*** Uncomment these to check your work! ***/
    // const printSample = createFunctionPrinter('sample');
    // printSample(); // => should console.log('sample');
    // const printHello = createFunctionPrinter('hello');
    // printHello(); // => should console.log('hello');
    
    
    // CHALLENGE 3
    function outer() {
      let counter = 0; // this variable is outside incrementCounter's scope
      function incrementCounter () {
        counter ++;
        console.log('counter', counter);
      }
      return incrementCounter;
    }
    
    const willCounter = outer();
    const jasCounter = outer();
    
    // Uncomment each of these lines one by one.
    // Before your do, guess what will be logged from each function call.
    
    // /*** Uncomment these to check your work! ***/
    // willCounter(); 
    // willCounter();
    // willCounter();
    
    // jasCounter();
    // willCounter();
    // jasCounter(); // 2
    // jasCounter(); // 3 
    
    //goal: return a function that will add an input by x 
    // input:num output:num
    // let result; 
    // function inner(input){
    //	input + x;
    //	return inner;
    //}
    
    function addByX(x) {
    
        function inner(arg){
        // console.log('arg', arg);
        // let result = x + arg;
        // return result;
        return x + arg;
        }
        return inner
    }
    
    // // /*** Uncomment these to check your work! ***/
    const addByTwo = addByX(2);
    // console.log(addByTwo(1)); // => should return 3
    // console.log(addByTwo(2)); // => should return 4
    // console.log(addByTwo(3)); // => should return 5
    
    // const addByThree = addByX(3);
    // addByThree(1); // => should return 4
    // addByThree(2); // => should return 5
    
    // const addByFour = addByX(4);
    // addByFour(4); // => should return 8
    // addByFour(5); // => should return 9
    
    
    // CHALLENGE 4
    function once(callback) {
      //input callback
    //   let counter = 0;
    //   let result = 0;
    //   return function(input){
        
    //     if(counter === 1) return result;
    //     //call callback 
    //     result = callback(input)
    //     counter ++ // 1
    //     return result // 6
    //     }
    //     //return ouput
        
    //   }
      // return a function
      let result;
      return (input) =>{
        
        if(result === undefined ) {
           result = callback(input);
        } 
        //result = func(input);
         return result;
      }
      
    }
    
    // /*** Uncomment these to check your work! ***/
    const onceFunc = once(addByTwo);
    // console.log(onceFunc(4));  // => should log 6
    // console.log(onceFunc(10));  // => should log 6
    // console.log(onceFunc(9001));  // => should log 6
    
    
    // CHALLENGE 5
    // In : Number, Callback
    // Out : function return with first and second not print anything, the third will print Srting
    function after(count, func) {
      let time = 0;
      return (string) =>{
         time+= 1;
         if(time >= count) {
           return func(string)
             }
        }
    
    }
    
    // /*** Uncomment these to check your work! ***/
    const called = function(string) { console.log('hello' + string) };
    const afterCalled = after(3, called);
    // afterCalled('world'); // => nothing is printed
    // afterCalled('world'); // => nothing is printed
    // afterCalled('world'); // => 'hello' is printed
    
    
    // CHALLENGE 6
    // input: callback, wait and callback 
    function delay(func, wait) {
    
      function inner(){ 
      
        return setTimeout(func, wait);
      }
      return inner;
    }
    
    
    // let count = 0;
    // const delayedFunc = delay(() => count++, 1000);
    // delayedFunc();
    // console.log(count); // should print '0'
    // setTimeout(() => console.log(count), 1000); // should print '1' after 1 second
    
    
    // CHALLENGE 7
    function rollCall(names) {
      // input array
      
      // declare a varible count
      let count = 0
      // return a function
      return function(){
        if(count >= names.length){
          return console.log('Everyone accounted for')
        }
        return console.log(names[count++])
        //count++
      }
      
    
    }
    
    // /*** Uncomment these to check your work! ***/
    const rollCaller = rollCall(['Victoria', 'Juan', 'Ruth'])
    // rollCaller() // => should log 'Victoria'
    // rollCaller() // => should log 'Juan'
    // rollCaller() // => should log 'Ruth'
    // rollCaller() // => should log 'Everyone accounted for'
    
    
    // CHALLENGE 8
    // In : callback, string
    // Out : closure 
    // return function will take number and string as argument
    // and the return Number Or Object
    function saveOutput(func, magicWord) {
          // declare an empty object;
          const object = {};
          
          // creat a inter func takes number or string as input
          function inner(key) {
              
              // if input === magicWord 
                if(key === magicWord) return object; // { 2 : 4 , 9 : 18 }
            
              object[key] = func(key); // { 2 : 4 , 9 : 18 }
              
              return object[key];
            
          }
         return inner
    }
    
    // /*** Uncomment these to check your work! ***/
    const multiplyBy2 = function(num) { return num * 2; };
    const multBy2AndLog = saveOutput(multiplyBy2, 'boo');
    // console.log(multBy2AndLog(2)); // => should log 4
    // console.log(multBy2AndLog(9)); // => should log 18
    // console.log(multBy2AndLog('boo')); // => should log { 2: 4, 9: 18 }
    
    
    // CHALLENGE 9
    //input: array output: function 
    // returned fun ();
    // 1st - return arry[0]; .... array[3]
    // 5th - arry[0];
    
    function cycleIterator(array) {
      let i = 0;
      
      function inner(){
        if(i >= array.length){
           i = 0;
        }
        return array[i++]; // 1 / 2 / 3 
      }
      return inner;
    }
    
    // /*** Uncomment these to check your work! ***/
    const threeDayWeekend = ['Fri', 'Sat', 'Sun'];
    const getDay = cycleIterator(threeDayWeekend);
    // console.log(getDay()); // => should log 'Fri'
    // console.log(getDay()); // => should log 'Sat'
    // console.log(getDay()); // => should log 'Sun'
    // console.log(getDay()); // => should log 'Fri'
    // console.log(getDay()); // => should log 'Sat'
    // console.log(getDay()); // => should log 'Sun'
    // console.log(getDay()); // => should log 'Fri'
    // console.log(getDay()); // => should log 'Sat'
    // console.log(getDay()); // => should log 'Sun'
    
    
    
    // CHALLENGE 10
    function defineFirstArg(func, arg) {
      //inputs a function and arguement
      return function(...num){
        // output function (num)
        return func(arg,...num)
      }
      
      // output function will invoke the callback func passing in the num paratemeter and arg parameter
      //
    
    }
    
    // /*** Uncomment these to check your work! ***/
    const subtract = function(big, small) { return big - small; };
    const subFrom20 = defineFirstArg(subtract, 20);
    console.log(subFrom20(5)); // => should log 15
    console.log(subFrom20(10)); // => should log 10
    console.log(subFrom20(-5)); // => should log 25
    
    // CHALLENGE 11
    // Input : callback
    // Output : closure return function 
            // inner funct will take number as arguments
                // Output Inner : Object : KEY as Date  : VALUE today date  and output : VALUE invokc callback (number)
    function dateStamp(func) {
      // declare an object with empty object
      const object = {}
      return (number) =>{
             object['date'] = new Date().toDateString();
             object['output'] = func(number);
             return object;
        }
    
    }
    
    // /*** Uncomment these to check your work! ***/
    const stampedMultBy2 = dateStamp(n => n * 2);
    // console.log(stampedMultBy2(4)); // => should log { date: (today's date), output: 8 }
    // console.log(stampedMultBy2(6)); // => should log { date: (today's date), output: 12 }
    
    
    // CHALLENGE 12
    //Input : No argument 
    //Output : closure return function 
    // inner func will accept one or two string 
            // return new string
    function censor() {
      const cache = {};
      return (str1, str2) => {
                     
                    if(str2){
                cache[str1] = str2;
              }else if(!str2){
                for(let key in cache){
                   str1 = str1.replace(key, cache[key])          
                        }
                return str1;
             }
         }
    }
    
    // /*** Uncomment these to check your work! ***/
    const changeScene = censor();
    // changeScene('dogs', 'cats');
    // changeScene('quick', 'slow');
    // console.log(changeScene('The quick, brown fox jumps over the lazy dogs.')); 
    // => should log 'The slow, brown fox jumps over the lazy cats.'
    
    
    // CHALLENGE 13
    function createSecretHolder(secret) {
      
       const secretHolder = {
             getSecret: function() { return secret},
             setSecret: function(value){ return secret = value}
       }
       return secretHolder;
    
    }
    
    // /*** Uncomment these to check your work! ***/
    const obj = createSecretHolder(5)
    // console.log(obj.getSecret()) // => returns 5
    // console.log(obj.setSecret(2))
    // console.log(obj.getSecret()) // => returns 2
    
    
    // CHALLENGE 14
    function callTimes() {
      let time = 0;
      return () => console.log(++time)
    }
    
    // /*** Uncomment these to check your work! ***/
    let myNewFunc1 = callTimes();
    let myNewFunc2 = callTimes();
    // myNewFunc1(); // => 1
    // myNewFunc1(); // => 2
    // myNewFunc2(); // => 1
    // myNewFunc2(); // => 2
    
    
    // CHALLENGE 15
    function russianRoulette(num) {
      let count = 0;
      return () =>{
        count ++;
        if(count < num ) return 'click';
        else if(count === num ) return 'bang';
        else return 'reload to play again';
        
        }
    }
    
    // /*** Uncomment these to check your work! ***/
    const play = russianRoulette(3);
    // console.log(play()); // => should log 'click'
    // console.log(play()); // => should log 'click'
    // console.log(play()); // => should log 'bang'
    // console.log(play()); // => should log 'reload to play again'
    // console.log(play()); // => should log 'reload to play again'
    
    
    // CHALLENGE 16
    function average() {
          let count = 0;
          let sum = 0;
          return (num) =>{
            if(!num){
              if(count === 0){
                  return 0;
              }
              return sum / count;
            }
            count++;
            sum += num;
            return sum / count;
          }
    }
    
    // /*** Uncomment these to check your work! ***/
    const avgSoFar = average();
    // console.log(avgSoFar()); // => should log 0
    // console.log(avgSoFar(4)); // => should log 4
    // console.log(avgSoFar(8)); // => should log 6
    // console.log(avgSoFar()); // => should log 6
    // console.log(avgSoFar(12)); // => should log 8
    // console.log(avgSoFar()); // => should log 8
    
    
    // CHALLENGE 17
    // Input : Array of with SubArray
    // Output : closure return out of function
    // Inner function : Input : callback
    // Output : Boolean
    function makeFuncTester(arrOfTests) {
       return (callback) => {
             return  arrOfTests.reduce((acc, curr) =>{
                curr.forEach((ele) => {
                  if(ele=== callback(ele) ){
                     acc = true;
                                 }
                 })
               
               return acc;
             }, false)
         }
     
    }
    
    // /*** Uncomment these to check your work! ***/
    const capLastTestCases = [];
    // capLastTestCases.push(['hello', 'hellO']);
    // capLastTestCases.push(['goodbye', 'goodbyE']);
    // capLastTestCases.push(['howdy', 'howdY']);
    // const shouldCapitalizeLast = makeFuncTester(capLastTestCases);
    // const capLastAttempt1 = str => str.toUpperCase();
    // const capLastAttempt2 = str => str.slice(0, -1) + str.slice(-1).toUpperCase();
    // console.log(shouldCapitalizeLast(capLastAttempt1)); // => should log false
    // console.log(shouldCapitalizeLast(capLastAttempt2)); // => should log true
    
    
    // CHALLENGE 18
    // Input : Number
    // Output : closure will return inner function 
    // Inner function accept String as argument
        // 
    function makeHistory(limit) {
    
      const history = []
      
      return (args) => {
             
          if(args === 'undo'){
                if(history.length === 0){
                return 'nothing to undo';
                        }else{
                return history.pop() + 'undone'
                        }
          }else{
            if(history.length === limit){
               history.shift();
                    }
            
            history.push(args);
            return args +' done';
                }
                     
        }
    
    }
    
    // /*** Uncomment these to check your work! ***/
    const myActions = makeHistory(2);
    console.log(myActions('jump')); // => should log 'jump done' //
    console.log(myActions('undo')); // => should log 'jump undone'
    console.log(myActions('walk')); // => should log 'walk done'//
    console.log(myActions('code')); // => should log 'code done'
    console.log(myActions('pose')); // => should log 'pose done' // 
    console.log(myActions('undo')); // => should log 'pose undone'
    console.log(myActions('undo')); // => should log 'code undone'
    console.log(myActions('undo')); // => should log 'nothing to undo'
    
    
    // CHALLENGE 19
    // Input : Array of number
    // Output : closure
                // will have inner function with no argument and return number or string
    function blackjack(array) {
    
    }
    
    // /*** Uncomment these to check your work! ***/
    
    // /*** DEALER ***/
    const deal = blackjack([2, 6, 1, 7, 11, 4, 6, 3, 9, 8, 9, 3, 10, 4, 5, 3, 7, 4, 9, 6, 10, 11]);
    
    // /*** PLAYER 1 ***/
    const i_like_to_live_dangerously = deal(4, 5);
    console.log(i_like_to_live_dangerously()); // => should log 9
    console.log(i_like_to_live_dangerously()); // => should log 11
    console.log(i_like_to_live_dangerously()); // => should log 17
    console.log(i_like_to_live_dangerously()); // => should log 18
    console.log(i_like_to_live_dangerously()); // => should log 'bust'
    console.log(i_like_to_live_dangerously()); // => should log 'you are done!'
    console.log(i_like_to_live_dangerously()); // => should log 'you are done!'
    
    // /*** BELOW LINES ARE FOR THE BONUS ***/
    
    // /*** PLAYER 2 ***/
    // const i_TOO_like_to_live_dangerously = deal(2, 2);
    // console.log(i_TOO_like_to_live_dangerously()); // => should log 4
    // console.log(i_TOO_like_to_live_dangerously()); // => should log 15
    // console.log(i_TOO_like_to_live_dangerously()); // => should log 19
    // console.log(i_TOO_like_to_live_dangerously()); // => should log 'bust'
    // console.log(i_TOO_like_to_live_dangerously()); // => should log 'you are done!
    // console.log(i_TOO_like_to_live_dangerously()); // => should log 'you are done!
    
    // /*** PLAYER 3 ***/
    // const i_ALSO_like_to_live_dangerously = deal(3, 7);
    // console.log(i_ALSO_like_to_live_dangerously()); // => should log 10
    // console.log(i_ALSO_like_to_live_dangerously()); // => should log 13
    // console.log(i_ALSO_like_to_live_dangerously()); // => should log 'bust'
    // console.log(i_ALSO_like_to_live_dangerously()); // => should log 'you are done!
    // console.log(i_ALSO_like_to_live_dangerously()); // => should log 'you are done!
    