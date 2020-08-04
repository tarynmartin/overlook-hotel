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

// class Fetch {
//   constructor() {
//   }
  function fetchUserData() {
    return fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users')
      .then(response => response.json())
      .then(data => data.users)
      .catch(error => console.log(error));
  }

  async function fetchRoomData() {
    return fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/rooms/rooms')
      .then(response => response.json())
      .then(data => data.rooms)
      .catch(error => console.log(error));
  }

  async function getOnLoad() {
    return Promise.all([fetchUserData(), fetchRoomData()])
      .then(response => {
        let fetchData = {};
        fetchData.users = response[0];
        fetchData.rooms = response[1];
        return fetchData;
      })
      .catch(error => console.log(error));
  }
// }

export default Index; fetchUserData;