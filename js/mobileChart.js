var ctx = document.getElementById("mobileDonutChart").getContext('2d');

var myChart = new Chart(ctx, {
    responsive: true,
    maintainAspectRatio: false,
  type: 'doughnut',
  data: {
    labels: ["Phones", "Tablets", "Desktop"],
    datasets: [{
      backgroundColor: [ 
        "#00CED1",
        "#228B22",
        "#44427a"
      ],
      data: [20, 20, 60]
    }]
  },
    
 options: {
    legend: {
            display: false, 
           
    }
   }
});


document.getElementById('js-legend').innerHTML = myChart.generateLegend();


