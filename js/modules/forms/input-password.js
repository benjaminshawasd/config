(function($){
    
    $.fn.passwordInputToggle = function() {
        
        var $toggle = $(this);
        $toggle.on("click input", function(e) {

            e.preventDefault();

            var $this         = $(this);
            var $input        = $this.prev();
            var isPassword    = $input.attr("type") === "password";
            var isToggleClass = $this.attr("class").indexOf("PasswordKey") > -1;

            if(isToggleClass) {
                if(isPassword)
                    $this.removeClass("mi-PasswordKeyHide").addClass("mi-PasswordKeyShow");
                else
                    $this.removeClass("mi-PasswordKeyShow").addClass("mi-PasswordKeyHide");
            }

            $input.attr("type", isPassword ? "text" : "password");
            
        });    

    }


})(jQuery);
