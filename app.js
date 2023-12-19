

// Constants
provHst = '0.15';
roomCost = '120.00';

// Define the person object
let html = '';
const person = {
  firstName: 'Daniel',
  lastName: 'SK',
  birthDate : '1995-01-01',
  gender: 'male',
  roomPreferences: ['semi', 'deluxe', 'executive'],
  
  // mailing address as sub-object
  mailingAddress: {
    street: '30 Faulkner St.',
    city: 'St. Johns',
    province: 'NL',
    postal: 'A1B5E3',
    country: 'CANADA',
  },
  phoneNumber: '123-456-7890',
  paymentMethod: 'card',
  cardNumber: 'xxxx-xxxx-xxxx-1234',

  // check in and check out dates as sub-object
  dates: {
    checkIn: new Date('2022-01-01'),
    checkOut: new Date('2022-01-07'),
  },
  hobbies: ['music', 'fishing', 'shed life', 'quad'],

 // object methods

  getAge: function() {
  const today = new Date();
  const birthDate = new Date(this.birthDate);
  let age = today.getFullYear() - birthDate.getFullYear();
  const month = today.getMonth() - birthDate.getMonth();
  if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
  },
  
  getStayDuration: function() {
    const diffTime = Math.abs(this.dates.checkOut - this.dates.checkIn);
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  },
  getCost: function() {
    const cost = roomCost  * this.getStayDuration();
    const hst = cost * provHst;
    const total = cost + hst;
    return total;
  },


};

//get the values from the object

let FullName = person.firstName + ' ' + person.lastName;
let address = person.mailingAddress.street + ', ' + person.mailingAddress.city + ', ' + person.mailingAddress.province + ', ' + person.mailingAddress.postal + ', ' + person.mailingAddress.country;
let gender = person.gender;
let age = person.getAge();
let phone = person.phoneNumber;
let roomPreferences = person.roomPreferences.join(', ');
let checkIn = person.dates.checkIn;
let checkOut = person.dates.checkOut;
let duration = person.getStayDuration();
let cost = person.getCost();
let paymentMethod = person.paymentMethod;
let cardNumber = person.cardNumber;
let hobbies = person.hobbies.join(', ');




// Get the age and stay duration  and cost for the duration of the person
console.log(age);
console.log(duration);   
console.log(cost);

// Create the html

html = `
  <ul>
    <li>Full Name            : ${FullName}</li>
    <li>Address              : ${address}</li>
    <li>Phone Number         : ${phone}</li>
    <li>Gender               : ${gender}</li>
    <li>Age                  : ${age}</li>
    <li>Check-in Date        : ${checkIn}</li>
    <li>Check-out Date       : ${checkOut}</li>
    <li>Stay Duration        : ${duration}</li>
    <li>Cost                 : ${cost}</li>
    <li>Payment Method       : ${paymentMethod}</li>
    <li>Card Number          : ${cardNumber}</li>
    <li>Hobbies              : ${hobbies}</li>
  </ul>`;

document.body.innerHTML = html;

