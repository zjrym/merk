;(function($){
	var i=0,
		dlen=$(".yindao").find("div").length;
	$(".yindao").on("swipeLeft",function(){
		i++;
		if(i>=dlen-1){
			i=dlen-1;
		}
		changge();
	}).on("swipeRight",function(){
		i--;
		if(i<=0){
			i=0;
		}
		changge();
	})
	function changge(){
		$(".yindao").css("transform","translatex("+(i*-100)+"%)")
		$(".ol").find("li").eq(i).addClass("yang").siblings().removeClass("yang");
	}
	$(document).on("tap",function(){
		location.href="html/Q3407.html"
	})
})(Zepto)