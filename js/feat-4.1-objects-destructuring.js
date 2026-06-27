const user = {
  name: 'John Doe',
  age: 60,
  address: {
    city: 'Nairobi',
    country: 'Kenya'
  },
  hobbies: ['Reading', 'Traveling', 'Cooking'],
  //position: 'user'
}

// Object destructuring
// let name_of_the_user = user.name;

// let country_of_the_user = user.address.country;

//
const {name:fullName, age, address, address:{country}, position='admin'} = user
console.log(fullName, age, country, position);


