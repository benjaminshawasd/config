$('[data-toggle="tooltip"]').tooltip({
   container: 'body'
});
$("[data-toggle-password-visibility]").passwordInputToggle();
$("input[type='number']").numberInput();
$("[maxlength]").charCounter();

if(typeof PerfectScrollbar === 'function') {
  var scrollables = document.querySelectorAll('.perfect-scrollbar, .select2-results');
  $.each(scrollables, function(index, scrollable) {
    var ps = new PerfectScrollbar(scrollable);
  });

  $('body').on('show.bs.modal', '.modal[role="dialog"]', function(e) {

    var modalBody = this.querySelector('.modal-body');
    if(modalBody) {
      var ps = new PerfectScrollbar(modalBody);
    }
  });
}
