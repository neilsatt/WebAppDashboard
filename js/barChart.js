new Chart(document.getElementById("trafficBarChart"), {
     responsive: true,
    type: 'bar',
    data: {
      labels: ["S", "M", "T", "W", "T", "F", "S"],
      datasets: [
        {
          backgroundColor: ["#44427a", "#44427a", "#44427a","#44427a","#44427a","#44427a", "#44427a"],
          data: [50,75,150,100,200, 175, 75],
          drawRoundedRectangle: true
        }
      ]
    },
    
  options: {
    legend: {
            display: false
    },
    scales: {
        yAxes: [{
            display: true,
            ticks: {
                suggestedMin: 0,    
                stepSize: 50,
                beginAtZero: true,   
                max: 250
            }
        }]
    }
  }
});