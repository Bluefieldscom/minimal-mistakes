$('.benefit').on('click', function() {
  $('.benefit').removeClass('benefit--active').eq($(this).index()).addClass('benefit--active');;
  $('.benefit img').addClass('hide').eq($(this).index()).removeClass('hide');
});