// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';
import './get-api.js';
import './User.js';
import './Manager.js';
import './Customer.js';
import './Rooms.js';
import './Bookings.js';
import './Users.js';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
import getOnLoad from './get-api.js';

console.log('This is the JavaScript entry file - your code begins here.');

let allBookings = [];
let users = [];
let rooms = [];

// on load, get users and rooms
// on login (press submit button), create a new user
// use fetch to get bookings data when submit is pressed
// here, do an if/else statement for user data; if manager = true, instantiate manager class, else if customer = true, instantiate customer
// with manager, input today's date and bookings when creating it

//pull userID from userName here to create customer?

getOnLoad().then(allData => {
  allData.users.forEach(user => {
    users.push(user);
  });
  allData.rooms.forEach(room => {
    rooms.push(room);
  })
})
  .then(() => loadPage());

function loadPage() {
  alert('You did it!');
  console.log(users);
  console.log(rooms);
}

const submitBtn = document.querySelector('.psw-submit');

submitBtn.addEventListener('click', getOnClick);

function findAllBookings() {
  const promise = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings')
    .then(response => response.json())
    .then(data => data.bookings)
  return promise;
}

function getOnClick() {
  findAllBookings()
  .then(bookingsData => {
    bookingsData.forEach(booking => {
      allBookings.push(booking)
    })
    console.log(allBookings);
  })
  .catch(error => console.log(error))
}
