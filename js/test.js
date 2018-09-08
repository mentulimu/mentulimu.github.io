if (typeof localStorage.lang !== "undefined") {
    $('[lang]').hide();
    $('[lang=' + localStorage.lang + ']').show();
} else {
    $('[lang]').hide();
    $('[lang="en"]').show();
    localStorage.lang = "en";
}

$("#lang-switch").val(localStorage.lang);

var $frameen = $('iframe#en');
var $framejbo = $('iframe#jbo');
var $frameepo = $('iframe#epo');
var $framefr = $('iframe#fr');
var $framezht = $('iframe#zh-Hant');
var $framezhs = $('iframe#zh-Hans');
var $frameja = $('iframe#ja');

// saves the current iframe source
var vidsrcen = $frameen.attr('src');
var vidsrcjbo = $framejbo.attr('src');
var vidsrcepo = $frameepo.attr('src');
var vidsrcfr = $framefr.attr('src');
var vidsrczht = $framezht.attr('src');
var vidsrczhs = $framezhs.attr('src');
var vidsrcja = $frameja.attr('src');

$('#lang-switch').change(function () {
    var lang = $(this).val();
    switch (lang) {
      case 'en': 
// sets the source to nothing, stopping the video
        $framejbo.attr('src','');
        $frameepo.attr('src','');
        $framefr.attr('src','');
        $framezht.attr('src','');
        $framezhs.attr('src','');
        $frameja.attr('src','');
// sets it back to the correct link so that it reloads immediately on the next window open
        $framejbo.attr('src', vidsrcjbo);
        $frameepo.attr('src', vidsrcepo);
        $framefr.attr('src', vidsrcfr);
        $framezht.attr('src', vidsrczht);
        $framezhs.attr('src', vidsrczhs);
        $frameja.attr('src', vidsrcja);
        $('[lang]').hide();
        $('[lang="en"]').show();
        localStorage.lang = "en";
        break;
      case 'jbo':
// sets the source to nothing, stopping the video
        $frameen.attr('src','');
        $frameepo.attr('src','');
        $framefr.attr('src','');
        $framezht.attr('src','');
        $framezhs.attr('src','');
        $frameja.attr('src','');
// sets it back to the correct link so that it reloads immediately on the next window open
        $frameen.attr('src', vidsrcen);
        $frameepo.attr('src', vidsrcepo);
        $framefr.attr('src', vidsrcfr);
        $framezht.attr('src', vidsrczht);
        $framezhs.attr('src', vidsrczhs);
        $frameja.attr('src', vidsrcja);
        $('[lang]').hide();
        $('[lang="jbo"]').show();
        localStorage.lang = "jbo";
        break;
      case 'epo':
// sets the source to nothing, stopping the video
        $frameen.attr('src','');
        $framejbo.attr('src','');
        $framefr.attr('src','');
        $framezht.attr('src','');
        $framezhs.attr('src','');
        $frameja.attr('src','');
// sets it back to the correct link so that it reloads immediately on the next window open
        $frameen.attr('src', vidsrcen);
        $framejbo.attr('src', vidsrcjbo);
        $framefr.attr('src', vidsrcfr);
        $framezht.attr('src', vidsrczht);
        $framezhs.attr('src', vidsrczhs);
        $frameja.attr('src', vidsrcja);
        $('[lang]').hide();
        $('[lang="epo"]').show();
        localStorage.lang = "epo";
        break;
      case 'fr':
// sets the source to nothing, stopping the video
        $frameen.attr('src','');
        $framejbo.attr('src','');
        $frameepo.attr('src','');
        $framezht.attr('src','');
        $framezhs.attr('src','');
        $frameja.attr('src','');
// sets it back to the correct link so that it reloads immediately on the next window open
        $frameen.attr('src', vidsrcen);
        $framejbo.attr('src', vidsrcjbo);
        $frameepo.attr('src', vidsrcepo);
        $framezht.attr('src', vidsrczht);
        $framezhs.attr('src', vidsrczhs);
        $frameja.attr('src', vidsrcja);
        $('[lang]').hide();
        $('[lang="fr"]').show();
        localStorage.lang = "fr";
        break;
      case 'zh-Hant':
// sets the source to nothing, stopping the video
        $frameen.attr('src','');
        $framejbo.attr('src','');
        $frameepo.attr('src','');
        $framefr.attr('src','');
        $framezhs.attr('src','');
        $frameja.attr('src','');
// sets it back to the correct link so that it reloads immediately on the next window open
        $frameen.attr('src', vidsrcen);
        $framejbo.attr('src', vidsrcjbo);
        $frameepo.attr('src', vidsrcepo);
        $framefr.attr('src', vidsrcfr);
        $framezhs.attr('src', vidsrczhs);
        $frameja.attr('src', vidsrcja);
        $('[lang]').hide();
        $('[lang="zh-Hant"]').show();
        localStorage.lang = "zh-Hant";
        break;
      case 'zh-Hans':
// sets the source to nothing, stopping the video
        $frameen.attr('src','');
        $framejbo.attr('src','');
        $frameepo.attr('src','');
        $framefr.attr('src','');
        $framezht.attr('src','');
        $frameja.attr('src','');
// sets it back to the correct link so that it reloads immediately on the next window open
        $frameen.attr('src', vidsrcen);
        $framejbo.attr('src', vidsrcjbo);
        $frameepo.attr('src', vidsrcepo);
        $framefr.attr('src', vidsrcfr);
        $framezht.attr('src', vidsrczht);
        $frameja.attr('src', vidsrcja);
        $('[lang]').hide();
        $('[lang="zh-Hans"]').show();
        localStorage.lang = "zh-Hans";
        break;
      case 'ja':
// sets the source to nothing, stopping the video
        $frameen.attr('src','');
        $framejbo.attr('src','');
        $frameepo.attr('src','');
        $framefr.attr('src','');
        $framezht.attr('src','');
        $framezhs.attr('src','');
// sets it back to the correct link so that it reloads immediately on the next window open
        $frameen.attr('src', vidsrcen);
        $framejbo.attr('src', vidsrcjbo);
        $frameepo.attr('src', vidsrcepo);
        $framefr.attr('src', vidsrcfr);
        $framezht.attr('src', vidsrczht);
        $framezhs.attr('src', vidsrczhs);
        $('[lang]').hide();
        $('[lang="ja"]').show();
        localStorage.lang = "ja";
        break;
      default:
        $('[lang]').hide();
        $('[lang=' + localStorage.lang + ']').show();
    }
});

