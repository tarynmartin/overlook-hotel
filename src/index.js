import './css/base.scss';
import './get-api.js';
import './post-api.js';
import './User.js';
import './Manager.js';
import './Customer.js';
import './Rooms.js';
import './Bookings.js';
import './Users.js';
import getOnLoad from './get-api.js';
import postNewBooking from './post-api.js';
const moment = require('moment');

import User from './User.js';
import Manager from './Manager.js';
import Customer from './Customer.js';
//import Rooms from './Rooms.js';

let user;
let manager;
let customer;
let allBookings = [];
let users = [];
let rooms = [];
let currentDate = moment().format('YYYY/MM/DD');

const navBar = document.querySelector(".top-bar");
const submitBtn = document.querySelector(".psw-submit");
const userNameInput = document.querySelector(".username");
const passwordInput = document.querySelector(".password");
const signInSection = document.querySelector('.sign-in');
const displayDate = document.querySelector('.display-date');
const displayDateCustomer = document.querySelector('.display-date2');
const nameDisplay = document.querySelector('.name-display');
const searchBar = document.querySelector(".search-bar");
const makeBookingBar = document.querySelector(".select-date");
const managerDashboard = document.querySelector(".manager");
const customerDashboard = document.querySelector(".customer");
const landingPage = document.querySelector(".welcome");
//const managerSearchResults = document.querySelector(".manager-search");
const customerMakeBooking = document.querySelector(".customer-booking");
const availableRoomsDisplay = document.querySelector(".display-all-rooms");
const totalRoomsAvailableToday = document.querySelector(
  ".number-rooms-available");
const percentRoomsOccupiedToday = document.querySelector(".percent-occupied");
const totalRevenueToday = document.querySelector(".total-revenue");
const customerPastBookings = document.querySelector(".dashboard-past-bookings");
const customerTodayBooking = document.querySelector('.dashboard-today-booking');
const customerFutureBooking = document.querySelector('.dashboard-future-bookings');
const customerPastSpending = document.querySelector('.customer-amount-spent');
const customerInputDate = document.querySelector('.booking-selection');
const inputDateSubmitButton = document.querySelector('.submit-date');
const addAvailableRoomToDisplay = document.querySelector('.add-available-rooms');


let userName;
let password;
let bookingDate;

submitBtn.addEventListener('click', createUser);
userNameInput.addEventListener('input', collectUserName);
passwordInput.addEventListener('input', collectPassword);
customerInputDate.addEventListener('input', collectUserDate);
inputDateSubmitButton.addEventListener('click', searchForRooms);
availableRoomsDisplay.addEventListener('click', createBookingObject);

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
  userName = event.target.value;
}

function collectPassword(event) {
  password = event.target.value;
}

function collectUserDate() {
  const collectedDate = event.target.value;
  bookingDate = moment(collectedDate).format("YYYY/MM/DD");
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
  displayDate.innerText = currentDate;
  nameDisplay.insertAdjacentHTML('afterend', `<h2 class='displayed-name'>Hi Manager!</h2>`);
  totalRoomsAvailableToday.innerText = manager.numberOfAvailableRooms;
  percentRoomsOccupiedToday.innerText = `${manager.percentageUnavailable}%`;
  totalRevenueToday.innerText = `$${user.totalRevenue}`;
}

function showCustomerDashboard() {
  navBar.classList.add("change-height");
  signInSection.classList.add("hide");
  nameDisplay.classList.remove("hide");
  displayDateCustomer.innerText = currentDate;
  nameDisplay.insertAdjacentHTML(
    "afterend", `<h2 class='displayed-name'>Hi ${customer.name}!</h2>`);
  makeBookingBar.classList.remove('hide');
  customerDashboard.classList.remove('hide');
  displayCustomersPastBookings();
  displayCustomersBookingToday();
  displayCustomersFutureBookings();
  displayCustomerPastSpending();
}

function displayCustomersPastBookings() {
  if (customer.pastBookings.length === 0) {
    customerPastBookings.insertAdjacentHTML('afterend', `<h5 class='display-history'>You have not stayed here before! We look forward to having you.</h5>`);
  } else {
    customer.pastBookings.forEach(booking => {
      customerPastBookings.insertAdjacentHTML("afterend", `<h5 class='display-history'>You stayed in room ${booking.roomNumber} on ${booking.date}</h5>`);
    })
  }
}

