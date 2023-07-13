//////////////////////////  Assignment # 1 /////////////////////////
///////////////////////// By: Bushra Abro /////////////////////////
// Problem1: Installations

// problem 2
console.log(`.................... Problem 2 ..........................`);
let pname:string = "Bushra";
console.log(`Hello ${pname}! lets learn some typescript today!`);


// problem 3
console.log(`.................... Problem 3 ..........................`);
let person_name: string = "Eric";
console.log(person_name.toLowerCase());
console.log(person_name.toUpperCase());

function toTitleCase(str: string): string {
    return str.toLowerCase().replace(/(?:^|\s)\w/g, (match) => {
      return match.toUpperCase();
    });
  }
  
  let titleCaseString: string = toTitleCase(person_name);
  console.log(titleCaseString);

    // problem 4
    console.log(`.................... Problem 4 ..........................`);
let author: string = "Stephen King";
let qoute: string = "Amateurs sit and wait for inspiration, the rest of us just get up and go to work";
console.log(`${author} once said, "${qoute}"`);
    // problem 5
    console.log(`.................... Problem 5 ..........................`);
let famous_person: string = "Sir Francis Bacon "
let famous_quote: string = "Knowledge is power"
let message: string =  `${famous_person} once said, "${famous_quote}"`;
console.log(message);

    // problem 6. Stripping Names
    console.log(`.................... Problem 6 ..........................`);
let new_person_name : string = `\t Hassan Abbad \n`;
console.log(new_person_name);
let message2 : string = new_person_name.trim();
console.log(message2);

    // problem 7 & 8: Number Eight
    console.log(`.................... Problem 7 & 8 ..........................`);
console.log(4+4);
console.log(10-2);
console.log(4*2);
console.log(16/2);

    // Problem 9: Favorite number
console.log(`.................... Problem 9 ..........................`);
let fav_num: number = 2;
let message3 : string = `My favourte number is ${fav_num}`;
console.log(message3);

    //Problem 10: Adding Comments
/////// Done //////////

    // Problem 11: Names
    console.log(`.................... Problem 11 ..........................`);
let friend_names: string[] =['Asma', 'Ayesha', 'Amna', 'Fatima', 'Sana'];
console.log(friend_names[0]);
console.log(friend_names[1]);
console.log(friend_names[2]);
console.log(friend_names[3]);
console.log(friend_names[4]);


    // Problem 12: Greetings
    console.log(`.................... Problem 12 ..........................`);
console.log(`Good Morning ${friend_names[0]}!`);
console.log(`Good Morning ${friend_names[1]}!`);
console.log(`Good Morning ${friend_names[2]}!`);
console.log(`Good Morning ${friend_names[3]}!`);
console.log(`Good Morning ${friend_names[4]}!`);

    // Problem 13: Your Own Array
 console.log(`.................... Problem 13 ..........................`);
 let fav_vehicle: string[] = ['Scooty', 'Foxy','Hustler', 'Santro', 'Pajero' ];
 fav_vehicle.forEach((item) =>{
    console.log(`I would like to own a ${item}`);
 })

    // Problem 14:  Guest List
    console.log(`.................... Problem 14 ..........................`);
let guest: string[] = ['Ammi', 'Abbu', 'Nani'];
guest.forEach((item) =>{
    console.log(`${item}, I would be happiest if you come over to my place and have a dinner with us!`)
})

    // Problem 15:  Guest List changing
console.log(`.................... Problem 15 ..........................`);
let temp_guest = guest[2];
guest.splice(2,1);
guest.push('Mamu');
guest.forEach((item) =>{
    console.log(`${item}, I would be happiest if you come over to my place and have a dinner with us!`)
});
console.log(`${temp_guest} won't be able to make it.`);

    // Problem 16: More Guests
    console.log(`.................... Problem 16 ..........................`);

guest.push('Dada');
guest.unshift('sister');
let guest_size: number = guest.length;
let middle_of_list: number  = Math.floor(guest_size/2);
guest.splice(middle_of_list, 0, 'Dadi');

guest.forEach((item) =>{
    console.log(`${item}, I would be happiest if you come over to my place and have a dinner with us!`)
});
console.log(`Since I found a bigger table, I'm inviting more guests and we'll have a bigger party!`);

   // Problem 17: Shrinking Guest List
   console.log(`.................... Problem 17 ..........................`);
