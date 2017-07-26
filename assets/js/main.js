(function($) {
  function cleanData(serial) {
    var result = {};

    $.each(serial, function(_, obj) {
      if (obj.value) {
        result[obj.name] = obj.value;
      }
    });

    return result;
  }

  $('.form').validate();
  $('.form').on('submit', function(e) {
    e.preventDefault();

    var $form = $(this);

    if ($form.valid()) {
      var data = cleanData($form.serializeArray());

      var success = function() {
        $form.addClass('success');
        $form[0].reset();
      };

      if (data.id === 'subscribe') {
        $.post('https://themewizz.us3.list-manage.com/subscribe/post-json?u=c925dd68f67b59aef228dd601&amp;id=bd5afd4db0', data, null, 'jsonp')
         .always(success);
      } else {
        $.post('https://files.oneclicklab.com/mail.php', data, success);
      }
    }
  });
}(jQuery));
