var ctx = document.getElementById("trafficChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31" ],
        datasets: [{
            label: 'Traffic',
            data: [ 500, 900, 750, 1250, 1750, 2300, 1800, 2000, 1500, 2500, 2000, 2400],
            backgroundColor: '#d2d2de',
            borderColor: '#716ecc',
            borderWidth: 1,
            pointBorderWidth: 2,
            pointRadius: 6,
            pointBackgroundColor: 'white',
            lineTension: 0    
        }]
    },
    options: {
        legend: {
            display: false,
            labels: {
                usePointStyle: true
            }
        },
        scales: {
            // horizontal
            xAxes: [{
                gridLines: {
                    offsetGridLines: true
                }
            }],
            yAxes: [{
                ticks: {
                    beginAtZero:false, 
                    stepSize: 500
                },
                gridLines: {
                    offsetGridLines: true
                }
            }]
        }
    }
});
