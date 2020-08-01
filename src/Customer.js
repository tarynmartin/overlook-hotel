import User from '../src/User';

class Customer extends User {
  constructor(date, bookings, userName, users, rooms, user) {
    super(date, bookings, userName, users, rooms);
    this.name = user.name;
    this.pastBookings = [];
    this.futureBookings = [];
    this.todaysBooking = [];
    this.totalSpent = 0;
  }
  findBookings(bookings) {
    bookings.forEach(booking => {
      let bookedDate = new Date(booking.date);
      if (this.id === booking.userID) {
        if (this.todaysDate.getTime() === bookedDate.getTime()) {
          this.todaysBooking.push(booking);
        } else if (bookedDate.getTime() > this.todaysDate.getTime()) {
          this.futureBookings.push(booking);
        } else if (bookedDate.getTime() < this.todaysDate.getTime()) {
          this.pastBookings.push(booking);
        }
      }
    })
  }
  spendingByCustomer(rooms) {
    rooms.reduce((acc, room) => {
      this.pastBookings.forEach(booking => {
        if (booking.roomNumber === room.number) {
          acc += room.costPerNight;
        }
      })
      this.totalSpent = acc;
      return acc;
    }, 0)
  }
}

export default Customer;