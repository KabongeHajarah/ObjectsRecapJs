// Exercises: Level 1
// Create an empty object called dog
const dog={}
// Print the the dog object on the console
console.log(dog);
// Add name, legs, color, age and bark properties for the dog object.
// The bark property is a method which return woof woof
dog.name='Puppy'
dog.legs=4
dog.color='black'
dog.bark= function (){
    return 'woof woof'
}
console.log(dog);

// Get name, legs, color, age and bark value from the dog object
console.log(dog.name);
console.log(dog.legs);
console.log(dog.color);
console.log(dog.bark());


// Set new properties the dog object: breed, getDogInfo
dog.breed='maltese'
dog.getDogInfo=function() {
    return ( `${this.name} is a ${this.color} ${this.breed}`)
}
console.log(dog.getDogInfo());




//Exercises: Level 2

const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }
// Find the person who has many skills in the users object.
let maxSkills = 0;
let personWithMaxSkills = '';

for (const user in users) {
  const person = users[user];
  if (person.skills) {
    const numSkills = person.skills.length;
    if (numSkills > maxSkills) {
      maxSkills = numSkills;
      personWithMaxSkills = user;
    }
  }
}

console.log(`Person with the most skills: ${personWithMaxSkills}`);
console.log(`Number of skills: ${maxSkills}`);
// Count logged in users,
let loggedIn=0;
for (const user in users) {
    if (users[user].isLoggedIn===true) {
        loggedIn++;
        
    }
} 
console.log(loggedIn);
//count users having greater than equal to 50 points from the following object.
let totalUserPoints=0;
for (const user in users) {
    if (users[user].points>=50) {
        totalUserPoints++;
        
    }
} 
console.log(totalUserPoints);
//Find people who are MERN stack developer from the users object
let MERN=[];
for(let user  in users) {
    if (users[user].skills.includes('MongoDB', 'Express', 'React', 'Node')) {
        MERN.push(user)
    }
    
}  
console.log(MERN);

// Set your name in the users object without modifying the original users object
let copyUsers=Object.assign({},users)
copyUsers.name='Bellah'
console.log(copyUsers);
// Get all keys or properties of users object
let keys=Object.keys(users)
console.log(keys);
// Get all the values of users object
let allValues=Object.values(users)
console.log(allValues);


// Use the countries object to print a country name, capital, populations and languages.

const countries = {
    Australia: {
      capital: 'Canberra',
      population: 25650000,
      languages: ['English']
    },
    Germany: {
      capital: 'Berlin',
      population: 83149300,
      languages: ['German']
    },
    India: {
      capital: 'New Delhi',
      population: 1352600000,
      languages: ['Hindi', 'English']
    }
  };
  
  for (let country in countries) {
    console.log(`Country: ${country}`);
    console.log(`Capital: ${countries[country].capital}`);
    console.log(`Population: ${countries[country].population}`);
    console.log(`Languages: ${countries[country].languages.join(', ')}`);
    
  }
  
// Exercises: Level 3



// Create an object literal called personAccount. It has firstName,
//  lastName, incomes, expenses properties
//  and it has totalIncome, totalExpense, accountInfo,addIncome, 
// addExpense and accountBalance methods. Incomes is a set of incomes 
// and its description and expenses is a set of incomes and its description.




// **** Questions:2, 3 and 4 are based on the following two arrays:usersNew and products ()
    const usersNew = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
    ];

    const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
]
// Imagine you are getting the above users collection from a MongoDB database.
//  a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.
// b. Create a function called signIn which allows user to sign in to the application

// The products array has three elements and each of them has six properties. 
// a. Create a function called rateProduct which rates the product 
// b. Create a function called averageRating which calculate the average rating of a product

// Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.