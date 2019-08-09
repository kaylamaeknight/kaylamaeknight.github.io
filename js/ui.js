$(function() {

  /**
  Smooth scrollTop
  */
  $(document).on('click', 'a[href^="#"]', function (event) {
      event.preventDefault();

      $('html, body').animate({
          scrollTop: $($.attr(this, 'href')).offset().top - 70
      }, 500);
  });

  if(window.location.hash) {
    $('html, body').animate({
        scrollTop: $(window.location.hash).offset().top - 70
    }, 0);
  }

  /**
  Animate gif on hover
  */
  $('.portfolio-teaser').each(function() {
    let imgSrc = $(this).find('img').attr('src');

    if(imgSrc){
      let imgSrcBeginning = imgSrc.substr(0, imgSrc.lastIndexOf('_') + 1);

      $(this).find('img').hover(function() {
        $(this).attr('src', imgSrcBeginning + 'animated.gif');
      },function() {
        $(this).attr('src', imgSrcBeginning + 'static.png');
      });
    }
  });



});
