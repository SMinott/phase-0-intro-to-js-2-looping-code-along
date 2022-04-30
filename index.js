// Code your solutions in this file

// for (let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
//     // debugger;
//   };

//   const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     // debugger;
//   }

//   return gifts;
// }

// wrapGifts(gifts);

// 1st Code
const name = ['Guadalupe', 'Ollie', 'Aki'];
const event = 'surprise';


function writeCards(names, event) { 
    let newArr = [];           
    for (let i = 0; i < names.length; i++) {
        newArr.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
        debugger
    }; 
    return newArr;
};

// 2nd Code

const integer = [];
  function countDown(integer) {
      let i = 10;
      while (i >= 0) {console.log(i--)};
      return integer;
  };
  console.log(countDown());