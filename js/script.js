head.ready('mfp', function(){
  $('.mfp-user').magnificPopup({
    type: 'inline',
    preloader: false
  });
  $('.mfp-message').magnificPopup({
    type: 'inline',
    preloader: false,
    removalDelay: 500,
    callbacks: {
      beforeOpen: function() {
       this.st.mainClass = this.st.el.attr('data-effect');
    },
    midClick: true
  },
  });
  $('.mfp-ajax-load').magnificPopup({
    type: 'inline',
    preloader: false,
    callbacks: {
      open: function() {
        setTimeout(function(){$.magnificPopup.close();}, 1000);
      }
    }
  });
});
