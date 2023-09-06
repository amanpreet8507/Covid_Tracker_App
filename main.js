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


    //Div1
        let firstDiv = document.createElement("div");
        firstDiv.classList.add("div1");
        //Heading(Number of States)
        let firstHeading = document.createElement("h3");
        firstHeading.textContent =  "Number of States";
        firstHeading.classList.add("heading");

        firstDiv.appendChild(firstHeading);
        //Number of States Data fething from API
        let numOfStates = document.createElement("h1");
        numOfStates.textContent = finalOutputArray[0].states;
        numOfStates.classList.add("numberData");

        firstDiv.appendChild(numOfStates);
        
        
    //Div2
        let secondDiv= document.createElement("div");
        secondDiv.classList.add("div2");
        //Heading(Negative and positive patients)
        let secondHeading = document.createElement("h3");
        secondHeading.textContent = "Positive Cases";
        secondHeading.classList.add("heading");

        secondDiv.appendChild(secondHeading);

        //Number of States Data fething from API
        let numOfPositiveCases = document.createElement("h1");
        numOfPositiveCases.textContent = finalOutputArray[0].positive;
        numOfPositiveCases.classList.add("numberData");

        secondDiv.appendChild(numOfPositiveCases);
    
   


        
    
    dataDiv.appendChild(firstDiv);
    dataDiv.appendChild(secondDiv);
    
    

    container1.appendChild(dataDiv);
    
}

//getDataFromSource();
fethCovidData();