guest_size = guest.length;
for (let i=0; i<(guest_size-2); i++){
let temp_poped =guest.pop();
console.log(`Sorry ${temp_poped}, I had to cancel the invitation`);
}
guest.forEach((item) =>{
    console.log(`${item}, you are still invited`);

});
for(let i=0; i<=guest.length; i++){
    guest.pop();
}
for(let i=0; i<=guest.length; i++){
    console.log(guest[i]);

}

 // Problem 18: Seeing the world
 console.log(`.................... Problem 18 ..........................`);

 let locations : string[] = ['Turkey', 'Kashmir', 'Naran', 'Kaghan','Niagra falls'];
locations.forEach((item)=> {
    console.log(`${item}`);
})
let sortedArray : string[] = locations.slice().sort();
console.log(`Sorted Array elements: ${sortedArray}`);
console.log(`original array: ${locations}`);
let descending_array : string[]=sortedArray.reverse();
console.log(`Reverse order: ${descending_array}`);
console.log(`original array: ${locations}`);
locations = locations.reverse();
console.log(`original array in reverse : ${locations}`);
locations = locations.reverse();
console.log(`original array: ${locations}`);
locations= locations.sort();
console.log(`original array sorted: ${locations}`);
locations = locations.reverse();
console.log(`original array reverse sorted: ${locations}`);

// Problem 19: Dinner Guests
console.log(`.................... Problem 19 ..........................`);

let number_of_guests : number = locations.length;
console.log(`I am inviting ${number_of_guests} guests to the dinner tonight!`);

// Problem 20: 
console.log(`.................... Problem 20 ..........................`);

const list_of_things : string[]= ['mountains', 'rivers', 'countries', 'cities', 'languages'];
// Problem 21: 
console.log(`.................... Problem 21 ..........................`);
let object: { [key: string]: string[] } = {};

for (let item of list_of_things) {
  object[item] = [];
}
    // Problem 22: Intentional error
console.log(`.................... Problem 22 ..........................`);
const list_for_error: number[] = [1,4,3,6];
console.log(list_for_error[4]);
console.log(list_for_error[3]);

    // Problem 23: Conditional Tests
console.log(`.................... Problem 23 ..........................`);
let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru')
// 2
let apple = 'sweet';
console.log("Is apple == 'sweet'? I predict True.")
console.log(apple == 'sweet')
//3
let alpha = 'beta';
console.log("Is alpha == 'bet'? I predict FALSE.")
console.log(alpha != 'beta')
//4
let temperature: number = 25;
let isHot: boolean = temperature > 30;
let isCold: boolean = temperature < 10;

console.log("Is it a hot day? I predict false.");
console.log(isHot);

let timeOfDay: string = "evening";
let isMorning: boolean = timeOfDay === "morning";
let isAfternoon: boolean = timeOfDay === "afternoon";
let isEvening: boolean = timeOfDay === "evening";
//5
console.log("Is it morning? I predict false.");
console.log(isMorning);
//6
console.log("Is it afternoon? I predict false.");
console.log(isAfternoon);
//7
console.log("Is it evening? I predict true.");
console.log(isEvening);


let hasLicense: boolean = true;
let hasCar: boolean = false;
//8
console.log("hasCar == 'false'? I predict True.")
console.log(hasCar == false);
//9
console.log("hasLicense == 'true'? I predict False.");
console.log(hasLicense == true);
//10

console.log("Can the person drive? I predict false.");
console.log(hasLicense && hasCar);


    //Problem 24: More Conditional Tests
console.log(`.................... Problem 24 ..........................`);
let matcheing_name: string = "Asma";
//Tests for equality and inequality with strings
console.log(`Is the name "${matcheing_name}" equal to "Asma"? I predict true.`);
console.log(matcheing_name === "Asma");

console.log(`Is the name "${matcheing_name}" not equal to "Bushra"? I predict true.`);
console.log(matcheing_name !== "Bushra");
//Tests using the lower case function

console.log(`Is the name "${matcheing_name}" not equal to "ASMA"? I predict true.`);
console.log(matcheing_name !== "ASMA");

/* Numerical tests 
involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to */

let number1: number = 10;
let number2: number = 5;

console.log(`Is number1 (${number1}) equal to number2 (${number2})? I predict false.`);
console.log(number1 === number2);

console.log(`Is number1 (${number1}) not equal to number2 (${number2})? I predict true.`);
console.log(number1 !== number2);

console.log(`Is number1 (${number1}) greater than number2 (${number2})? I predict true.`);
console.log(number1 > number2);

console.log(`Is number1 (${number1}) less than number2 (${number2})? I predict false.`);
console.log(number1 < number2);

