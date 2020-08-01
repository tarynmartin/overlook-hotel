import { expect } from 'chai'
import User from '../src/User.js';

describe('User', function () {
  let user;
  let users;
  let rooms;
  let bookings;
  beforeEach(() => {
    user = new User('customer1', users, rooms);
    users = [{ "id": 1, "name": "Leatha Ullrich" }, { "id": 2, "name": "Rocio Schuster" }, { "id": 3, "name": "Kelvin Schiller" }];
    bookings = [{ "id": "5fwrgu4i7k55hl6tf", "userID": 36, "date": "2020/01/25", "roomNumber": 2, "roomServiceCharges": [] }, { "id": "5fwrgu4i7k55hl6t8", "userID": 1, "date": "2020/01/25", "roomNumber": 12, "roomServiceCharges": [] }, { "id": "5fwrgu4i7k55hl6t7", "userID": 20, "date": "2020/01/25", "roomNumber": 7, "roomServiceCharges": [] }];
    rooms = [{ "number": 2, "roomType": "suite", "bidet": false, "bedSize": "full", "numBeds": 2, "costPerNight": 477.38 }, { "number": 7, "roomType": "single room", "bidet": false, "bedSize": "queen", "numBeds": 2, "costPerNight": 231.46 }, { "number": 12, "roomType": "single room", "bidet": false, "bedSize": "twin", "numBeds": 2, "costPerNight": 172.09 }];
  })
  it('should be a function', function () {
    expect(User).to.be.a('function');
  });
  it('should be an instance of user', function () {
    expect(user).to.be.an.instanceof(User);
  });
  it('should have a userName of customer1', function () {
    expect(user.userName).to.equal('customer1');
  });
  it('should have a password of overlook2020', function () {
    expect(user.password).to.equal('overlook2020');
  });
  // it('should have an empty array for bookingToday', function () {
  //   expect(user.bookingToday).to.deep.equal([]);
  // });
  it('should have 0 as default for amountSpent', function () {
    expect(user.amountSpent).to.equal(0);
  });
  it('should be able to change customer to equal true with checkUserType', function() {
    user.checkUserType(this.userName);

    expect(user.customer).to.equal(true);
    expect(user.manager).to.equal(false);
  });
  it('should be able to calculate total revenue today', function () {
    user.calculateAmountSpent("2020/01/25", bookings, rooms);

    expect(user.amountSpent).to.equal(880.93);
  });
})