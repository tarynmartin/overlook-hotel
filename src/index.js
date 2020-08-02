import './css/base.scss';
import './get-api.js';
import './User.js';
import './Manager.js';
import './Customer.js';
import './Rooms.js';
import './Bookings.js';
import './Users.js';
import getOnLoad from './get-api.js';
const moment = require('moment');

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
import User from './User.js';
import Manager from './Manager.js';
import Customer from './Customer.js';

let user;
let manager;
let customer;
let allBookings = [];
let users = [];
let rooms = [];
let userName;
let password;
let currentDate = moment().format('YYYY/MM/DD');

const submitBtn = document.querySelector(".psw-submit");
const userNameInput = document.querySelector(".username");
const passwordInput = document.querySelector(".password");
const searchBar = document.querySelector(".search-bar");
const makeBookingBar = document.querySelector(".select-date");
const managerDashboard = document.querySelector(".manager");
const customerDashboard = document.querySelector(".customer");
const landingPage = document.querySelector(".welcome");
const managerSearchResults = document.querySelector(".manager-search");
const customerMakeBooking = document.querySelector(".customer-booking");
const totalRoomsAvailableToday = document.querySelector(
  ".number-rooms-available"
);
const percentRoomsOccupiedToday = document.querySelector(".percent-occupied");
const totalRevenueToday = document.querySelector(".total-revenue");

submitBtn.addEventListener("click", createUser);
userNameInput.addEventListener("input", collectUserName);
passwordInput.addEventListener("input", collectPassword);

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

function collectUserName(event) {
  userName= event.target.value;
}

function collectPassword(event) {
  password = event.target.value;
}

function createUser() {
  getOnClick();
  user = new User(currentDate, userName);
  let checkUser = user.checkUserType(userName, currentDate, allBookings, rooms);
  console.log(user.id);
  if (checkUser === 'manager' && user.password === password) {
    manager = new Manager(currentDate, userName, allBookings, rooms);
    landingPage.classList.add('hide');
    showManagerDashboard();
  } else if (checkUser === 'customer' && user.password === password) {
    customer = new Customer(currentDate, userName, users[user.id - 1]);
    landingPage.classList.add("hide");
    showCustomerDashboard(); 
  } else {
    alert('Please enter a valid username and password')
  }
}

function showManagerDashboard() {
  user.calculateAmountSpent(currentDate, allBookings, rooms);
  manager.availableRooms();
  manager.percentUnavailable();
  searchBar.classList.remove('hide');
  managerDashboard.classList.remove('hide');
  totalRoomsAvailableToday.innerText = manager.numberOfAvailableRooms;
  percentRoomsOccupiedToday.innerText = `${manager.percentageUnavailable}%`;
  totalRevenueToday.innerText = `$${user.totalRevenue}`;
}

function showCustomerDashboard() {
  makeBookingBar.classList.remove('hide');
  customerDashboard.classList.remove('hide');
}

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
