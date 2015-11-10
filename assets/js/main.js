// SerializeHelper
$.fn.serializeObject = function()
{
  var o = {};
  var a = this.serializeArray();
  $.each(a, function() {
    if (o[this.name] !== undefined) {
      if (!o[this.name].push) {
        o[this.name] = [o[this.name]];
      }
      o[this.name].push(this.value || '');
    } else {
      o[this.name] = this.value || '';
    }
  });
  return o;
};


$('.benefit').on('click', function() {
  $('.benefit').removeClass('benefit--active').eq($(this).index()).addClass('benefit--active');
  $('.benefit img').addClass('hide').eq($(this).index()).removeClass('hide');
});


$("#league-request").on('submit', function(event) {
  event.preventDefault();

  var form = $(this);

  $.ajax({
    type: "POST",
    url: 'api',
    data: form.serializeObject(),
    success: function() {
      var text = $('button[type="submit"]', form).text();
      $('button[type="submit"]', form).addClass('button--success').text(form.data('success'));
      $(':input', form).not(':button, :submit, :reset, :hidden').val('');

      setTimeout(function() {
        $('button[type="submit"]', form).removeClass('button--success').text(text);
      }, 2000);
    },
    error: function() {
      var text = $('button[type="submit"]', form).text();
      $('button[type="submit"]', form).addClass('button--error').text(form.data('error'));
      setTimeout(function() {
        $('button[type="submit"]', form).removeClass('button--error').text(text);
      }, 2000);
    }
  });

});