import { expect } from 'chai'
import User from '../src/User.js';

describe('User', function () {
  let user1;
  let user2;
  let users;
  let rooms;
  let bookings;
  beforeEach(() => {
    user1 = new User("2020/01/25", bookings, 'customer1', users, rooms);
    user2 = new User("2020/01/25", bookings, 'manager', users, rooms);
    users = [
      { "id": 1, "name": "Leatha Ullrich" }, 
      { "id": 2, "name": "Rocio Schuster" }, 
      { "id": 3, "name": "Kelvin Schiller" }];
    bookings = [
      { "id": "5fwrgu4i7k55hl6sz", "userID": 9, "date": "2020/04/22", "roomNumber": 15, "roomServiceCharges": [] }, 
      { "id": "5fwrgu4i7k55hl6t5", "userID": 43, "date": "2020/01/24", "roomNumber": 24, "roomServiceCharges": [] }, 
      { "id": "5fwrgu4i7k55hl6tf", "userID": 36, "date": "2020/01/25", "roomNumber": 2, "roomServiceCharges": [] }, 
      { "id": "5fwrgu4i7k55hl6t8", "userID": 1, "date": "2020/01/25", "roomNumber": 12, "roomServiceCharges": [] }, 
      { "id": "5fwrgu4i7k55hl6t7", "userID": 20, "date": "2020/01/25", "roomNumber": 7, "roomServiceCharges": [] }];
    rooms = [
      { "number": 23, "roomType": "residential suite", "bidet": false, "bedSize": "queen", "numBeds": 2, "costPerNight": 176.36 }, 
      { "number": 24, "roomType": "suite", "bidet": false, "bedSize": "queen", "numBeds": 1, "costPerNight": 327.24 }, 
      { "number": 25, "roomType": "single room", "bidet": true, "bedSize": "queen", "numBeds": 1, "costPerNight": 305.85 },
      { "number": 2, "roomType": "suite", "bidet": false, "bedSize": "full", "numBeds": 2, "costPerNight": 477.38 }, 
      { "number": 7, "roomType": "single room", "bidet": false, "bedSize": "queen", "numBeds": 2, "costPerNight": 231.46 }, 
      { "number": 12, "roomType": "single room", "bidet": false, "bedSize": "twin", "numBeds": 2, "costPerNight": 172.09 }];
  })
  it('should be a function', function () {
    expect(User).to.be.a('function');
  });
  it('should be an instance of user', function () {
    expect(user1).to.be.an.instanceof(User);
  });
  it('should have a userName of customer1', function () {
    expect(user1.userName).to.equal('customer1');
  });
  it('should have a password of overlook2020', function () {
    expect(user1.password).to.equal('overlook2020');
  });
  it('should have 0 as default for amountSpent', function () {
    expect(user1.amountSpent).to.equal(0);
  });
  it('should be able to change customer to equal true with checkUserType', function() {
    user1.checkUserType('customer1');

    expect(user1.customer).to.equal(true);
    expect(user1.manager).to.equal(false);
  });
  it('shouldn\'t be able use checkUserType with invalid userName-string', function () {
    user1.checkUserType('homeboy');

    expect(user1.customer).to.equal(false);
    expect(user1.manager).to.equal(false);
  });
  it('shouldn\'t be able use checkUserType with invalid userName', function () {
    user1.checkUserType('customer52');

    expect(user1.customer).to.equal(false);
    expect(user1.manager).to.equal(false);
  });
  it('shouldn\'t be able use checkUserType with invalid userName-number', function () {
    user1.checkUserType('1');

    expect(user1.customer).to.equal(false);
    expect(user1.manager).to.equal(false);
  });
  it('shouldn\'t be able use checkUserType with invalid userName-symbol', function () {
    user1.checkUserType('!');

    expect(user1.customer).to.equal(false);
    expect(user1.manager).to.equal(false);
  });
  it('should be able to change manager to equal true with checkUserType', function () {
    user2.checkUserType('manager', "2020/01/25", bookings, rooms);

    expect(user2.customer).to.equal(false);
    expect(user2.manager).to.equal(true);
  });
  it('should be able to call calculateAmountSpent with checkUserType', function () {
    user2.checkUserType('manager', "2020/01/25", bookings, rooms);

    expect(user2.manager).to.equal(true);
    expect(user2.totalRevenue).to.equal(880.93);
  });
  it('should be able to calculate total revenue today', function () {
    user1.calculateAmountSpent("2020/01/25", bookings, rooms);

    expect(user1.amountSpent).to.equal(880.93);
  });
})