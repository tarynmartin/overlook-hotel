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

const navBar = document.querySelector(".top-bar");
const submitBtn = document.querySelector(".psw-submit");
const userNameInput = document.querySelector(".username");
const passwordInput = document.querySelector(".password");
const signInSection = document.querySelector('.sign-in');
const nameDisplay = document.querySelector('.name-display');
//const displayedName = document.querySelector('.displayed-name');
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
const customerPastBookings = document.querySelector(".dashboard-past-bookings");
const customerTodayBooking = document.querySelector('.dashboard-today-booking');
const customerFutureBooking = document.querySelector('.dashboard-future-bookings');
const customerPastSpending = document.querySelector('.customer-amount-spent');

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

function findAllBookings() {
  const promise = fetch(
    "https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings"
  )
    .then((response) => response.json())
    .then((data) => data.bookings);
  return promise;
}

function collectUserName(event) {
  userName= event.target.value;
}

function collectPassword(event) {
  password = event.target.value;
}

function createUser() {
  findAllBookings()
    .then((bookingsData) => {
      bookingsData.forEach((booking) => {
        allBookings.push(booking);
      });
      user = new User(currentDate, userName);
      let checkUser = user.checkUserType(userName, currentDate, allBookings, rooms);
      if (checkUser === "manager" && user.password === password) {
        manager = new Manager(currentDate, userName, allBookings, rooms);
        landingPage.classList.add("hide");
        showManagerDashboard();
      } else if (checkUser === "customer" && user.password === password) {
        customer = new Customer(currentDate, userName, users[user.id - 1]);
        landingPage.classList.add("hide");
        customer.findBookings(allBookings, user.id);
        customer.spendingByCustomer(rooms);
        showCustomerDashboard();
      } else {
        alert("Please enter a valid username and password");
      }
    })
    .catch((error) => console.log(error));
}

function showManagerDashboard() {
  user.calculateAmountSpent(currentDate, allBookings, rooms);
  manager.availableRooms();
  manager.percentUnavailable();
  navBar.classList.add("change-height");
  signInSection.classList.add("hide");
  nameDisplay.classList.remove("hide");
  searchBar.classList.remove('hide');
  managerDashboard.classList.remove('hide');
  nameDisplay.insertAdjacentHTML('afterend', `<h2 class='displayed-name'>Hi Manager!</h2>`);
  totalRoomsAvailableToday.innerText = manager.numberOfAvailableRooms;
  percentRoomsOccupiedToday.innerText = `${manager.percentageUnavailable}%`;
  totalRevenueToday.innerText = `$${user.totalRevenue}`;
}

function showCustomerDashboard() {
  navBar.classList.add("change-height");
  signInSection.classList.add("hide");
  nameDisplay.classList.remove("hide");
  console.log(customer.name);
  nameDisplay.insertAdjacentHTML(
    "afterend",`<h2 class='displayed-name'>Hi ${customer.name}!</h2>`);
  makeBookingBar.classList.remove('hide');
  customerDashboard.classList.remove('hide');
  displayCustomersPastBookings();
  displayCustomersBookingToday();
  displayCustomersFutureBookings();
  displayCustomerPastSpending();
}

function displayCustomersPastBookings() {
  if (customer.pastBookings.length === 0) {
    customerPastBookings.insertAdjacentHTML('afterend', `<h5>You have not stayed here before! We look forward to having you.</h5>`);
  } else {
    customer.pastBookings.forEach(booking => {
      customerPastBookings.insertAdjacentHTML('afterend', `<h5>You stayed in room ${booking.roomNumber} on ${booking.date}</h5>`);
    })
  }
}

function displayCustomersBookingToday() {
  if (customer.todaysBooking.length === 0) {
    customerTodayBooking.insertAdjacentHTML('afterend', `<h5>You don't have a stay booked with us today!</h5>`);
  } else {
    customer.todaysBooking.forEach(booking => {
      customerTodayBooking.insertAdjacentHTML('afterend', `<h5>You are staying in room ${booking.roomNumber} tonight.</h5>`);
    })
  }
}

function displayCustomersFutureBookings() {
  if (customer.futureBookings.length === 0) {
    customerFutureBooking.insertAdjacentHTML('afterend', `<h5>You don't have any stays planned in the future. We hope to see you soon!</h5>`);
  } else {
    customer.futureBookings.forEach(booking => {
      customerFutureBooking.insertAdjacentHTML('afterend', `<h5>You will be staying in room ${booking.roomNumber} on ${booking.date}</h5>`);
    })
  }
}

function displayCustomerPastSpending() {
  customerPastSpending.innerText = `$${customer.totalSpent}`;
}
