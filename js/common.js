$(document).ready(function() {

	$(".cspc-column p a img, .entry-content a img").parent().addClass("fancybox").attr("data-fancybox-group", "group");
	$(".cspc-column p a img").each(function() {
		$(this).attr("src", $(this).parent().attr("href"));
	});

		$(".mc_item_wrap ul").each(function(){
    $(this).after("<div class='mc_item_wrap_af'></div>");
		});
   $(".mc_toggle").click(function(){
		 if ($(this).parent().parent().children("ul").is(":visible")) {
		 	 $(this).parent().parent().children("ul").slideUp();
			 $(this).parent().parent().children(".mc_item_wrap_af").hide();
		 } else {
			 $("body .mc_wrap .mc_item_wrap > ul, .mc_item_wrap_af").hide();
			 $(".mc_item_wrap").removeClass("active");
	 	 	$(this).parent().parent().addClass("active");
	 		$(this).parent().parent().children("ul").slideDown();
	 		$(this).parent().parent().children(".mc_item_wrap_af").show();
}
 });



	$(".auth_buttons").click(function(){
		$(this).next().slideToggle();

	});
	$(".main_menu_button").click(function(){
		$(".menu ul").slideToggle();

	});

});
