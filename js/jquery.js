// var nav    = $('#nav'),
//     offset = nav.offset();
//
// $(window).scroll(function () {
//   if($(window).scrollTop() > offset.top - 20) {
//     nav.addClass('fixed');
//   } else {
//     nav.removeClass('fixed');
//   }
// });


var nav    = $('#ads'),
    offset = nav.get(0).offsetTop;
    // offset = nav.offset();

$(window).scroll(function () {
  if($(window).scrollTop() > offset - 20) { //offset.top
    nav.addClass('fixed');
  } else {
    nav.removeClass('fixed');
  }
});
