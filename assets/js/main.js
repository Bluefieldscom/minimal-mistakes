$('.benefits__item').on('click', function() {
  $('.benefits__item').removeClass('benefits__item--active').eq($(this).index()).addClass('benefits__item--active');;
  $('.benefits__images img').addClass('hide').eq($(this).index()).removeClass('hide');
});