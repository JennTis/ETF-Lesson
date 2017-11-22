function setup() {
  //row 1
  rosso = createImg("http://www.jennifertis.com/wp-content/uploads/2017/11/rosso-1.png");
  red = createImg("http://www.jennifertis.com/wp-content/uploads/2017/11/red-1.png");
  rosso.position(10, 10);
  rosso.size(200, 200);
  red.position(10, 10);
  red.size(200, 200);
  red.mousePressed(showRosso);
  rosso.mousePressed(showRed);

  azzurro = createImg("http://www.jennifertis.com/wp-content/uploads/2017/11/azzurro.png");
  blue = createImg("http://www.jennifertis.com/wp-content/uploads/2017/11/blue.png");
  azzurro.position(220, 10);
  azzurro.size(200, 200);
  blue.position(220, 10);
  blue.size(200, 200);
  blue.mousePressed(showAzzurro);
  azzurro.mousePressed(showBlue);

  grigio = createImg("http://www.jennifertis.com/wp-content/uploads/2017/11/grigio.png");
  gray = createImg("http://www.jennifertis.com/wp-content/uploads/2017/11/gray.png");
  grigio.position(430, 10);
  grigio.size(200, 200);
  gray.position(430, 10);
  gray.size(200, 200);
  gray.mousePressed(showGrigio);
  grigio.mousePressed(showGray);

  rosa = createImg("http://www.jennifertis.com/wp-content/uploads/2017/11/rosa.png");
  pink = createImg("http://www.jennifertis.com/wp-content/uploads/2017/11/pink.png");
  rosa.position(640, 10);
  rosa.size(200, 200);
  pink.position(640, 10);
  pink.size(200, 200);
  pink.mousePressed(showRosa);
  rosa.mousePressed(showPink);

  //row 2
  nero = createImg("http://www.jennifertis.com/wp-content/uploads/2017/11/nero.png");
  black = createImg("http://www.jennifertis.com/wp-content/uploads/2017/11/black.png");
  nero.position(10, 220);
  nero.size(200, 200);
  black.position(10, 220);
  black.size(200, 200);
  black.mousePressed(showNero);
  nero.mousePressed(showBlack);

  violetto = createImg("http://www.jennifertis.com/wp-content/uploads/2017/11/violetto.png");
  purple = createImg("http://www.jennifertis.com/wp-content/uploads/2017/11/purple.png");
  violetto.position(220, 220);
  violetto.size(200, 200);
  purple.position(220, 220);
  purple.size(200, 200);
  purple.mousePressed(showVioletto);
  violetto.mousePressed(showPurple);

  verde = createImg("http://www.jennifertis.com/wp-content/uploads/2017/11/verde.png");
  green = createImg("http://www.jennifertis.com/wp-content/uploads/2017/11/green.png");
  verde.position(430, 220);
  verde.size(200, 200);
  green.position(430, 220);
  green.size(200, 200);
  green.mousePressed(showVerde);
  verde.mousePressed(showGreen);

  giallo = createImg("http://www.jennifertis.com/wp-content/uploads/2017/11/giallo.png");
  yellow = createImg("http://www.jennifertis.com/wp-content/uploads/2017/11/yellow.png");
  giallo.position(640, 220);
  giallo.size(200, 200);
  yellow.position(640, 220);
  yellow.size(200, 200);
  yellow.mousePressed(showGiallo);
  giallo.mousePressed(showYellow);

  //row 3
  marrone = createImg("http://www.jennifertis.com/wp-content/uploads/2017/11/marrone.png");
  brown = createImg("http://www.jennifertis.com/wp-content/uploads/2017/11/brown.png");
  marrone.position(10, 430);
  marrone.size(200, 200);
  brown.position(10, 430);
  brown.size(200, 200);
  brown.mousePressed(showMarrone);
  marrone.mousePressed(showBrown);

  arancione = createImg("http://www.jennifertis.com/wp-content/uploads/2017/11/arancione.png");
  orange = createImg("http://www.jennifertis.com/wp-content/uploads/2017/11/orange.png");
  arancione.position(220, 430);
  arancione.size(200, 200);
  orange.position(220, 430);
  orange.size(200, 200);
  orange.mousePressed(showArancione);
  arancione.mousePressed(showOrange);

  oro = createImg("http://www.jennifertis.com/wp-content/uploads/2017/11/oro.png");
  gold = createImg("http://www.jennifertis.com/wp-content/uploads/2017/11/gold.png");
  oro.position(430, 430);
  oro.size(200, 200);
  gold.position(430, 430);
  gold.size(200, 200);
  gold.mousePressed(showOro);
  oro.mousePressed(showGold);

  bianco = createImg("http://www.jennifertis.com/wp-content/uploads/2017/11/bianco.png");
  white = createImg("http://www.jennifertis.com/wp-content/uploads/2017/11/white.png");
  bianco.position(640, 430);
  bianco.size(200, 200);
  white.position(640, 430);
  white.size(200, 200);
  white.mousePressed(showBianco);
  bianco.mousePressed(showWhite);
}

function showRosso () {
  red.hide();
}

function showRed () {
  red.show();
}

function showAzzurro () {
  blue.hide();
}

function showBlue () {
  blue.show();
}

function showGrigio () {
  gray.hide();
}

function showGray () {
  gray.show();
}

function showRosa () {
  pink.hide();
}

function showPink () {
  pink.show();
}

function showNero () {
  black.hide();
}

function showBlack () {
  black.show();
}

function showVioletto () {
  purple.hide();
}

function showPurple () {
  purple.show();
}

function showVerde () {
  green.hide();
}

function showGreen () {
  green.show();
}

function showGiallo () {
  yellow.hide();
}

function showYellow () {
  yellow.show();
}

function showMarrone() {
  brown.hide();
}

function showBrown () {
  brown.show();
}

function showArancione() {
  orange.hide();
}

function showOrange () {
  orange.show();
}

function showOro () {
  gold.hide();
}

function showGold () {
  gold.show();
}

function showBianco () {
  white.hide();
}

function showWhite () {
  white.show();
}
