const chartOptions = {
  chartWidth: 8,
  chartHeight: 5,
  chartScale: 1,
  dimUnits: 'in',
  barColor: 'black',
  labelColor: 'black',
  titleColor: 'black', 
  titleSize: 20,
  titleFont: 'arial',
  axisFont: 'arial',
  barSpacing: 0,
  titleName: 'Name',
  xAxisName: 'X Axis',
  yAxisName: 'Y Axis',
}

function unitConversion( value, unitType ) {
  return value * ( ( unitType === 'inches' ) ? 96 :    
  ( unitType === 'millimeters' ) ? 3.78 : 37.8 )
}

function setupChartArea ( pageElement ) {
  /* Set the area to a grid display using CSS grid:
  Title   Title   
  Y-Label Chart   
  blank   X-Label*/
  
  pageElement.css( "display", "grid" );
  pageElement.css( "grid-template-columns", "10% 90%" );
  pageElement.css( "grid-template-rows", "20% 70% 10%");
  pageElement.css( "grid-template-areas", '"title title" "y-label chart" ". x-label"');
  pageElement.css( "width", "95%" );
  pageElement.css( "height", "95%" );
  pageElement.css( "padding", "10px" );
  // pageElement.css( "background-color", "yellow" );
  pageElement.append('<div id="title"></div>');
  $('#title').css( 'grid-area', 'title' );
  $('#title').css( 'place-self', 'center' );
  $('#title').css( 'padding: 10px' );
  pageElement.append('<div id="y-label"></div>');
  $('#y-label').css( 'grid-area', 'y-label' );
  $('#y-label').css( 'place-self', 'center' );
  pageElement.append('<div id="chart"></div>');
  $('#chart').css( 'grid-area', 'chart' );
  $('#chart').css( 'place-self', 'end center' );
  pageElement.append('<div id="x-label"></div>');
  $('#x-label').css('grid-area', 'x-label' );
  $('#x-label').css('place-self', 'center' );
}

function chartLabels ( chartName, ytitle, xtitle ) {
  /* Write the chart labels into the charting area */
  $('#title').text( chartName );
  $('#y-label').css( 'writing-mode', 'vertical-lr' );
  $('#y-label').css( 'text-orientation', 'upright' );
  $('#y-label').text( ytitle );
  $('#x-label').text( xtitle );
}

function drawAxis( location, units, x, y ) {
  
  x += 'px';
  y += 'px';

  console.log( "x = " + x, "y = ", y );
  location.css( "width", x );
  location.css( "border-bottom-style", "solid" );
  location.css( "height", y );
  location.css( "border-left-style", "solid" );
}

function drawBarChart ( data, chartOptions, element ) {
  //Setup the chart area to grid display for labels, apply labels, X/Y Axis
  setupChartArea( element );
  chartLabels( chartOptions.titleName, chartOptions.yAxisName, chartOptions.xAxisName );
  drawAxis( $( '#chart' ), chartOptions.dimUnits, chartOptions.chartWidth, chartOptions.chartHeight);
}

drawBarChart( data, chartOptions, element);