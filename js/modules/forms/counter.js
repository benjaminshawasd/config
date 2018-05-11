(function($){

  $.fn.charCounter = function() {

    const $inputs = $(this);

    return $inputs.each(function(index, input) {

      const $input  = $(input);
      const $label  = $input.siblings("label").first();
      const $counter = $("<span></span>");
      const max    = parseInt($input.attr("maxlength"), 10);
      const html    = '' +
         `<span class='char-counter-current'>
            ${$input.val().length}
         </span>/${max}`;

      $input.parent().addClass("char-counter-wrap");
      $counter
         .html(html)
         .addClass("char-counter")
         .insertAfter($label);

      $input.on({

         'input keyup': function(e) {
            const current = $input.val().length;
            $counter.find(".char-counter-current").text(current);
         },

         'focus': function(e) {
            $counter.addClass("char-counter-focused");
         },

         'blur': function(e) {
            $counter.removeClass("char-counter-focused");
         }

      });

    });

  }

})(jQuery);
