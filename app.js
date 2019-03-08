
var tbody = d3.select("tbody");



data.forEach((ufoSightings) => {
    var row = tbody.append("tr");
    Object.entries(ufoSightings).forEach(([key, value]) => {
      var cell = tbody.append("td");
      cell.text(value);
    });
  });

// Assign the data from `data.js` to a descriptive variable
var iSeeufos = data;

// Select the submit button
var submit = d3.select("#filter-btn");

submit.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();  

  tbody.selectAll("td").remove();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);

  var filteredData = iSeeufos.filter(sighting => sighting.datetime === inputValue);

  console.log(filteredData);


  filteredData.forEach((sighting) => {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
      var cell = tbody.append("td");
      cell.text(value);
  

     });
  });
});

