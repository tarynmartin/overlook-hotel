import User from '../src/User';

class Manager extends User {
  constructor(date, userName, bookings, rooms) {
    super(date, userName);
    this.rooms = rooms;
    this.bookings = bookings;
    this.userName = userName;
    this.numberOfAvailableRooms = 0;
    this.percentageUnavailable = 0;
  }
  availableRooms() {
    const bookedRooms = this.bookings.reduce((acc, booking) => {
      const bookedDate = new Date(booking.date);
      if (this.todaysDate.getTime() === bookedDate.getTime()) {
        acc++;
      }
      return acc;
    }, 0)
    this.numberOfAvailableRooms = this.rooms.length - bookedRooms;
  }
  percentUnavailable() {
    const percentOccupied = ((this.rooms.length - this.numberOfAvailableRooms) / this.rooms.length) * 100;
    this.percentageUnavailable = Number.parseInt(percentOccupied.toFixed());
  }
}

export default Manager;