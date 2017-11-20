$('[lang="jbo"]').hide();
$('[lang="epo"]').hide();
$('[lang="fr"]').hide();
$('[lang="zh-Hant"]').hide();
$('[lang="zh-Hans"]').hide();
$('[lang="ja"]').hide();

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
    case 'fr':
      $('[lang]').hide();
      $('[lang="fr"]').show();
      break;
    case 'zh-Hant':
      $('[lang]').hide();
      $('[lang="zh-Hant"]').show();
      break;
    case 'zh-Hans':
      $('[lang]').hide();
      $('[lang="zh-Hans"]').show();
      break;
    case 'ja':
      $('[lang]').hide();
      $('[lang="ja"]').show();
      break;
    default:
      $('[lang]').hide();
      $('[lang="en"]').show();
  }
});
