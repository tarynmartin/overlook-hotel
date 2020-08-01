class User {
  constructor(date, bookings, userName, users, rooms) {
    this.manager = false;
    this.customer = false;
    this.userName = userName;
    this.password = 'overlook2020';
    this.amountSpent = 0;
    this.totalRevenue = 0;
  }
  checkUserType(userName, date, bookings, rooms) {
    if (userName === 'manager') {
      this.manager = true;
      this.totalRevenue = this.calculateAmountSpent(date, bookings, rooms);
    } else if (userName.startsWith('customer')){
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
          total = total + room.costPerNight;
        }
      })
      let amountTotal = Number.parseFloat(total.toFixed(2));
      this.amountSpent = amountTotal;
      return amountTotal;
    }, 0)
  }
}

export default User;