// var elem = document.querySelector('.packerygrid');
// var pckry = new Packery( elem, {
//   // options
//   itemSelector: '.packerygrid-item',
//   gutter: 10
// });

// // element argument can be a selector string
// //   for an individual element
// var pckry = new Packery( '.packerygrid', {
//   // options
// });

// initialize Packery
var $grid = $('.packerygrid').packery({
  itemSelector: '.packerygrid-item',
  // columnWidth helps with drop positioning
  columnWidth: 100
});

// make all grid-items draggable
$grid.find('.packerygrid-item').each( function( i, gridItem ) {
  var draggie = new Draggabilly( gridItem );
  // bind drag events to Packery
  $grid.packery( 'bindDraggabillyEvents', draggie );
});



// Packery with no grid

// initialize Packery
var $grid = $('.packerygridnogutter').packery({
  itemSelector: '.packerygridnogutter-item',
  // columnWidth helps with drop positioning
  // columnWidth: 100,
  gutter: 0,
});

// make all grid-items draggable
$grid.find('.packerygridnogutter-item').each( function( i, gridItem ) {
  var draggie = new Draggabilly( gridItem );
  // bind drag events to Packery
  $grid.packery( 'bindDraggabillyEvents', draggie );
});