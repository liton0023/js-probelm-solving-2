
// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// function likes(names){
//     const [frist,second,third]=names;
//     switch(names.length){
//         case 0:return "no one likes this";
//         break;
//         case 1: return `${frist} likes this`;
//         break;
//         case 2: return `${frist}, ${second} likes this`;
//         break;
//         case 3: return `${frist},${second}, {third} likes this`;
//         break;
//         default:return `${frist},${second},${third} and ${names.length-3} other like this`
// }

//         switch(names.length){
//             case 0:
//               return `no one likes this`;
//             case 1: 
//               return `${names[0]} likes this`;
//             case 2: 
//               return `${names[0]} and ${names[1]} like this`;
//             case 3: 
//               return `${names[0]}, ${names[1]} and ${names[2]} like this`;
//             default: 
//               return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
//           }
// }
// console.log(likes(["Mahmud","Rs","Ashik","Jakaria"]));






// function alphabetPosition(text) {
//     var result = [];
//     var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
//       "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v",
//       "w", "x", "y", "z"]
//     text = text.replace(/[^a-z]/g, '').toLowerCase().split('');
//     for (var i = 0; i < text.length; i++) 
//       result.push(alphabet.indexOf(text[i]) + 1);
//     return result.join(' ');
//   }


// function alphabetPosition(text) {
  
//     var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    
    
//     return text.toLowerCase().replace(/[^a-z]/g,'').split('')
//     .map(x => alphabet.indexOf(x)+1).join(' ');  
//   }
//   console.log(alphabetPosition("Rs Mahmud"))



// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.


// function findOdd(num){
//     var count=0;
//     for(var i=0; i < num.length; i++){
//         for(var j=0; j <num.length; j++){
//             if(num[i]==num[j]){
//                 count++;
//             }
//         }
//         if(count % 2 !=0){
//             return num[i];
//         }
//     }
// }

// console.log(findOdd([20,1,-1,2,-2,3]));




// Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths. Can you help him to find out, how many cakes he could bake considering his recipes?

// Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.


// function cakes(recipe,available){
//     let maxCakes
//     for(var ingradient in recipe){
//         if(available[ingradient]){
//             const possibleCakes=Math.floor(available[ingradient]/recipe[ingradient] || 0);
//             if(!maxCakes|| possibleCakes < maxCakes){
//                 maxCakes=possibleCakes
//             }
//         }
//         else{
//             return 0;
//         }
//     }
//     return console.log(maxCakes);
// }

// cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200});




//no question

// find the brackets

// function validBraces(braces){
//     let tracer=[];
//     for(let i = 0; i < braces.length; i++){
//         if(braces[i]=== "(" || braces[i]=== "{" || braces[i]=== "["){
//             tracer.push(braces[i])
//         }
//         else{
//             if(tracer.length === 0)return false;

//             let lastValue=tracer[tracer.length -1];
//             if(braces[i]==="]" && lastValue ==="[" ||  (braces[i] === '}' && lastValue === '{') || (braces[i] === ')' && lastValue === '(')){
//                 tracer.pop()
//             }else{
//                 break;
//             }
//         }
//     }
//     return tracer.length === 0;
// }
// console.log(validBraces( "()" ))


// Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

// function inArray(array1,array2){
//     var x;
//     var y;
//     var r = [];
//     for (x = 0; x < array1.length; x++) { 
//       for (y = 0; y < array2.length; y++) {
//         if(array2[y].includes(array1[x]) === true){
//             r.push(array1[x]);
//         }else{
  
//         }
//       }
//     }
//     r = [...new Set(r)];
//     return r.sort();
//   }


  
//   function linearSearch(arr,val){
// const length=arr.length
//     for(let i = 0; i < length; i++ ){
//         if(arr[i]===val){
//             return i;
//         }
//     }
//     return "not found";

//   }

//   console.log(linearSearch(['a','b','c','d','c'],'c'));




//   function longestString(names){
//     let longestWord='';
//     for(name of names){
//         if(name.length > longestWord.length){
//          longestWord=name;
//         }
//     }
//     return [longestWord, names.indexOf(longestWord)]

//   }

//   console.log(longestString(['Rs Mahmud','asik','jahid']))




//   function fizzBuzz(numbers){
//   for ( let i=1; i <= numbers;i++ ){
//     if(i % 15 ==0){
//         console.log(`${i} is FizzBuzz`)
//     }
//     else if(i % 5 ===0){
//         console.log(`${i} is Fizz`);
//     }
//     else if(i % 3===0){
//         console.log(`${i} is Buzz`);
//     }
//     else{
//         console.log(i);
//     }
//   }
//  }
// fizzBuzz(10);



// // folse vlaue bad dite hba array thaky
// const mixesArr=[]
// const trurArr=mixesArr.filter(Boolean);



// // fibonaccci number secice sum

// function fibProduct(prod){
//    const fibo=[0,1]
//     for(i=2; i<= prod; i++){
//         fibo[i]=fibo[i-1] + fibo[i-2];
//     }
//     return fibo;

//         //  function fib(){
//         //       let n=0;
//         // while(fib(n)*fib(n-1) < prod){
//         //     n++;
//         // } 
//         // if(fib(n)*fib(n-1) == prod){
//         //     return [fib(n),fib(n-1),true];
//         // }
//         // else{
//         //     return [fib(n),fib(n-1),false];
//         // }
//         //  }
// }

// console.log(fibProduct(5));


// function productFib(prod){
//     var cache = {
//       0: 0,
//       1: 1
//     }
    
//     function fib(s){
//       if(s == 0 || s == 1){return s;}
//       if(s > 1){
//         if(cache[s]){
//           return cache[s];
//         }else{
//           cache[s] = fib(s - 1) + fib(s - 2)
//           return fib(s - 1) + fib(s - 2);
//         }
//       }
//     }
    
    
//     let n = 0;
//     while(fib(n) * fib(n + 1) < prod){
//       n++;
//     }
//     if(fib(n) * fib(n + 1) == prod){
//       return [fib(n), fib(n + 1), true]
//     }else{
//       return [fib(n), fib(n + 1), false]
//     }

//   }

//   console.log(productFib(10));



      // In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. 

      function weavs(words){
        let myWeav=[]

            for (let i=0; i<words.length; i++){
               let letter=words[i];
               if(letter === " "){
                continue;
               }
               else{
                myWeav.push(words.slice(0,i) + letter.toUpperCase() + words.slice(i+1))
               }
            }
            return myWeav;
        }

    console.log(weavs('hello'));



    // rgb hexdacimal number comvert

    function rgb(r, g, b){
        // complete this function 
        
        return toHex(r) + toHex(g) + toHex(b);
       
       
      }
      function toHex(color){
        if(color <= 0){
            return "00"
        }
        else if(color <16){
            return ("0" + Number(color).toString(16).toUpperCase());
        }
        else if(color >255){
            return "FF"
        }
        return ( (Number(color).toString(16).slice(-2).toLocaleUpperCase()))
        }

     


      console.log(rgb(188,211,16))