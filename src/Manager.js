import User from '../src/User';

class Manager extends User {
  constructor(date, bookings, userName, users, rooms) {
    super(date, bookings, userName, users, rooms);
    this.date = new Date(date);
    this.rooms = rooms;
    this.bookings = bookings;
    this.userName = userName;
    this.numberOfAvailableRooms = 0;
    this.percentageUnavailable = 0;
  }
  availableRooms() {
    const bookedRooms = this.bookings.reduce((acc, booking) => {
      const bookedDate = new Date(booking.date);
      if (this.date.getTime() === bookedDate.getTime()) {
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