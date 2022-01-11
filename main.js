let chartNumbers = [];
const chartSpace = $('#chart-space');

$(document).ready( () => {

  $('#left').on( 'click', () => {
    $('.input-form').toggleClass( "showform" );
    $('#third-row-dl').toggleClass( "showform" );
  });

  $('#right').on( 'click', () => {
    $('.options-form').toggleClass( "showform");
  });

  $('#add-data').on( 'click', () => {
    if( $('#number').val() == '' ) 
      alert( "Must enter a number." );
    else {
      chartNumbers.push( $('#number').val() );
      $('#number').val("")
      $('#chart-values').text( `${chartNumbers.length} data point(s) to graph.` );
      if (chartNumbers.length > 0 ) {
        if( $('#graph-button').css( "display" ) === 'none' ) {
          $('#graph-button').toggleClass("showform");
        };
      }
      // console.log(chartNumbers)
    }
  })

  $('#graph-button').on('click', () => {
    $('.input-form').toggleClass( "showform" );
    $('#third-row-dl').toggleClass( "showform" );
    $('#graph-button').toggleClass( "showform" );
    $('#chart-space').css( "display", "flex" );

    chartOptions.dimUnits = $('#units').val();
    chartOptions.chartWidth = unitConversion( $('#width').val(), chartOptions.dimUnits );
    chartOptions.chartHeight = unitConversion( $('#height').val(), chartOptions.dimUnits);
    chartOptions.chartScale = unitConversion( $('#y-scale').val(), chartOptions.dimUnits);
    chartOptions.barColor = $('#bar-colors').val();
    chartOptions.labelColor = $('#labels-colors').val();
    chartOptions.titleColor = $('#title-colors').val();
    chartOptions.titleSize = $('#chart-title-size').val();
    chartOptions.titleFont = $('#chart-title-font').val();
    chartOptions.axisFont = $('#axis-title-font').val();
    chartOptions.barSpacing = $('#bar-spacing').val();
    chartOptions.titleName = $('#chart-title').val();
    chartOptions.xAxisName = $('#x-axis-labels').val();
    chartOptions.yAxisName = $('#y-axis-labels').val();
    console.log( chartOptions );

    drawBarChart( chartNumbers, chartOptions, chartSpace )
  })

})

console.log()