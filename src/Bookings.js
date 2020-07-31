class Bookings {
  constructor(bookings) {
    this.bookings = bookings;
    this.todaysBookings = [];
    this.futureBookings = [];
    this.pastBookings = [];
    this.availableRooms = 0;
    this.unavailableRoomsCount = 0;
    this.unavailableRooms = [];
    this.availableRooms = [];
  }
  countNumberOfAvailableRooms(date) {
    // iterate over this.bookings
    // if date on booking matches date passed in, increment 
    // unavailable rooms
    // add room to unavailableRooms array
    // once through all bookings, subtract unavailable from 25 
    // (total number of possible rooms)
  }
  checkForAvailableRooms(date) {
    // iterate over bookings and only return bookings for date
    // passed in. When dates match, iterate over this.rooms array
    // If match, add to unavailable rooms array
    // else, push room to available rooms array
  }
}

export default Bookings;