// import { expect } from 'chai'
// import Bookings from '../src/Bookings.js';

describe('Bookings', function () {
  let bookings;
  let bookingsArray;
  let rooms;
  beforeEach(() => {
    bookings = new Bookings();
    bookingsArray = [
      { "id": "5fwrgu4i7k55hl6sz", "userID": 9, "date": "2020/04/22", "roomNumber": 5, "roomServiceCharges": [] },
      { "id": "5fwrgu4i7k55hl6t5", "userID": 43, "date": "2020/01/24", "roomNumber": 1, "roomServiceCharges": [] },
      { "id": "5fwrgu4i7k55hl6tf", "userID": 36, "date": "2020/01/25", "roomNumber": 2, "roomServiceCharges": [] },
      { "id": "5fwrgu4i7k55hl6t8", "userID": 1, "date": "2020/01/25", "roomNumber": 4, "roomServiceCharges": [] },
      { "id": "5fwrgu4i7k55hl6t7", "userID": 20, "date": "2020/01/25", "roomNumber": 6, "roomServiceCharges": [] }];
    rooms = [{ "number": 1, "roomType": "residential suite", "bidet": true, "bedSize": "queen", "numBeds": 1, "costPerNight": 358.4 }, { "number": 2, "roomType": "suite", "bidet": false, "bedSize": "full", "numBeds": 2, "costPerNight": 477.38 }, { "number": 3, "roomType": "single room", "bidet": false, "bedSize": "king", "numBeds": 1, "costPerNight": 491.14 }, { "number": 4, "roomType": "single room", "bidet": false, "bedSize": "queen", "numBeds": 1, "costPerNight": 429.44 }, { "number": 5, "roomType": "single room", "bidet": true, "bedSize": "queen", "numBeds": 2, "costPerNight": 340.17 }, { "number": 6, "roomType": "junior suite", "bidet": true, "bedSize": "queen", "numBeds": 1, "costPerNight": 397.02 }];
  });
  it('should be a function', function () {
    expect(Bookings).to.be.a('function');
  });
  it('should be an instance of bookings', function () {
    expect(bookings).to.be.an.instanceof(Bookings);
  });
  it('should have an empty array as default for todaysBookings', function () {
    expect(bookings.todaysBookings).to.deep.equal([]);
  });
  it('should have an empty array as default for futureBookings', function () {
    expect(bookings.futureBookings).to.deep.equal([]);
  });
  it('should have an empty array as default for pastBookings', function () {
    expect(bookings.pastBookings).to.deep.equal([]);
  });
  it('should have an empty array as default for availableRooms', function () {
    expect(bookings.availableRooms).to.deep.equal([]);
  });
  it('should have an empty array as default for unavailableRooms', function () {
    expect(bookings.unavailableRooms).to.deep.equal([]);
  });
  it('should have 0 as default for availableRoomsCount', function () {
    expect(bookings.availableRoomsCount).to.equal(0);
  });
  it('should have 0 as default for unavailableRoomsCount', function () {
    expect(bookings.unavailableRoomsCount).to.equal(0);
  });
  it('should be able to track how many rooms are available on a certain date', function () {
    bookings.checkAvailability("2020/01/25", bookingsArray, rooms)

    expect(bookings.availableRoomsCount).to.equal(2);
    expect(bookings.availableRooms).to.deep.equal([{ "id": "5fwrgu4i7k55hl6sz", "userID": 9, "date": "2020/04/22", "roomNumber": 5, "roomServiceCharges": [] },
      { "id": "5fwrgu4i7k55hl6t5", "userID": 43, "date": "2020/01/24", "roomNumber": 1, "roomServiceCharges": [] }])
  });
  it('should be able to collect all available rooms for a date', function () {
    bookings.checkAvailability("2020/01/24", bookingsArray, rooms)

    expect(bookings.availableRooms).to.deep.equal([{ "id": "5fwrgu4i7k55hl6sz", "userID": 9, "date": "2020/04/22", "roomNumber": 5, "roomServiceCharges": [] }, { "id": "5fwrgu4i7k55hl6tf", "userID": 36, "date": "2020/01/25", "roomNumber": 2, "roomServiceCharges": [] }, { "id": "5fwrgu4i7k55hl6t8", "userID": 1, "date": "2020/01/25", "roomNumber": 4, "roomServiceCharges": [] }, { "id": "5fwrgu4i7k55hl6t7", "userID": 20, "date": "2020/01/25", "roomNumber": 6, "roomServiceCharges": [] }]);
  });
  it('should be able to track how many rooms are unavailable on a certain date', function () {
    bookings.checkAvailability("2020/01/24", bookingsArray, rooms)

    expect(bookings.unavailableRoomsCount).to.equal(1)
    expect(bookings.unavailableRooms).to.deep.equal([{ "id": "5fwrgu4i7k55hl6t5", "userID": 43, "date": "2020/01/24", "roomNumber": 1, "roomServiceCharges": [] }]);
  });
  it('should be able to collect all unavailable rooms for a date', function () {
    bookings.checkAvailability("2020/01/25", bookingsArray, rooms)

    expect(bookings.unavailableRooms).to.deep.equal([{ "id": "5fwrgu4i7k55hl6tf", "userID": 36, "date": "2020/01/25", "roomNumber": 2, "roomServiceCharges": [] }, { "id": "5fwrgu4i7k55hl6t8", "userID": 1, "date": "2020/01/25", "roomNumber": 4, "roomServiceCharges": [] }, { "id": "5fwrgu4i7k55hl6t7", "userID": 20, "date": "2020/01/25", "roomNumber": 6, "roomServiceCharges": [] }])
  })
  it('should be able to collect all past bookings', function () {
    bookings.sortBookings(bookingsArray, "2020/01/25");

    expect(bookings.pastBookings).to.deep.equal([{ "id": "5fwrgu4i7k55hl6t5", "userID": 43, "date": "2020/01/24", "roomNumber": 1, "roomServiceCharges": [] }])
  })
  it('should be able to collect all current bookings', function () {
    bookings.sortBookings(bookingsArray, "2020/01/25");

    expect(bookings.todaysBookings).to.deep.equal([{ "id": "5fwrgu4i7k55hl6tf", "userID": 36, "date": "2020/01/25", "roomNumber": 2, "roomServiceCharges": [] }, { "id": "5fwrgu4i7k55hl6t8", "userID": 1, "date": "2020/01/25", "roomNumber": 4, "roomServiceCharges": [] }, { "id": "5fwrgu4i7k55hl6t7", "userID": 20, "date": "2020/01/25", "roomNumber": 6, "roomServiceCharges": [] }]);
  })
  it('should be able to collect all future bookings', function () {
    bookings.sortBookings(bookingsArray, "2020/01/25");

    expect(bookings.futureBookings).to.deep.equal([{ "id": "5fwrgu4i7k55hl6sz", "userID": 9, "date": "2020/04/22", "roomNumber": 5, "roomServiceCharges": [] }])
  })
})