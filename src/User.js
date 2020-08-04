class User {
  constructor(date, userName) {
    this.manager = false;
    this.customer = false;
    this.todaysDate = new Date(date);
    this.userName = userName;
    this.password = 'overlook2020';
    this.id = 0;
    this.amountSpent = 0;
    this.totalRevenue = 0;
  }
  checkUserType(userName, date, bookings, rooms) {
    if (userName === 'manager') {
      this.manager = true;
      this.totalRevenue = this.calculateAmountSpent(date, bookings, rooms);
      return 'manager';
    } else if (userName.startsWith('customer')) {
      this.pullUserId(userName);
      if (this.customer === true) {
        return 'customer';
      }
    }
  }
  pullUserId(userName) {
    this.id = Number.parseInt(userName.slice(8));
    if (this.id > 0 && this.id < 51) {
      this.customer = true;
    }
  }
  calculateAmountSpent(date, bookings, rooms) {
    const inputDate = new Date(date);
    const userDate = inputDate.getTime();
    return rooms.reduce((total, room) => {
      bookings.forEach(booking => {
        const bookedDate = new Date(booking.date);
        const bookingDate = bookedDate.getTime();
        if (userDate === bookingDate && room.number === booking.roomNumber) {
          total += room.costPerNight;
        }
      })
      let amountTotal = Number.parseFloat(total.toFixed(2));
      this.amountSpent = amountTotal;
      return amountTotal;
    }, 0)
  }
}

export default User;