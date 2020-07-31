class Rooms {
  constructor() {
    this.rooms = {
      residentialRooms: [],
      suites: [],
      singleRooms: [],
      juniorSuites: []
    };
    this.oneBed = [];
    this.twoBeds = [];
    this.fullBed = [];
    this.queenBed = [];
    this.kingBed = [];
  }
  sortAllRooms() {
    // sort rooms data from server
    // sort by roomType and add to object arrays
  }
  sortByBedNumber() {
    // iterate over each array in rooms array
    // push object into appropriate array for amount of beds
  }
  sortByBedType() {
    // iterate over each array in rooms array
    // push object into appropriate array for each bed type
  }
}

export default Rooms;