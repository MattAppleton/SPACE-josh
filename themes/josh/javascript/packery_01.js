var elem = document.querySelector('.packerygrid');
var pckry = new Packery( elem, {
  // options
  itemSelector: '.packerygrid-item',
  gutter: 10
});

// element argument can be a selector string
//   for an individual element
var pckry = new Packery( '.packerygrid', {
  // options
});