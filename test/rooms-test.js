import { expect } from 'chai'
import Rooms from '../src/Rooms.js';

describe('Rooms', function () {
  let rooms;
  let roomsArray;
  before(() => {
    rooms = new Rooms();
    roomsArray = [
      { "number": 23, "roomType": "residential suite", "bidet": false, "bedSize": "queen", "numBeds": 2, "costPerNight": 176.36 },
      { "number": 24, "roomType": "suite", "bidet": false, "bedSize": "queen", "numBeds": 1, "costPerNight": 327.24 },
      { "number": 25, "roomType": "single room", "bidet": true, "bedSize": "queen", "numBeds": 1, "costPerNight": 305.85 },
      { "number": 2, "roomType": "suite", "bidet": false, "bedSize": "full", "numBeds": 2, "costPerNight": 477.38 },
      { "number": 7, "roomType": "single room", "bidet": false, "bedSize": "queen", "numBeds": 2, "costPerNight": 231.46 },
      { "number": 11, "roomType": "single room", "bidet": true, "bedSize": "twin", "numBeds": 2, "costPerNight": 207.24 },
      { "number": 12, "roomType": "junior suite", "bidet": false, "bedSize": "king", "numBeds": 2, "costPerNight": 172.09 },
      { "number": 15, "roomType": "residential suite", "bidet": false, "bedSize": "full", "numBeds": 1, "costPerNight": 294.56 }];
  })
  it('should be a function', function () {
    expect(Rooms).to.be.a('function');
  });
  it('should be an instance of rooms', function () {
    expect(rooms).to.be.an.instanceof(Rooms);
  });
  it('should have an empty object as default for rooms', function () {
    expect(rooms.rooms).to.deep.equal({
      residentialSuites: [],
      suites: [],
      singleRooms: [],
      juniorSuites: []
    });
  });
  it('should have an empty array as default for oneBed', function () {
    expect(rooms.oneBed).to.deep.equal([]);
  });
  it('should have an empty array as default for twoBeds', function () {
    expect(rooms.twoBeds).to.deep.equal([]);
  });
  it('should have an empty array as default for twinBed', function () {
    expect(rooms.twinBed).to.deep.equal([]);
  });
  it('should have an empty array as default for fullBed', function () {
    expect(rooms.fullBed).to.deep.equal([]);
  });
  it('should have an empty array as default for queenBed', function () {
    expect(rooms.queenBed).to.deep.equal([]);
  });
  it('should have an empty array as default for kingBed', function () {
    expect(rooms.kingBed).to.deep.equal([]);
  });
  it('should sort rooms into an object based on roomType', function () {
    rooms.sortAllRooms(roomsArray);

    expect(rooms.rooms).to.deep.equal({
      residentialSuites: [{ "number": 23, "roomType": "residential suite", "bidet": false, "bedSize": "queen", "numBeds": 2, "costPerNight": 176.36 }, { "number": 15, "roomType": "residential suite", "bidet": false, "bedSize": "full", "numBeds": 1, "costPerNight": 294.56 }],
      suites: [{ "number": 24, "roomType": "suite", "bidet": false, "bedSize": "queen", "numBeds": 1, "costPerNight": 327.24 }, { "number": 2, "roomType": "suite", "bidet": false, "bedSize": "full", "numBeds": 2, "costPerNight": 477.38 }],
      singleRooms: [{ "number": 25, "roomType": "single room", "bidet": true, "bedSize": "queen", "numBeds": 1, "costPerNight": 305.85 }, { "number": 7, "roomType": "single room", "bidet": false, "bedSize": "queen", "numBeds": 2, "costPerNight": 231.46 },
        { "number": 11, "roomType": "single room", "bidet": true, "bedSize": "twin", "numBeds": 2, "costPerNight": 207.24 }],
      juniorSuites: [{ "number": 12, "roomType": "junior suite", "bidet": false, "bedSize": "king", "numBeds": 2, "costPerNight": 172.09 }]})
  });
  it('should sort rooms based on number of beds', function () {
    rooms.sortNumberOfBeds(roomsArray);

    expect(rooms.oneBed).to.deep.equal([{ "number": 24, "roomType": "suite", "bidet": false, "bedSize": "queen", "numBeds": 1, "costPerNight": 327.24 }, { "number": 25, "roomType": "single room", "bidet": true, "bedSize": "queen", "numBeds": 1, "costPerNight": 305.85 }, { "number": 15, "roomType": "residential suite", "bidet": false, "bedSize": "full", "numBeds": 1, "costPerNight": 294.56 }])
    expect(rooms.twoBeds).to.deep.equal([{ "number": 23, "roomType": "residential suite", "bidet": false, "bedSize": "queen", "numBeds": 2, "costPerNight": 176.36 }, { "number": 2, "roomType": "suite", "bidet": false, "bedSize": "full", "numBeds": 2, "costPerNight": 477.38 }, { "number": 7, "roomType": "single room", "bidet": false, "bedSize": "queen", "numBeds": 2, "costPerNight": 231.46 }, { "number": 11, "roomType": "single room", "bidet": true, "bedSize": "twin", "numBeds": 2, "costPerNight": 207.24 }, { "number": 12, "roomType": "junior suite", "bidet": false, "bedSize": "king", "numBeds": 2, "costPerNight": 172.09 }]);
  });
  it('should sort rooms based on types of beds', function () {
    rooms.sortByBedType(roomsArray);

    expect(rooms.twinBed).to.deep.equal([{ "number": 11, "roomType": "single room", "bidet": true, "bedSize": "twin", "numBeds": 2, "costPerNight": 207.24 }]);
    expect(rooms.fullBed).to.deep.equal([{ "number": 2, "roomType": "suite", "bidet": false, "bedSize": "full", "numBeds": 2, "costPerNight": 477.38 }, { "number": 15, "roomType": "residential suite", "bidet": false, "bedSize": "full", "numBeds": 1, "costPerNight": 294.56 }]);
    expect(rooms.queenBed).to.deep.equal([{ "number": 23, "roomType": "residential suite", "bidet": false, "bedSize": "queen", "numBeds": 2, "costPerNight": 176.36 }, { "number": 24, "roomType": "suite", "bidet": false, "bedSize": "queen", "numBeds": 1, "costPerNight": 327.24 }, { "number": 25, "roomType": "single room", "bidet": true, "bedSize": "queen", "numBeds": 1, "costPerNight": 305.85 }, { "number": 7, "roomType": "single room", "bidet": false, "bedSize": "queen", "numBeds": 2, "costPerNight": 231.46 }]);
    expect(rooms.kingBed).to.deep.equal([{ "number": 12, "roomType": "junior suite", "bidet": false, "bedSize": "king", "numBeds": 2, "costPerNight": 172.09 }]);
  });
})