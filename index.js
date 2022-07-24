// PAGE SCROLL //
function scrollTopAnimated() {
	$("html, body").animate(
		{scrollTop: $("#longpage").offset().top}, 1000);
}

$(window).on("load",function(){
	setTimeout(scrollTopAnimated, 1000);
});

