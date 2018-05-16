$("#learnmore a").click(function(){
  var dfg = $(this).attr("href");
  $("html, body").animate({scrollTop: $(dfg).offset().top}, 500);
  return false;
});
