(function($){
        
    $.fn.charCounter = function() {

        var $inputs = $(this);

        return $inputs.each(function(index, input) {

            var $input   = $(input);
            var $label   = $input.siblings("label").first();
            var $counter = $("<span></span>");
            var max      = parseInt($input.attr("maxlength"), 10);

            $input.parent().addClass("char-counter-wrap");

            $counter.html("<span class='char-counter-current'>" + $input.val().length + "</span>/" + max);
            $counter.addClass("char-counter");
            $counter.insertAfter($label);

            $input.on("input keyup", function(e) {
                var current = $input.val().length;
                $counter.find(".char-counter-current").text(current);
            });

            $input.on("focus", function(e) {
                $counter.addClass("char-counter-focused");
            });

            $input.on("blur", function(e) {
                $counter.removeClass("char-counter-focused");
            });

        });

    }


})(jQuery);
