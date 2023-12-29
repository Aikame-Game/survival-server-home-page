var cpytxt = $('.cpytext, .wp-block-code');
cpytxt.append('<button class="cpybtn"><i class="far fa-copy"></i></button>'); 
var btn = $('.cpybtn');
btn.on('click', function() {
  var cpytxt = $(this).parent().text();
  navigator.clipboard.writeText(cpytxt);
  $(this).parent().prepend('<span class="balloon_top">コピーしました！</span>');
  setTimeout(() => $(this).parent().find('span.balloon_top').remove(), 1000);
});  
