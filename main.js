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



async function fethCovidData(){
    let covidData = await fetch(APIKEY);
    let dataWithJSON = await covidData.json();
    let finalOutputArray = dataWithJSON;
    console.log(finalOutputArray);
   
    createCardElement1(finalOutputArray);
}

function createCardElement1(finalOutputArray){
    let container1 = document.querySelector('#maincontainer');

    let dataDiv = document.createElement("div");
    dataDiv.classList.add("datadiv");

    let dataDiv2 = document.createElement("div")
    dataDiv2.classList.add("datadiv2");

    //Div1
        let firstCard = document.createElement("div");
        firstCard.classList.add("div1");
        //Heading(Number of States)
        let firstCardHeading = document.createElement("h3");
        firstCardHeading.textContent =  "Number of States";
        firstCardHeading.classList.add("heading");

        firstCard.appendChild(firstCardHeading);
        //Number of States Data fething from API
        let numOfStates = document.createElement("h1");
        numOfStates.textContent = finalOutputArray[0].states;
        numOfStates.classList.add("numberData");

        firstCard.appendChild(numOfStates);
        
        
    //Div2
        let secondCard= document.createElement("div");
        secondCard.classList.add("div2");
        //Heading(Negative and positive patients)
        let secondCardHeading = document.createElement("h3");
        secondCardHeading.textContent = "Positive Cases";
        secondCardHeading.classList.add("heading");

        secondCard.appendChild(secondCardHeading);

        //Number of States Data getting from API
        let numOfPositiveCases = document.createElement("h1");
        numOfPositiveCases.textContent = finalOutputArray[0].positive;
        numOfPositiveCases.classList.add("numberData");

        secondDiv.appendChild(numOfPositiveCases);
    
    //Div3
        let thirdCard = document.createElement("div");
        thirdCard.classList.add("div3");
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


        
    
    dataDiv.appendChild(firstDiv);
    dataDiv.appendChild(secondDiv);
    dataDiv2.appendChild(thirdDiv);
    

    container1.appendChild(dataDiv);
    
}

//getDataFromSource();
fethCovidData();
