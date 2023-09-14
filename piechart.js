var xmlhttp = new XMLHttpRequest();
var url = "https://api.covidtracking.com/v1/us/daily.json";
xmlhttp.open("GET", url, true);
xmlhttp.onerror = function () {
  console.error("Request error:", xmlhttp.status, xmlhttp.statusText);
};

xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4) {
    if (this.status == 200) {
      try {
        var data = JSON.parse(this.responseText);
        console.log(data);
        positiveCases = data[0].positive;
        negativeCases = data[0].negative;
        deaths = data[0].death;
        hospitalized = data[0].hospitalized;
        //console.log(positiveCases);
        
        var options = {
            series: [positiveCases, negativeCases, deaths, hospitalized  ],
            chart: {
            width: 380,
            type: 'pie',
          },
          labels: ['Postive', 'Negative', 'Deaths', 'Hospitalized' ],
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
          };
  
          var chart = new ApexCharts(document.querySelector("#pieChart"), options);
          chart.render();
        
        
      
  
  
      
      } catch (error) {
        console.error("Error parsing JSON:", error);
      }
    } else {
      console.error("HTTP error:", this.status, this.statusText);
    }

  }
};


xmlhttp.send();