function displayCustomersBookingToday() {
  if (customer.todaysBooking.length === 0) {
    customerTodayBooking.insertAdjacentHTML("afterend", `<h5 class='display-history'>You don't have a stay booked with us today!</h5>`);
  } else {
    customer.todaysBooking.forEach(booking => {
      customerTodayBooking.insertAdjacentHTML("afterend", `<h5 class='display-history'>You are staying in room ${booking.roomNumber} tonight.</h5>`);
    })
  }
}

function displayCustomersFutureBookings() {
  if (customer.futureBookings.length === 0) {
    customerFutureBooking.insertAdjacentHTML("afterend", `<h5 class='display-history'>You don't have any stays planned in the future. We hope to see you soon!</h5>`);
  } else {
    customer.futureBookings.forEach(booking => {
      customerFutureBooking.insertAdjacentHTML("afterend", `<h5 class='display-history'>You will be staying in room ${booking.roomNumber} on ${booking.date}</h5>`);
    })
  }
}

function displayCustomerPastSpending() {
  customerPastSpending.innerText = `$${customer.totalSpent}`;
}

function searchForRooms() {
  findAllBookings()
    .then(bookingsData => {
      let checkedTrue = checkValidDate(bookingDate);
      let availableRooms;
      if (checkedTrue) {
        availableRooms = findAvailableRooms(bookingsData, bookingDate);
      }
      displayCustomerBookingPage(availableRooms, checkedTrue);
    })
}

function checkValidDate(userDate) {
  if (userDate <= currentDate || !userDate) {
    alert(`Please select a date after ${currentDate}`)
  } else {
    return true;
  }
}

function findAvailableRooms(bookings, userDate) {
  let unavailableRooms = bookings.reduce((notAvailable, booking) => {
    if (booking.date === userDate) {
      notAvailable.push(booking)
    }
    return notAvailable;
  }, [])

  return rooms.filter(room => {
    let roomAvailable = true;
    unavailableRooms.forEach(booking => {
      if (room.number === booking.roomNumber) {
        roomAvailable = false;
      }
    })
    return roomAvailable;
  })
}

function displayCustomerBookingPage(availableRooms) {
  customerMakeBooking.classList.remove('hide')
  customerDashboard.classList.add("hide");
  displayAvailableRooms(availableRooms);
}

function displayAvailableRooms(availableRooms) {
  if (availableRooms.length === 0) {
    alert(`We are SO SORRY! We do not have any rooms available on ${bookingDate}. Please choose another date.`)
  } else {
    availableRooms.forEach(room => {
      renderAvailableRooms(room);
    })
  }
}

function renderAvailableRooms(room) {
  addAvailableRoomToDisplay.insertAdjacentHTML('afterend',
    `<article class='available-room-card'>
    <h3>Room Type: ${room.roomType}</h3>
    <h3 class='room-number'>Room Number: ${room.number}</h3>
    <h3>Number of Beds: ${room.numBeds}</h3>
    <h3>Bed Types: ${room.bedSize}</h3>
    <h3>Has a Bidet?: ${room.bidet}</h3>
    <h3>Price/Night: $${(room.costPerNight).toFixed(2)}</h3>
    <button class='book-stay'>Book</button>
  </article>`)
}

function createBookingObject(event) {
  let convertRoomNumber = findNewBooking(event);

  let newBooking = {
    'userID': user.id,
    'date': bookingDate,
    'roomNumber': parseInt(convertRoomNumber, 10)
  }
  postNewBooking(newBooking);
}

function findNewBooking(event) {
  const bookStayButton = document.querySelectorAll('.book-stay');
  let roomNumber;
  let convertRoomNumber
  bookStayButton.forEach(button => {
    if (event.target === button) {
      console.log(event);
      roomNumber = event.target.parentElement.children[1].textContent;
      convertRoomNumber = roomNumber.slice(-2)
    }
  })
  return convertRoomNumber;
}