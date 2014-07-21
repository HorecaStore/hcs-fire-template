(function($) {
  $.fn.extend({
    updateCaptcha: function(captchaKey, captchaHeight) {
      return this.each(function(index, object) {
        jQuery(object).prop('src', "/captcha.php?get_captcha=" + captchaKey + "&height=" + captchaHeight + "&anc=" + Math.floor(Math.random()*100000));
      });
    },
  });
})(jQuery);
