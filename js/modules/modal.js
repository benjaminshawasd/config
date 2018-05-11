$('.fluent-modal').on({

  'shown.bs.modal': function(e){
    const noBackdrop = !document.querySelector(".modal-backdrop");
    if(noBackdrop) {
      $(this).addClass("modal-no-backdrop");
    }
  },

  'hide.bs.modal': function(e){
    const noBackdrop = !document.querySelector(".modal-backdrop");
    if(noBackdrop) {
      $(this).removeClass("modal-no-backdrop");
    }
  }

});
