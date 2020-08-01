class User {
  constructor(userName, users, rooms) {
    this.manager = false;
    this.customer = false;
    this.userName = userName;
    this.password = 'overlook2020';
    this.pastBookings = [];
    this.availableRooms = 0;
    this.unavailableRooms = 0;
    this.bookingToday = [];
    this.futureBookings = [];
    this.amountSpent = 0;
  }
  checkUserType(userName) {
    if (userName === 'manager') {
      this.manager = true;
    } else {
      this.customer = true;
    }
  }
  findBookings(date, bookings) {
    if (this.customer === true) {

    } else {

    }
    // iterate over all bookings
    // if userId matches, push booking into array
    //if date is before today, call findPastBookings
    // if date matches current date, push to bookingToday
    // call futureBooking if date is in the future
  }
  findPastBookings() {
    // add new booking to pastBookings array
    // sort pastBookings array, newest at beginning
  }
  calculateAmountSpent(date, bookings, rooms) {
    return rooms.reduce((total, room) => {
      bookings.forEach(booking => {
        if (date === booking.date && room.number === booking.roomNumber) {
          total = total + room.costPerNight;
        }
      })
      this.amountSpent = Number.parseFloat(total.toFixed(2));
      return total;
    }, 0)
  }
}

export default User;