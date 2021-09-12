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
//use D3 to handle a click button  from a user
function handleClick() {
  // By chaining .property("value"); to the d3.select 
  // function, we're telling D3 to look for where our date values are stored on the webpage and 
  // Grab that information and hold it in the "date" variable
  let date = d3.select("#datetime").property("value");
  // Default filter is the original table data because we want users to refine their search on their own terms.
  let filteredData = tableData;
  //Check to see if a date was entered and filter the
  // data using that date.
  if (date) {
  // Apply `filter` to the table data to only keep the
  // rows where the `datetime` value matches the filter value
    filteredData = filteredData.filter(row => row.datetime === date);
};
   // Rebuild the table using the filtered data
  // @NOTE: If no date was entered, then filteredData will
  // just be the original tableData.
  buildTable(filteredData);
};

// tell D3 to execute our handleClick() function when the button with an id of filter-btn is clicked
d3.selectAll("#filter-btn").on("click", handleClick);

// call our buildTable function once more—this time using the original data we've imported
buildTable(tableData);