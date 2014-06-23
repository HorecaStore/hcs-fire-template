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
  $('#tab_profile').on('click', function(e) {
    e.preventDefault();
    $('#profile-user a[href="#profile"]').tab('show');
  });
});
head.ready("bootstrap_collapse", function() {
  $("#ordersCollapse, #messagesCollapse").on('click.collapse.data-api', '[data-toggle=collapse]', function(e){
    var $this = $(this),
        target = $this.attr('data-target'),
        toggle = $('.accordion-toggle');
    toggle.removeClass('active');
    $this[$(target).hasClass('in') ? 'removeClass' : 'addClass']('active');
  });
});
head.ready("bootstrap_tooltip", function() {
  $('.order-actions,.message-actions').tooltip({
    selector: "a[data-toggle=tooltip]"
  });
});
