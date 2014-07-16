head.js(
  {bootstrap_dropdown: "/ext/bootstrap/bootstrap-dropdown.js"},
  {bootstrap_tab: "/ext/bootstrap/bootstrap-tab.js"},
  {bootstrap_select: "/ext/bootstrap/select/bootstrap-select.min.js"}
);
head.ready("bootstrap_select", function() {
  $('.selectpicker').selectpicker();
});
head.ready("bootstrap_tab", function() {
  $('#specifications-item a').click(function(e){
    e.preventDefault();
    $(this).tab('show');
  });
});
head.ready('mfp', function(){
  $('.mfp-add-order').magnificPopup({
    type: 'inline',
    preloader: false
  });
  $('.open-mfp-gallery').on('click', function () {
    $('.mfp-img-gallery').magnificPopup('open');
});
  $('.mfp-img-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
      titleSrc: function(item) {
        return item.el.attr('title');
      }
    }
  });
});
