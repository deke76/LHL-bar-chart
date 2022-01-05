function drawAxis( location, units, x, y ) {
  
  x += units;
  y += units;

  location.css( "width", x );
  location.css( "border-bottom-style", "solid" );
  location.css( "width", y );
  location.css( "border-left-style", "solid" );
}

function drawBarChart( data, options, element ) {

  drawAxis( element, '', options.width, options.height);
}