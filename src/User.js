class User {
  constructor() {
    this.manager = false;
    this.customer = false;
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