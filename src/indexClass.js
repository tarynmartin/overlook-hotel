class Index {
  constructor() {
  }
  testNavBar() {
    const navBar = document.querySelector(".top-bar");
    navBar.innerHTML = 'Outkast'
  }
  testNameDisplay() {
    const nameDisplay = document.querySelector(".name-display");
    nameDisplay.innerHTML = 'Bean';
  }
  testDateDisplay() {
    const displayDate = document.querySelector(".display-date");
    displayDate.innerHTML = '2020/12/01';
  }
}



export default Index;