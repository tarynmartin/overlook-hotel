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

// on login (press submit button), create a new user
// here, do an if/else statement for user data; if manager = true, instantiate maanger class, else if customer = true, instantiate customer