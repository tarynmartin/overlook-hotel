class User {
  constructor(userName, users, rooms) {
    this.manager = false;
    this.customer = false;
    this.userName = userName;
    this.password = 'overlook2020';
    this.amountSpent = 0;
  }
  checkUserType(userName) {
    if (userName === 'manager') {
      this.manager = true;
    } else {
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
      this.amountSpent = Number.parseFloat(total.toFixed(2));
      return total;
    }, 0)
  }
}

export default User;