var ctx = document.getElementById("trafficLineChart").getContext('2d');
var myChart = new Chart(ctx, {
    responsive: true,
    type: 'line',
    data: {
        labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31" ],
        datasets: [{
            label: 'Traffic',
            data: [50, 500, 900, 750, 1250, 1750, 2300, 1800, 2000, 1500, 2400, 2000, 2200],
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
                },
                ticks: {
                    paddingRight: 45
                }
            }],
            // vertical
            yAxes: [{
                ticks: {
                    beginAtZero:true, 
                    stepSize: 500
                },
                gridLines: {
                    offsetGridLines: true
                }
            }]
        }
    }
});
