;(function($){
	$(".na").find("li").on("tap",function(){
		var idx=$(this).index();
		$(this).addClass("bor").siblings().removeClass("bor");
		$("section").eq(idx).animate({"left":0}).siblings().animate({"left":"120%"})
	})
})(Zepto)