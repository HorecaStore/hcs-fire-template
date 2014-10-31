head.js(
  {bootstrap_tab: "/ext/bootstrap/bootstrap-tab.js"},
  {bootstrap_transition: "/ext/bootstrap/bootstrap-transition.js"},
  {bootstrap_collapse: "/ext/bootstrap/bootstrap-collapse.js"},
  {bootstrap_tooltip: "/ext/bootstrap/bootstrap-tooltip.js"}
);
head.ready("bootstrap_tab", function() {
  $('#profile-user a').click(function(e){
    e.preventDefault();
    $(this).tab('show');
  });
  $('a[data-tab]').on('click', function(e) {
    e.preventDefault();
    href = $(this).attr("data-tab");
    $('#profile-user a[href="#'+href+'"]').tab('show');
    //console.log($(this).attr("data-tab"));
  });
  var hash = window.location.hash;
  if (hash !== ''){
    $('#profile-user a[href="'+hash+'"]').tab('show');
    console.log('#profile-user a[href="'+hash+'"]');
  }
});
head.ready("bootstrap_collapse", function() {
  $("#ordersCollapse, #messagesCollapse, #profileCollapse").on('click.collapse.data-api', '[data-toggle=collapse]', function(e){
    var $this = $(this),
        target = $this.attr('data-target'),
        toggle = $('.accordion-toggle');
    // console.log(target);
    // console.log($(target).hasClass('in'));
    toggle.removeClass('active');
    $this[$(target).hasClass('in') ? 'removeClass' : 'addClass']('active');
  });
});
head.ready("bootstrap_tooltip", function() {
  $('.order-actions,.message-actions,.profile-actions').tooltip({
    selector: "[data-toggle=tooltip]"
  });
});
head.ready("jquery", function() {
  $('.profile-actions .btn').on('click', function(e){
    var $this = $(this),
        input_edit = $(this).data('edit'),
        input_type = $this.data('type') ? $this.data('type') : 'text';

    console.log($(this));
    $this.parents('.profile-actions').hide();

    $('input[name='+input_edit+']').attr('type', input_type).focus();
    console.log($(this).data('edit'));
  });
});
function validatePassword(){
  var pass2 = document.getElementById("new_password2").value,
      pass1 = document.getElementById("new_password").value,
      message =(pass1 != pass2)? "Пароль не совпадает" : '';
  document.getElementById("new_password2").setCustomValidity(message);
}
