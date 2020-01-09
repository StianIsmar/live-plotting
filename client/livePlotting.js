var intervalID = setInterval(update_values, 1000);
var c = 0;
var temp;
var randomInt = 0;
var stopped = "false";

document.getElementById("stop").addEventListener("click", function() {
  stopped = "true";
});

function update_values() {
  // Check if user wants to stop animations
  if (stopped === "true") {
  } else {
    var bggAPI = "http://127.0.0.1:5000/_stuff";

    fetch("http://127.0.0.1:5000/_stuff")
      .then(resp => resp.json()) // Transform the data into json
      // Call the fetch function passing the url of the API as a parameter
      .then(function(data) {
        console.log("sumin");
        randomInt = data.result / 10;
        console.log(randomInt);
        // Your code for handling the data you get from the API
      })
      .catch(function() {
        console.log("suminerror");

        // This is where you run code if the server returns any errors
      });

    c = c + 1;

    //console.log('c',c);
    //console.log('temp',temp);
    myChart.data.labels.push(c);

    console.log("HERE" + " " + randomInt);
    myChart.data.datasets.forEach(dataset => {
      dataset.data.push(randomInt);
    });
    myChart.update();
  }
}
var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: [c],
    datasets: [
      {
        label: "Area under random numbers from Flask endpoint",
        data: [temp],
        backgroundColor: "#66FCF1",
        borderColor: "#66FCF1",
        borderWidth: 1
      }
    ]
  },
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  }
});
