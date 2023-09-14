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
        var date = [];
        var deathIncrease = [];
        for (var i = 0; i < 12 && i < data.length; i++) { 
          date.push(data[i].date);
          deathIncrease.push(data[i].deathIncrease);
        }
        
        //console.log(date, deathIncrease);
        var options = {
          series: [{
          name: 'Inflation',
          data: deathIncrease
        }],
          chart: {
          height: 350,
          type: 'bar',
        },
        plotOptions: {
          bar: {
            borderRadius: 10,
            dataLabels: {
              position: 'top', // top, center, bottom
            },
          }
        },
        dataLabels: {
          enabled: true,
          formatter: function (val) {
            return val;
          },
          offsetY: -20,
          style: {
            fontSize: '12px',
            colors: ["#304758"]
          }
        },
        
        xaxis: {
          categories: date,
          position: 'top',
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          },
          crosshairs: {
            fill: {
              type: 'gradient',
              gradient: {
                colorFrom: '#D8E3F0',
                colorTo: '#BED1E6',
                stops: [0, 100],
                opacityFrom: 0.4,
                opacityTo: 0.5,
              }
            }
          },
          tooltip: {
            enabled: true,
          }
        },
        yaxis: {
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false,
          },
          labels: {
            show: false,
            formatter: function (val) {
              return val + "%";
            }
          }
        
        },
        title: {
          text: 'Covid Death Increase, 2020',
          floating: true,
          offsetY: 330,
          align: 'center',
          style: {
            color: '#444'
          }
        }
        };
      
        var chart = new ApexCharts(document.querySelector("#barChart"), options);
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

