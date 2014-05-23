head.js(
  {bootstrap_dropdown: "/ext/bootstrap/bootstrap-dropdown.js"},
  {bootstrap_select: "/ext/bootstrap/select/bootstrap-select.min.js"}
);
head.ready("bootstrap_select", function() {
  $('.selectpicker').selectpicker();
});
