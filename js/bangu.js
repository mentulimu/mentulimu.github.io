$('[lang="jbo"]').hide();
$('[lang="epo"]').hide();

$('#lang-switch').change(function () {
  var lang = $(this).val();
  switch (lang) {
    case 'en': 
      $('[lang]').hide();
      $('[lang="en"]').show();
      break;
    case 'jbo':
      $('[lang]').hide();
      $('[lang="jbo"]').show();
      break;
    case 'epo':
      $('[lang]').hide();
      $('[lang="epo"]').show();
      break;
    default:
      $('[lang]').hide();
      $('[lang="en"]').show();
  }
});
