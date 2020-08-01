import { expect } from 'chai'
import Manager from '../src/Manager.js';

describe('Manager', function() {
  let manager;
  let rooms;
  let bookings;
  beforeEach(() => {
    manager = new Manager();
    bookings = [{ "id": "5fwrgu4i7k55hl6tf", "userID": 36, "date": "2020/01/25", "roomNumber": 2, "roomServiceCharges": [] }, { "id": "5fwrgu4i7k55hl6t8", "userID": 1, "date": "2020/01/25", "roomNumber": 12, "roomServiceCharges": [] }, { "id": "5fwrgu4i7k55hl6t7", "userID": 20, "date": "2020/01/25", "roomNumber": 7, "roomServiceCharges": [] }];
    rooms = [{ "number": 2, "roomType": "suite", "bidet": false, "bedSize": "full", "numBeds": 2, "costPerNight": 477.38 }, { "number": 7, "roomType": "single room", "bidet": false, "bedSize": "queen", "numBeds": 2, "costPerNight": 231.46 }, { "number": 12, "roomType": "single room", "bidet": false, "bedSize": "twin", "numBeds": 2, "costPerNight": 172.09 }];
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
  it('should have freeRooms default to 0', function () {
    expect(manager.freeRooms).to.equal(0);
  });
  it('should have percentOccupied default to 0', function () {
    expect(manager.percentOccupied).to.equal(0);
  });
  it('should have totalRevenue default to 0', function () {
    expect(manager.totalRevenue).to.equal(0);
  });
  // it('should be able to calculate rooms available today', function () {
  //   //call availableRooms
  //   expect(manager.percentOccupied).to.equal(0);
  // });
  // it('should be able to calculate rooms unavailable today', function () {
  //  // call percentUnavailable
  //   expect(manager.percentOccupied).to.equal(0);
  // });
  it('should be able to calculate total revenue today', function () {
    manager.calculateRevenue(bookings, rooms);

    expect(manager.totalRevenue).to.equal(880.93);
  });
})