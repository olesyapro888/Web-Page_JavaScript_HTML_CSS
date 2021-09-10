// import the data from data.js
const tableData = data;
// Reference the HTML table using d3 (tell JavaScript to look for the <tbody> tags in the HTML)
var tbody = d3.select("tbody");

// If we didn't clear existing data first, then we would find ourselves reinserting data that already exists, thus creating duplicates and making a bit of a mess. So tbody.html("") tells JS to use an empty string when creating the table; in other words, create a blank canvas
function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

// tells JavaScript to find the <tbody> tag within the HTML and add a table row ("tr")
// Next, loop through each object in the data
// and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");
  
    // we're telling JS to reference one object from the array of UFO sighting. The "val" argument represents each item in the object, such as the location, shape, or duration or
    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      // append data into a table data tag (<td>)
      let cell = row.append("td");
      cell.text(val);
      }
    );  
  });
}