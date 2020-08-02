import { expect } from 'chai'
import Customer from '../src/Customer.js';

describe('Customer', function () {
  let customer;
  let customer2;
  let customer3;
  let customer4;
  let users;
  let rooms;
  let bookings1;
  let pastBookingsExample;
  let futureBookingsExample;
  let sadPathBookings;
  before(() => {
    users = [
      { "id": 1, "name": "Leatha Ullrich" },
      { "id": 2, "name": "Rocio Schuster" },
      { "id": 3, "name": "Kelvin Schiller" }];
    customer = new Customer("2020/01/25", 'customer1', users[0]);
    customer2 = new Customer("2020/01/25", 'customer1', users[0]);
    customer3 = new Customer("2020/01/25", 'customer1', users[0]);
    customer4 = new Customer("2020/01/25", sadPathBookings, 'customer1', users, rooms, users[0]);
    bookings1 = [
      { "id": "5fwrgu4i7k55hl6sz", "userID": 9, "date": "2020/04/22", "roomNumber": 15, "roomServiceCharges": [] },
      { "id": "5fwrgu4i7k55hl6t5", "userID": 43, "date": "2020/01/24", "roomNumber": 24, "roomServiceCharges": [] },
      { "id": "5fwrgu4i7k55hl6tf", "userID": 36, "date": "2020/01/25", "roomNumber": 2, "roomServiceCharges": [] },
      { "id": "5fwrgu4i7k55hl6t8", "userID": 1, "date": "2020/01/25", "roomNumber": 12, "roomServiceCharges": [] },
      { "id": "5fwrgu4i7k55hl6t7", "userID": 20, "date": "2020/01/25", "roomNumber": 7, "roomServiceCharges": [] }];
    pastBookingsExample = [
      { "id": "5fwrgu4i7k55hl6sz", "userID": 1, "date": "2020/01/21", "roomNumber": 15, "roomServiceCharges": [] },
      { "id": "5fwrgu4i7k55hl6t5", "userID": 1, "date": "2020/01/22", "roomNumber": 24, "roomServiceCharges": [] },
      { "id": "5fwrgu4i7k55hl6tf", "userID": 36, "date": "2020/01/23", "roomNumber": 2, "roomServiceCharges": [] },
      { "id": "5fwrgu4i7k55hl6t8", "userID": 1, "date": "2020/01/25", "roomNumber": 12, "roomServiceCharges": [] },
      { "id": "5fwrgu4i7k55hl6t7", "userID": 1, "date": "2020/01/24", "roomNumber": 7, "roomServiceCharges": [] }];
    futureBookingsExample = [
      { "id": "5fwrgu4i7k55hl6sz", "userID": 1, "date": "2020/04/22", "roomNumber": 15, "roomServiceCharges": [] },
      { "id": "5fwrgu4i7k55hl6t5", "userID": 1, "date": "2020/04/24", "roomNumber": 24, "roomServiceCharges": [] },
      { "id": "5fwrgu4i7k55hl6tf", "userID": 1, "date": "2020/04/25", "roomNumber": 2, "roomServiceCharges": [] },
      { "id": "5fwrgu4i7k55hl6t8", "userID": 1, "date": "2020/01/25", "roomNumber": 12, "roomServiceCharges": [] },
      { "id": "5fwrgu4i7k55hl6t7", "userID": 20, "date": "2020/03/25", "roomNumber": 7, "roomServiceCharges": [] }];
    sadPathBookings = [
      { "id": "5fwrgu4i7k55hl6sz", "userID": 1, "date": "2020/04/22", "roomNumber": 15, "roomServiceCharges": [] },
      { "id": "5fwrgu4i7k55hl6t5", "userID": 1, "date": "2020/01/24", "roomNumber": 24, "roomServiceCharges": [] },
      { "id": "5fwrgu4i7k55hl6tf", "userID": 36, "date": "2020/01/25", "roomNumber": 2, "roomServiceCharges": [] },
      { "id": "5fwrgu4i7k55hl6t8", "userID": 1, "date": "2020/01/25", "roomNumber": 12, "roomServiceCharges": [] },
      { "id": "5fwrgu4i7k55hl6t7", "userID": 20, "date": "2020/01/25", "roomNumber": 7, "roomServiceCharges": [] }];
    rooms = [
      { "number": 23, "roomType": "residential suite", "bidet": false, "bedSize": "queen", "numBeds": 2, "costPerNight": 176.36 },
      { "number": 24, "roomType": "suite", "bidet": false, "bedSize": "queen", "numBeds": 1, "costPerNight": 327.24 },
      { "number": 25, "roomType": "single room", "bidet": true, "bedSize": "queen", "numBeds": 1, "costPerNight": 305.85 },
      { "number": 2, "roomType": "suite", "bidet": false, "bedSize": "full", "numBeds": 2, "costPerNight": 477.38 },
      { "number": 7, "roomType": "single room", "bidet": false, "bedSize": "queen", "numBeds": 2, "costPerNight": 231.46 },
      { "number": 11, "roomType": "single room", "bidet": true, "bedSize": "twin", "numBeds": 2, "costPerNight": 207.24 },
      { "number": 12, "roomType": "single room", "bidet": false, "bedSize": "twin", "numBeds": 2, "costPerNight": 172.09 }, 
      { "number": 15, "roomType": "residential suite", "bidet": false, "bedSize": "full", "numBeds": 1, "costPerNight": 294.56 }];
  })
  it('should be a function', function () {
    expect(Customer).to.be.a('function');
  });
  it('should be an instance of customer', function () {
    expect(customer).to.be.an.instanceof(Customer);
  });
  it('should have the name of the customer', function () {
    expect(customer.name).to.equal("Leatha Ullrich");
  });
  it('should have an empty array as default for past bookings', function () {
    expect(customer.pastBookings).to.deep.equal([]);
  });
  it('should have an empty array as default for future bookings', function () {
    expect(customer.futureBookings).to.deep.equal([]);
  });
  it('should have an empty array as default for booking today', function () {
    expect(customer.todaysBooking).to.deep.equal([]);
  });
  it('should be able to find if a user has a booking today', function () {
    customer.checkUserType('customer1', '2020/01/25', bookings1, rooms);
    customer.findBookings(bookings1);

    expect(customer.todaysBooking).to.deep.equal([{ "id": "5fwrgu4i7k55hl6t8", "userID": 1, "date": "2020/01/25", "roomNumber": 12, "roomServiceCharges": [] }]);
  });
  it('should be able to find if a user has past bookings', function () {
    customer2.checkUserType('customer1', '2020/01/25', pastBookingsExample, rooms);
    customer2.findBookings(pastBookingsExample);

    expect(customer2.pastBookings).to.deep.equal([{ "id": "5fwrgu4i7k55hl6sz", "userID": 1, "date": "2020/01/21", "roomNumber": 15, "roomServiceCharges": [] }, { "id": "5fwrgu4i7k55hl6t5", "userID": 1, "date": "2020/01/22", "roomNumber": 24, "roomServiceCharges": [] }, { "id": "5fwrgu4i7k55hl6t7", "userID": 1, "date": "2020/01/24", "roomNumber": 7, "roomServiceCharges": [] }]);
  });
  it('should be able to find if a user has future bookings', function () {
    customer3.checkUserType('customer1', '2020/01/25', futureBookingsExample, rooms);
    customer3.findBookings(futureBookingsExample);

    expect(customer3.futureBookings).to.deep.equal([{ "id": "5fwrgu4i7k55hl6sz", "userID": 1, "date": "2020/04/22", "roomNumber": 15, "roomServiceCharges": [] },
      { "id": "5fwrgu4i7k55hl6t5", "userID": 1, "date": "2020/04/24", "roomNumber": 24, "roomServiceCharges": [] },
      { "id": "5fwrgu4i7k55hl6tf", "userID": 1, "date": "2020/04/25", "roomNumber": 2, "roomServiceCharges": [] }]);
  });
  it('should be able to sort bookings by user', function () {
    customer4.checkUserType('customer1', '2020/01/25', sadPathBookings, rooms);
    customer4.findBookings(sadPathBookings);

    expect(customer4.pastBookings).to.deep.equal([{ "id": "5fwrgu4i7k55hl6t5", "userID": 1, "date": "2020/01/24", "roomNumber": 24, "roomServiceCharges": [] }]);
    expect(customer4.todaysBooking).to.deep.equal([{ "id": "5fwrgu4i7k55hl6t8", "userID": 1, "date": "2020/01/25", "roomNumber": 12, "roomServiceCharges": [] }]);
    expect(customer4.futureBookings).to.deep.equal([{ "id": "5fwrgu4i7k55hl6sz", "userID": 1, "date": "2020/04/22", "roomNumber": 15, "roomServiceCharges": [] }]);
  });
  it('should calculate amount spent by a customer', function () {
    customer2.pastBookings = [];
    customer2.checkUserType('customer1', '2020/01/25', pastBookingsExample, rooms);
    customer2.findBookings(pastBookingsExample);
    customer2.spendingByCustomer(rooms);

    expect(customer2.totalSpent).to.equal(853.26);
  })
})
