function postNewBooking(newBooking) {
  fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings', {
    method: 'POST',
    headers: {
      'content-Type': 'application/json'
    },
    body: JSON.stringify(newBooking),
  })
    .then(response => {
      return response.json()
    })
    .then(data => console.log('data', data))
    .catch(error => console.log(error));
}

export default postNewBooking;