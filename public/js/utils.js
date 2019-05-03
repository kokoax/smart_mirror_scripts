function zeroPadding(NUM, LEN){
  return ( Array(LEN).join('0') + NUM ).slice( -LEN );
}

function createSVG(link) {
  var svgns = "http://www.w3.org/2000/svg";
  var xlinkns = "http://www.w3.org/1999/xlink";

  var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
  var use = document.createElementNS(svgns, "use");

  svg.setAttribute("class", "svg");

  use.setAttributeNS(xlinkns, "href", link);

  svg.append(use);

  return svg;
}
