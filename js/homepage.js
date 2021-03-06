// function _toArray(arr) {
//   return Array.isArray(arr) ? arr : Array.from(arr)
// }
//
// function makeSpans (selector) {
//   var _document$querySelect = document.querySelectorAll(selector)
//   var _document$querySelect2 = _toArray(_document$querySelect)
//   var elements = _document$querySelect2.slice(0)
//
//   return elements.map(function (element) {
//     var text = element.innerText.split('')
//     var spans = text.map(function (letter) {
//       return '<span>' + letter + '</span>'
//     }).join('')
//     return element.innerHTML = spans
//   })
// }
//
// makeSpan ('h1')
// makeSpans('.mark')

//
// // STICKY NAV
// $(window).scroll(function() {
//     if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
//         $('#return-to-top').fadeIn(200);    // Fade in the arrow
//     } else {
//         $('#return-to-top').fadeOut(200);   // Else fade out the arrow
//     }
// });
// $('#return-to-top').click(function() {      // When arrow is clicked
//     $('body,html').animate({
//         scrollTop : 0                       // Scroll to top of body
//     }, 500);
// });

function _toArray(arr) {
  return Array.isArray(arr) ? arr : Array.from(arr)
}

function makeSpans (selector) {
  var _document$querySelect = document.querySelectorAll(selector)
  var _document$querySelect2 = _toArray(_document$querySelect)
  var elements = _document$querySelect2.slice(0)

  return elements.map(function (element) {
    var text = element.innerText.split('')
    var spans = text.map(function (letter) {
      return '<span>' + letter + '</span>'
    }).join('')
    return element.innerHTML = spans
  })
}

makeSpans('h1')


$(document).ready(function(){
    $("h1").delay("100vh").fadeIn();
    // hide #back-top first
    $("#back-top").hide();
    // fade in #back-top
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 500px) {
                $('#back-top').fadeIn();
            } else {
                $('#back-top').fadeOut();
            }
        });
        // scroll body to 0px on click
        $('a#back-top').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    });
});
