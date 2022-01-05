let chartNumbers = [];
let chartOptions = {
  width: '100px',
  height: '100px',
};
const chartSpace = $('#chart');

$(document).ready( () => {

  $('#left').on( 'click', () => {
    $('.input-form').toggleClass("showform");
  });

  $('#right').on( 'click', () => {
    $('.options-form').toggleClass("showform");
  });

  $('#add-data').on( 'click', () => {
    if( $('#number').val() == '' ) 
      alert( "Must enter a number." );
    else {
      chartNumbers.push( $('#number').val() );
      $('#number').val("")
      $('#chart-values').text( `${chartNumbers.length} data point(s) to graph.` );
      if (chartNumbers.length > 0 ) {
        $('#graph-button').show();
      }
      // console.log(chartNumbers)
    }
  })

  $('#graph-button').on( 'click', event => {
    // console.log("update");
    event.currentTarget.innerHTML ="Update";
    drawBarChart( chartNumbers, chartOptions, chartSpace )
  })

})