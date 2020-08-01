// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';
import './User.js';
import './Manager.js';
import './Customer.js';
import './Rooms.js';
import './Bookings.js';
import './Users.js';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

console.log('This is the JavaScript entry file - your code begins here.');

let allBookings = [];

// on load, get users and rooms
// on login (press submit button), create a new user
// use fetch to get bookings data when submit is pressed
// here, do an if/else statement for user data; if manager = true, instantiate manager class, else if customer = true, instantiate customer
// with manager, input today's date and bookings when creating it

//pull userID from userName here to create customer?