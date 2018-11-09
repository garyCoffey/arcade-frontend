const fetchUserByGoogleToken = (googleToken) => {
  return fetch(`https://cors-anywhere/http://localhost:3001/${googleToken}`)
  // .then((response) => response.json());
}

// const fetchWines = () => {
//   return fetch(`https://cors-anywhere.herokuapp.com/https://pure-coast-15116.herokuapp.com/wines`)
//     .then((response) => response.json());
// }

// const addWine = (wineObject) => {
//   return fetch(`https://cors-anywhere.herokuapp.com/https://pure-coast-15116.herokuapp.com/wines`, {
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     method: 'POST',
//     body: JSON.stringify(wineObject)
//   })
// }

export default {
  fetchUserByGoogleToken: fetchUserByGoogleToken,
  //   fetchWines: fetchWines,
  //   addWine: addWine
}