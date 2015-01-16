$(document).ready(function() {

    $('.gallery-item').hover(function() {
        $(this).find('.img-title').fadeOut(200);
    }, function() {
        $(this).find('.img-title').fadeIn(300);
    });
});

$(document).ready(function() {

    $('.gallery-item-2').hover( function() {
        $(this).find('.img-title').fadeOut(200);
    }, function() {
        $(this).find('.img-title').fadeIn(300);
    });
});

$(".gallery-item").click(function(){
  $(".img-title").hide();
});

$(".gallery-item").click(function(){
  $(".img-title").show();
});

$(".gallery-item-2").click(function(){
  $(".img-title").hide();
});

$(".gallery-item-2").click(function(){
  $(".img-title").show();
});

$(document).ready(function() {
  $(".fancybox-button").fancybox({
    prevEffect    : 'none',
    nextEffect    : 'none',
    closeBtn    : false,
    helpers   : {
      title : { type : 'inside' },
      buttons : {}
    }
  });
});
