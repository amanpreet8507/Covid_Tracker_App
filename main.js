//let covidData = [];
const APIKEY = "https://api.covidtracking.com/v1/us/daily.json";

// const getDataFromSource = function () {
//   fetch(APIKEY)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       covidData = data;
//       localStorage.setItem('CovidData', JSON.stringify(data))
//       console.log(data);
//     })
//     .catch(function (error) {
//       alert(error.message);
//     });
// };

async function fethCovidData() {
  let covidData = await fetch(APIKEY);
  let dataWithJSON = await covidData.json();
  let finalOutputArray = dataWithJSON;
  console.log(finalOutputArray);

  createCardElement1(finalOutputArray);
}

function createCardElement1(finalOutputArray) {
  let container1 = document.querySelector("#maincontainer");

  let dataDiv = document.createElement("div");
  dataDiv.classList.add("datadiv");

  let dataDiv2 = document.createElement("div");
  dataDiv2.classList.add("datadiv2");

  //Card1*****************************************************
  let firstCard = document.createElement("div");
  firstCard.classList.add("card1");
  //Heading(Number of States)
  let firstCardHeading = document.createElement("h3");
  firstCardHeading.textContent = "Number of States";
  firstCardHeading.classList.add("heading");

  firstCard.appendChild(firstCardHeading);
  //Number of States Data fething from API
  let numOfStates = document.createElement("h1");
  numOfStates.textContent = finalOutputArray[0].states;
  numOfStates.classList.add("numberData");

  firstCard.appendChild(numOfStates);

  //Card2**************************************************
  let secondCard = document.createElement("div");
  secondCard.classList.add("card2");
  //Heading(Negative and positive patients)
  let secondCardHeading = document.createElement("h3");
  secondCardHeading.textContent = "Positive Cases";
  secondCardHeading.classList.add("heading");

  secondCard.appendChild(secondCardHeading);

  //Number of States Data getting from API
  let numOfPositiveCases = document.createElement("h1");
  numOfPositiveCases.textContent = finalOutputArray[0].positive;
  numOfPositiveCases.classList.add("numberData");

  secondCard.appendChild(numOfPositiveCases);

  //Card3***************************************************
  let thirdCard = document.createElement("div");
  thirdCard.classList.add("card3");
  //Heading(Deceased)
  let thirdCardHeading = document.createElement("h3");
  thirdCardHeading.textContent = "Deceased";
  thirdCardHeading.classList.add("heading");

  thirdCard.appendChild(thirdCardHeading);

  //Number of Deceased cases getting from API
  let numOfDeaths = document.createElement("h1");
  numOfDeaths.textContent = finalOutputArray[0].death;
  numOfDeaths.classList.add("numberData");

  thirdCard.appendChild(numOfDeaths);

  //Card4*************************************************
  let forthCard = document.createElement("div");
  forthCard.classList.add("card4");
  //Heading(Recovered)
  let forthCardHeading = document.createElement("h3");
  forthCardHeading.textContent = "Recovered";
  forthCardHeading.classList.add("heading");
  
  forthCard.appendChild(forthCardHeading);

  //Number of Recovered Cases getting
  let numOfRecoveredCases =  document.createElement("h1");
  if(finalOutputArray[0].recovered === null){
    numOfRecoveredCases.textContent = 0;
  }
  numOfRecoveredCases.classList.add("numberData");

  forthCard.appendChild(numOfRecoveredCases);




  
  //Appending cards to div
  dataDiv.appendChild(firstCard);
  dataDiv.appendChild(secondCard);
  dataDiv2.appendChild(thirdCard);
  dataDiv2.appendChild(forthCard);

  //Appending divs to container
  container1.appendChild(dataDiv);
  container1.appendChild(dataDiv2);
}

//getDataFromSource();
fethCovidData();
