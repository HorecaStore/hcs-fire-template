head.js(
  {slick: "/ext/slick/slick.min.js"}
);
head.ready("slick", function() {
  $('.carousel_clients').slick({
    slidesToShow: 6,
    slidesToScroll: 6
  });
});
