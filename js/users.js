head.js(
  {bootstrap_tab: "/ext/bootstrap/bootstrap-tab.js"},
  {bootstrap_collapse: "/ext/bootstrap/bootstrap-collapse.js"}
);
head.ready("bootstrap_tab", function() {
  $('#profile-user a').click(function(e){
    e.preventDefault();
    $(this).tab('show');
  });
});
/*head.ready("bootstrap_collapse", function() {
  $(".collapse").collapse();
});
*/
