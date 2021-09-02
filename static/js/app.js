// import the data from data.js
const tableData = data;
// Reference the HTML table using d3 (tell JavaScript to look for the <tbody> tags in the HTML)
var tbody = d3.select("tbody");

function buildTable(data) {
  tbody.html("");
}
