class Manager extends User {
  constructor() {
    super();
    this.userName = 'manager';
    this.password = 'overlook2020';
    this.freeRooms = 0;
    this.percentOccupied = '';
    this.totalRevenue = 0;
  }
  availableRooms() {
    // iterate over bookings and return how many unbooked
  }
  percentUnavailable() {
    // calculate percent and move to percentOccupied
  }
  calculateRevenue() {
    // iterate over booked rooms
    // collect price (reduce?) and add to totalRevenue
  }
}

export default Manager;