head.js(
  {bootstrap_tooltip: "/ext/bootstrap/bootstrap-tooltip.js"}
);
head.ready("bootstrap_tooltip", function() {
  $('.form-claim').tooltip({
    selector: "a[data-toggle=tooltip]"
  });
});
