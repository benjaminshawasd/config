(function($){
    $.fn.numberInput = function() {
        
        var $number = $(this);
        function round(n, places) {
            n = +n;
            return +("" + n.toFixed(places)).replace(/0$/g, "");
        }

        $number.each(function(index, input) {

            var $input    = $(input);
            var $up       = $input.next().children(".mi-ChevronUp");
            var $down     = $input.next().children(".mi-ChevronDown");
            var min       = $input.attr("min");
            var max       = $input.attr("max");
            var step      = $input.attr("step") || "";
            var isDecimal = step.indexOf(".") > -1;
            var denominatorDecimalPlaces = 0;
            if(isDecimal)
                denominatorDecimalPlaces = step.substr(step.indexOf(".") + 1).length;
            
            step = +(step) || 1;

            $up.on("click", function(e) {

                e.preventDefault();
                var value                  = "" + ($input.val() || 0);
                var isValueDecimal         = value.indexOf(".") > -1;
                var numeratorDecimalPlaces = 0;
                if(isValueDecimal)
                    numeratorDecimalPlaces = value.substr(value.indexOf(".") + 1).length;

                var decimalPlaces = denominatorDecimalPlaces + numeratorDecimalPlaces;
                var increment     = +value + step;
                
                $down.prop("disabled", false);

                if(min && !value)
                    value = min;
                if(min && +min > increment)
                    value = isDecimal ? round(min, decimalPlaces) : min;
                else if(max && +max > increment) {
                    value = isDecimal ? round(increment, decimalPlaces) : increment;
                    if(+max < +value + step)
                        $up.prop("disabled", true);
                } else 
                    value = +value + step;

                $input.val(value);

            });

            $down.on("click", function(e) {
                e.preventDefault();
                var value                  = $input.val();
                var isValueDecimal         = value.indexOf(".") > -1;
                var numeratorDecimalPlaces = 0;
                if(isValueDecimal)
                    numeratorDecimalPlaces = value.substr(value.indexOf(".") + 1).length;
               
                var decimalPlaces = denominatorDecimalPlaces + numeratorDecimalPlaces;
                var decrement     = +value - step;

                $up.prop("disabled", false);

                if(min && +min > decrement) {
                    value = isDecimal ? round(min, decimalPlaces) : min;
                    $down.prop("disabled", true);
                } else 
                    value = isDecimal ? round(decrement, decimalPlaces) : decrement;

                $input.val(value);

            });

            $input.on("keyup", function(e) {

                var value = +$input.val();;
                if(max && max < value)
                    $input.val(max);
                else if(min && min > value)
                    $input.val(min);

            });

        });

    }


})(jQuery);
    