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
