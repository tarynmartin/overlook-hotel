import { expect } from 'chai'
import Manager from '../src/Manager.js';

describe('Manager', function() {
  let manager;
  let rooms;
  let bookings;
  beforeEach(() => {
    manager = new Manager("2020/01/25", 'manager', bookings, rooms);
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
      { "number": 11, "roomType": "single room", "bidet": true, "bedSize": "twin", "numBeds": 2, "costPerNight": 207.24 },
      { "number": 12, "roomType": "single room", "bidet": false, "bedSize": "twin", "numBeds": 2, "costPerNight": 172.09 }];
  })
  it('should be a function', function() {
    expect(Manager).to.be.a('function');
  });
  it('should be an instance of manager', function () {
    expect(manager).to.be.an.instanceof(Manager);
  });
  it('should have a userName of manager', function () {
    expect(manager.userName).to.equal('manager');
  });
  it('should have 0 as default for numberOfAvailableRooms', function () {
    expect(manager.numberOfAvailableRooms).to.equal(0);
  });
  it('should have 0 as default for numberOfUnavailableRooms', function () {
    expect(manager.percentageUnavailable).to.equal(0);
  });
  it('should be able to calculate rooms available today', function () {
    manager.availableRooms();

    expect(manager.numberOfAvailableRooms).to.equal(4);
  });
  it('should be able to calculate rooms unavailable today', function () {
    manager.availableRooms();
    manager.percentUnavailable();

    expect(manager.percentageUnavailable).to.equal(43);
  });
})