console.log(`Is number1 (${number1}) greater than or equal to number2 (${number2})? I predict true.`);
console.log(number1 >= number2);

console.log(`Is number1 (${number1}) less than or equal to number2 (${number2})? I predict false.`);
console.log(number1 <= number2);

//Tests using "and" and "or" operators
let x: number = 5;
let y: number = 10;
let z: number = 15;

console.log(x > y && x < z);
console.log(x > y || x < z);
//Test whether an item is in a array

let items : number[] =  [3,4,2,5];
let itemToFind: number = 5;
console.log(items.indexOf(itemToFind)!== -1);

// Test whether an item is not in a array
console.log(items.indexOf(itemToFind) === -1);

// Problem 25: Alien Colors
console.log(`.................... Problem 25 ..........................`);
let alien_color : string = 'Green';
if (alien_color === 'Green'){
    console.log("The player has earned 5 points");
}

if(alien_color === 'red'){}

// Problem 26: Alien Colors#2
console.log(`.................... Problem 26 ..........................`);
if (alien_color === 'Green'){
    console.log("The player has earned 5 points");
} else if(alien_color !== 'Green'){
    console.log("The player has earned 10 points");
}
// Problem 27: Alien Colors#3
console.log(`.................... Problem 27 ..........................`);
if (alien_color === 'Green'){
    console.log("The player has earned 5 points");
} else if(alien_color === 'Yellow'){
    console.log("The player has earned 10 points");
}else if(alien_color === 'red'){
    console.log("The player has earned 15 points");
}
// Problem 28: Stages of Life
console.log(`.................... Problem 28 ..........................`);
 let age : number = 20;
 if (age < 2) {
    console.log("The person is a baby.");
  } else if (age >= 2 && age < 4) {
    console.log("The person is a toddler.");
  } else if (age >= 4 && age < 13) {
    console.log("The person is a kid.");
  } else if (age >= 13 && age < 20) {
    console.log("The person is a teenager.");
  } else if (age >= 20 && age < 65) {
    console.log("The person is an adult.");
  } else {
    console.log("The person is an elder.");
  }
// Problem 29: Favorite Fruits
console.log(`.................... Problem 29 ..........................`);
let fav_fruits :string[]= ['apple', 'banana', 'mango', 'plum'];

if (fav_fruits.includes('apple')) {
    console.log("You really like apples!");
  }
  if (fav_fruits.includes('banana')) {
    console.log("You really like bananas!");
  }
  if (fav_fruits.includes('mango')) {
    console.log("You really like mangoes!");
  }
  if (fav_fruits.includes('orange')) {
    console.log("You really like oranges!");
  }
  if (fav_fruits.includes('strawberry')) {
    console.log("You really like strawberries!");
  }

  // Problem 30: Hello Admin
console.log(`.................... Problem 30 ..........................`);

let usernames :string[]= ['admin', 'xyz', 'cdf', 'dfg'];
for (let username of usernames) {
    if (username === 'admin') {
      console.log(`Hello admin, would you like to see a status report?`);
    } else {
      console.log(`Hello ${username}, thank you for logging in again.`);
    }
  }
   // Problem 31: No users
console.log(`.................... Problem 31 ..........................`);
if(usernames.length ===0){
    console.log("We need to find some users!");
} else {
for (let username of usernames) {
    if (username === 'admin') {
      console.log(`Hello admin, would you like to see a status report?`);
    } else {
      console.log(`Hello ${username}, thank you for logging in again.`);
    }
  }
}
usernames = [];

if (usernames.length === 0) {
  console.log("We need to find some users!");
}
 // Problem 32: checking usernames
 console.log(`.................... Problem 32 ..........................`);
 let current_users : string[] = ['yusra', 'bisma', 'ali', 'ulfat', 'razak'];
 let new_users : string[] = ['yusra', 'usama', 'jabir', 'faiza', 'nafeesa'];
 for (let new_user of new_users) {
    let isUsernameTaken: boolean = current_users.some(function(username) {
        return username.toLowerCase() === new_user.toLowerCase();
      });
      if (isUsernameTaken) {
        console.log(`The username '${new_user}' is not available. Please enter a new username.`);
      } else {
        console.log(`The username '${new_user}' is available.`);
      }
  }
 
 // Problem 33: ordinal numbers
 console.log(`.................... Problem 33 ..........................`);
 let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let number of numbers) {
  let ordinalEnding: string;

  if (number === 1) {
    ordinalEnding = "st";
  } else if (number === 2) {
    ordinalEnding = "nd";
  } else if (number === 3) {
    ordinalEnding = "rd";
  } else {
    ordinalEnding = "th";
  }

  console.log(number + ordinalEnding);
}
// Problem 34: Pizzas
console.log(`.................... Problem 34 ..........................`);
let favoritePizzas: string[] = ['Afghani', 'Margherita', 'Fajita'];
for (let pizza of favoritePizzas) {
  console.log(`I like ${pizza} pizza.`);
}
console.log("I really love pizza!");

