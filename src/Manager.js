import User from '../src/User';

class Manager extends User {
  constructor() {
    super();
    this.userName = 'manager';
    this.freeRooms = 0;
    this.percentOccupied = 0;
    this.totalRevenue = 0;
  }
  availableRooms() {
    // iterate over bookings and return how many unbooked
    // pull from bookings? or put that in here?
  }
  percentUnavailable() {
    // calculate percent and move to percentOccupied
    // pull from bookings? or put that in here?
  }
  calculateRevenue(bookings, rooms) {
    return rooms.reduce((total, room) => {
      bookings.forEach(booking => {
        if (room.number === booking.roomNumber) {
          total = total + room.costPerNight;
        }
      })
      this.totalRevenue = Number.parseFloat(total.toFixed(2));
      return total;
    }, 0)
  }
}

export default Manager;