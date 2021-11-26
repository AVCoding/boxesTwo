

$(document).ready(function(){
    // Mobile nav touch
    // $('.left-sb-wrapper').on("swipeleft", closeNav);



  $('.box').on('click', function(){
    $('.box-goods-wrapper').addClass('show');
    $('.box-goods-container').addClass('pos');
  });

  $('.box-goods-container .close').on('click', function(){
    $('.box-goods-wrapper').removeClass('show');
    $('.box-goods-container').removeClass('pos');
  });
   
  // ======================

  $('.main-box').on('click', function(){
    $('.boxes-wrapper').addClass('show');
    $('.boxes-container').addClass('pos');
  });

  $('.boxes-container .close').on('click', function(){
    $('.boxes-wrapper').removeClass('show');
    $('.boxes-container').removeClass('pos');
  });





});


