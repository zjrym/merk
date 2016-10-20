;(function($){
	$(".bao").find("p").on("tap",function(){
		var txt=$(this).text()
		var ls=window.sessionStorage;
		ls.setItem("city",txt)
		location.href="hotel.html"
	})
})(Zepto)