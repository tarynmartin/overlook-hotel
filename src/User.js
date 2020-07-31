class User {
  constructor() {
    this.manager = false;
    this.customer = false;
    this.password = 'overlook2020';
  }
  checkUserType(userName) {
    if (userName === 'manager') {
      this.manager = true;
    } else {
      this.customer = true;
    }
  }
}

export default User;