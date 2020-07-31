class Customer extends User {
  constructor(userId, name) {
    super();
    this.id = userId;
    this.name = name;
    this.userName = name + this.id;
    this.pastBookings = [];
    this.bookingToday = [];
    this.futureBookings = [];
    this.amountSpend = 0;
  }
  findBookings() {
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
  calculateAmountSpent() {
    // iterate over past bookings
    // use reduce
    // compare booking roomNumber to rooms.number
    // from rooms, add costPerNight to acc
    // return acc
  }
}

export default Customer;