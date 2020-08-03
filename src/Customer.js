import User from '../src/User';

class Customer extends User {
  constructor(date, userName, user) {
    super(date, userName);
    this.name = user.name;
    this.pastBookings = [];
    this.futureBookings = [];
    this.todaysBooking = [];
    this.totalSpent = 0;
  }
  findBookings(bookings, id) {
    bookings.forEach(booking => {
      let bookedDate = new Date(booking.date);
      if (id === booking.userID) {
        if (this.todaysDate.getTime() === bookedDate.getTime()) {
          this.todaysBooking.push(booking);
        } else if (bookedDate.getTime() > this.todaysDate.getTime()) {
          this.futureBookings.push(booking);
        } else if (bookedDate.getTime() < this.todaysDate.getTime()) {
          this.pastBookings.push(booking);
        }
      }
      this.sortBookings('past');
      this.sortBookings('future');
    })
  }
  sortBookings(timePeriod) {
    if (timePeriod === 'future') {
      this.futureBookings.sort((a, b) => {
        let aDate = new Date(a.date);
        let bDate = new Date(b.date);
        return bDate.getTime() - aDate.getTime();
      });
    } else if (timePeriod === 'past') {
      this.pastBookings.sort((a, b) => {
        let aDate = new Date(a.date);
        let bDate = new Date(b.date);
        return aDate.getTime() - bDate.getTime();
      });
    }

  }
  spendingByCustomer(rooms) {
    rooms.reduce((acc, room) => {
      this.pastBookings.forEach(booking => {
        if (booking.roomNumber === room.number) {
          acc += room.costPerNight;
        }
      })
      this.totalSpent = acc.toFixed(2);
      return acc;
    }, 0)
  }
}

export default Customer;