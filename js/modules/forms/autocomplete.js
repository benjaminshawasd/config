(function($){

    $.fn.autocomplete = function(options) {
        var defaults = {
            data: []
        }

        options   = $.extend(defaults, options);
        var $this = $(this);
        
        if(!options.data.length)
            return $this;

        return $this.each(function(index, input) {

            var $autocomplete = $(input);
            var $list         = $("<ul></ul>");
            $list.addClass("autocomplete-wrap").addClass("perfect-scrollbar");


            var $button       = $autocomplete.siblings(".mi").first();

            $autocomplete.parent().addClass("autocomplete");
            $autocomplete.addClass("autocomplete-input");
            $list.insertAfter($button);

            $autocomplete.on("keyup", function(e) {

                var value       = $autocomplete.val();
                
                var isArrowUp   = e.which === 38;
                var isArrowDown = e.which === 40;
                var isEnter     = e.which === 13;
                var isTab       = e.which === 9;
                var $items      = $list.children("li").children("input");

                if(!isTab) {

                    if(isArrowUp || isArrowDown)
                        e.preventDefault();

                    if(isArrowUp && $items.length) // focus last suggested
                        $items.last().focus();
                    else if(isArrowDown && $items.length) // focus first suggested
                        $items.first().focus();
                    else if(isEnter && $items.length) { // select first suggested
                        $items.first().click();
                        $list.empty();
                    } else if(value) {
                        
                        $list.empty();

                        for(var item in options.data){

                            var exists = options.data[item].toLowerCase().indexOf(value.toLowerCase()) == 0;

                            if(exists){

                                var $option = $("<input type='text' />");
                                $option.prop("tabindex", -1);
                                $option.prop("readonly", true);
                                $option.val(options.data[item]);
                                $option.attr("value", options.data[item]);
                                $option.addClass("autocomplete-item");

                                var $li = $("<li></li>");
                                $li.append($option);
                                $list.append($li);

                            }

                        }

                    } else
                        $list.empty();    

                }
                

            });

            $("body").on("click", function(e) {

                if($(e.target).parentsUntil($autocomplete.parent()).length) {
                    $list.empty();
                }

            });

            $list.on("focus", "input", function(e){
                $autocomplete.val($(this).val());
            });

            $list.on("click", "input", function(e){
                $autocomplete.val($(this).val());
                $list.empty();
            });

            $list.on("keydown", "input", function(e) {

                var $this         = $(this);
                var $inputs       = $this.parent().siblings().find("input");
                var isArrowUp     = e.which === 38;
                var isArrowDown   = e.which === 40;
                var isEnter       = e.which === 13;

                if(isArrowUp) {
                    
                    e.preventDefault();                    
                    var $prevInput = $this.parent().prev().find("input").first();
                    if($prevInput.length) 
                        $prevInput.focus();
                    else
                        $autocomplete.focus();

                } else if(isArrowDown) {
                    
                    e.preventDefault();
                    var $nextInput = $this.parent().next().find("input").first();
                    if($nextInput.length) 
                        $nextInput.focus();
                    else
                        $autocomplete.focus();

                } else if(isEnter) {
                    $autocomplete.val($this.val()).focus();
                    $list.empty();
                }


            });


            $autocomplete.siblings(".mi-Clear").on("click", function(e) {
                var $this = $(this);
                $autocomplete.val("").focus();
            });

            $autocomplete.siblings(".mi-Clear").on("blur", function(e){
                $list.empty();
            });

        });

    }


})(jQuery);

