$('[lang="jbo"]').hide();
$('[lang="epo"]').hide();
$('[lang="fr"]').hide();
$('[lang="zh-Hant"]').hide();
$('[lang="zh-Hans"]').hide();
$('[lang="ja"]').hide();

if (localStorage.lang !== "undefined") {
    $('[lang]').hide();
    $('[lang=' + localStorage.lang + ']').show();
} else {
    localStorage.lang = "en";
}

$("#lang-switch").val(localStorage.lang);

$('#lang-switch').change(function () {
    var lang = $(this).val();
    switch (lang) {
      case 'en': 
        $('[lang]').hide();
        $('[lang="en"]').show();
        localStorage.lang = "en";
        break;
      case 'jbo':
        $('[lang]').hide();
        $('[lang="jbo"]').show();
        localStorage.lang = "jbo";
        break;
      case 'epo':
        $('[lang]').hide();
        $('[lang="epo"]').show();
        localStorage.lang = "epo";
        break;
      case 'fr':
        $('[lang]').hide();
        $('[lang="fr"]').show();
        localStorage.lang = "fr";
        break;
      case 'zh-Hant':
        $('[lang]').hide();
        $('[lang="zh-Hant"]').show();
        localStorage.lang = "zh-Hant";
        break;
      case 'zh-Hans':
        $('[lang]').hide();
        $('[lang="zh-Hans"]').show();
        localStorage.lang = "zh-Hans";
        break;
      case 'ja':
        $('[lang]').hide();
        $('[lang="ja"]').show();
        localStorage.lang = "ja";
        break;
      default:
        $('[lang]').hide();
        $('[lang=' + localStorage.lang + ']').show();
    }
});

