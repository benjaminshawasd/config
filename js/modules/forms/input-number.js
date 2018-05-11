(function($){

  $.fn.numberInput = function() {

    const $number = $(this);

    function round(n, places) {
      n = +n;
      return +("" + n.toFixed(places)).replace(/0$/g, "");
    }

    $number.each(function(index, input) {

      const $input   = $(input);
      const $up     = $input.next().children(".mi-ChevronUp");
      const $down    = $input.next().children(".mi-ChevronDown");
      const min     = $input.attr("min");
      const max     = $input.attr("max");
      let step      = $input.attr("step") || "";
      const isDecimal = step.indexOf(".") > -1;
      let denominatorDecimalPlaces = 0;
      if(isDecimal)
         denominatorDecimalPlaces = step.substr(step.indexOf(".") + 1).length;

      step = +(step) || 1;

      $up.on("click", function(e) {

         e.preventDefault();
         let value            = "" + ($input.val() || 0);
         const isValueDecimal     = value.indexOf(".") > -1;
         let numeratorDecimalPlaces = 0;
         if(isValueDecimal)
            numeratorDecimalPlaces = value.substr(value.indexOf(".") + 1).length;

         let decimalPlaces = denominatorDecimalPlaces + numeratorDecimalPlaces;
         let increment    = +value + step;

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

         $input.val(value).trigger("keyup");

      });

      $down.on("click", function(e) {

         e.preventDefault();
         let value            = $input.val();
         const isValueDecimal     = value.indexOf(".") > -1;
         let numeratorDecimalPlaces = 0;
         if(isValueDecimal)
            numeratorDecimalPlaces = value.substr(value.indexOf(".") + 1).length;

         let decimalPlaces = denominatorDecimalPlaces + numeratorDecimalPlaces;
         let decrement    = +value - step;

         $up.prop("disabled", false);

         if(min && +min > decrement) {
            value = isDecimal ? round(min, decimalPlaces) : min;
            $down.prop("disabled", true);
         } else
            value = isDecimal ? round(decrement, decimalPlaces) : decrement;

         $input.val(value).trigger("keyup");

      });

      $input.on("keyup", function(e) {

         const value = +$input.val();;
         if(max && max < value)
            $input.val(max);
         else if(min && min > value)
            $input.val(min);

      });

    });

  }

})(jQuery);

