(function($){

  $.fn.passwordInputToggle = function() {

    const $toggle = $(this);
    $toggle.on("click input", function(e) {

      e.preventDefault();

      const $this      = $(this);
      const $input      = $this.prev();
      const isPassword   = $input.attr("type") === "password";
      const isToggleClass = $this.attr("class").includes("PasswordKey");

      if(isToggleClass)
         $this.toggleClass("mi-PasswordKeyHide mi-PasswordKeyShow");

      $input.attr("type", isPassword ? "text" : "password");

    });

  }

})(jQuery);