// Problem 35: Animals
console.log(`.................... Problem 35 ..........................`);
let animals: string[] = ['Goat', 'Cat', 'Rabbit'];

for (let animal of animals) {
  console.log(animal);
}
for (let animal of animals) {
  console.log(`A ${animal} would make a great pet.`);
}
console.log("Any of these animals would make a great pet!");

// Problem 36: T-shirt
console.log(`.................... Problem 36 ..........................`);
function make_shirt(size: string, message: string): void{
    console.log(`You have ordered a ${size} shirt with the message: "${message}".`);
}
make_shirt("s", "I love coding!");
// Problem 37: XL shirt
console.log(`.................... Problem 37 ..........................`);
function make_shirt2(size: string = "large", message: string = "I love TypeScript"): void {
    console.log(`You have ordered a ${size} shirt with the message: "${message}".`);
  }
  make_shirt2();
  make_shirt2("medium");
  make_shirt2("small", "Hello, world!");
 
  // Problem 38: Cities
console.log(`.................... Problem 38 ..........................`);
  function describe_city(city: string, country: string = "United States"): void {
    console.log(`${city} is in ${country}.`);
  }
  describe_city("Karachi", "Pakistan");
  describe_city("New York");
  describe_city("London", "United Kingdom");
    // Problem 39: City Names
console.log(`.................... Problem 39 ..........................`);

function city_country(city: string, country:string){
    console.log(`${city}, ${country}`);
}
city_country("Lahore", "Pakistan");
city_country("Karachi", "Pakistan");
city_country("Islamabad", "Pakistan");

    // Problem 40: Album
    console.log(`.................... Problem 40 ..........................`);
function make_album(artist_name:string, album_title: string, tracks?: string): any{
    let album: any ={
        artist_name : artist_name,
        album_title : album_title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
      }
    
      return album;
    }

     // Problem 41: Magicians
     console.log(`.................... Problem 41 ..........................`);
    function show_magicians(magicians: string[]): void {
        for (let magician of magicians) {
          console.log(magician);
        }
      }
      let magicians: string[] = ['Mehdi', 'Noor jahan', 'Nayyara', 'Fariha'];
      show_magicians(magicians);
      
      // Problem 42: 
     console.log(`.................... Problem 42 ..........................`);

     function make_great(magicians: string[]): void {
        for (let i = 0; i < magicians.length; i++) {
          magicians[i] = `the Great ${magicians[i]}`;
        }
      }
      make_great(magicians);
      show_magicians(magicians);

           // Problem 43: 
     console.log(`.................... Problem 43 ..........................`);
     function make_great2(magicians: string[]): string[] {
        let modifiedMagicians: string[] = [];
        for (let magician of magicians) {
          modifiedMagicians.push(`the Great ${magician}`);
        }
        return modifiedMagicians;
      }
      let modifiedArray: string[] = make_great2([...magicians]);
      console.log("Original Magicians:");
      show_magicians(magicians);
      console.log("\nModified Magicians:");
      show_magicians(modifiedArray);

           // Problem 44: 
           console.log(`.................... Problem 44 ..........................`);
      function make_sandwich(items: string[]): void {
        console.log("Sandwich Summary:");
        console.log("Bread + " + items.join(" + ") + " + Bread");
        console.log();
      }
      make_sandwich(["Chicken", "Cheese", "Lettuce", "Tomato"]);
      make_sandwich(["Cheese", "cucumber"]);
      make_sandwich(["Peanut Butter", "Jam"]);
       
           // Problem 45: 
           console.log(`.................... Problem 45 ..........................`);
           function store_car_info(manufacturer: string, model: string, ...kwargs: any[]): any {
            let carInfo: any = {
              manufacturer: manufacturer,
              model: model
            };
            for (let i = 0; i < kwargs.length; i += 2) {
              const key = kwargs[i];
              const value = kwargs[i + 1];
              carInfo[key] = value;
            }
            return carInfo;
          }
          let carr = store_car_info("Toyota", "Camry", "color", "silver", "optionalFeature", "sunroof");
          console.log(carr);
          
