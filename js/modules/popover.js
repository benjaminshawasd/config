(function($) {

	// INIT
	$(function () {
		$('[data-toggle="popover"]').popover({
      container: 'body'
    });
	});

	// DISMISS BUTTON
	$('body').on("click", "[data-dismiss='popover']", function(ev) {
		$(this).closest(".popover").popover("hide");
	})

})(jQuery);
