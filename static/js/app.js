// import the data from data.js
const tableData = data;
// Reference the HTML table using d3 (tell JavaScript to look for the <tbody> tags in the HTML)
var tbody = d3.select("tbody");

// If we didn't clear existing data first, then we would find ourselves reinserting data that already exists, thus creating duplicates and making a bit of a mess. So tbody.html("") tells JS to use an empty string when creating the table; in other words, create a blank canvas
function buildTable(data) {
  tbody.html("");
}
// tells JavaScript to find the <tbody> tag within the HTML and add a table row ("tr")
data.forEach((dataRow) => {
  let row = tbody.append("tr");
  // we're telling JS to reference one object from the array of UFO sighting
  Object.values(dataRow).forEach((val) => {
  });
});