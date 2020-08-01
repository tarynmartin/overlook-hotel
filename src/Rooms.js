class Rooms {
  constructor() {
    this.rooms = {
      residentialSuites: [],
      suites: [],
      singleRooms: [],
      juniorSuites: []
    };
    this.oneBed = [];
    this.twoBeds = [];
    this.twinBed = [];
    this.fullBed = [];
    this.queenBed = [];
    this.kingBed = [];
  }
  sortAllRooms(allRooms) {
    allRooms.forEach(room => {
      switch (room.roomType) {
        case 'residential suite':
          this.rooms.residentialSuites.push(room);
          break;
        case 'suite':
          this.rooms.suites.push(room);
          break;
        case 'single room':
          this.rooms.singleRooms.push(room);
          break;
        case 'junior suite':
          this.rooms.juniorSuites.push(room); 
      }
    })
  }
  sortNumberOfBeds(allRooms) {
    allRooms.forEach(room => {
      switch (room.numBeds) {
        case 1:
          this.oneBed.push(room);
          break;
        case 2:
          this.twoBeds.push(room);
          break;
      }
    })
  }
  sortByBedType(allRooms) {
    allRooms.forEach(room => {
      switch (room.bedSize) {
        case 'twin':
          this.twinBed.push(room);
          break;
        case 'full':
          this.fullBed.push(room);
          break;
        case 'queen':
          this.queenBed.push(room);
          break;
        case 'king':
          this.kingBed.push(room);
      }
    })
  }
}

export default Rooms;