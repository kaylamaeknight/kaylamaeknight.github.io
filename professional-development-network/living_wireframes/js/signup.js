$(function() {

  function goTo(id){
    $('section', '#signup').addClass('d-none');
    $(id).removeClass('d-none');
  }

  $('.js-goTo').on('click', function(){
    goTo($(this).attr('href'));
  });

});
