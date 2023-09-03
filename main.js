let covidData = [];
const getDataFromSource = function () {
  fetch(`https://api.covidtracking.com/v1/us/daily.json`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      covidData = data;
    })
    .catch(function (error) {
      alert(error.message);
    });
};

getDataFromSource();
