;(function($){
	var scroll=new iScroll('main');
	var mySwiper = new Swiper ('.swiper-container', {
	    loop: true,
	    autoplay:2000,
	    pagination: '.swiper-pagination',
	  })
	function city(){
		$.ajax({
			url:'data2.json',
			type:"post",
			dataType:"json",
			success:function(e){
				var str="";
				for(var i in e){
					str+="<dl><dt><a href='#'><img src="+e[i].image+"></a></dt><dd><a href='#'><h2>"+e[i].name+"<span>¥"+e[i].low_price+"起</span></h2><p>"+e[i].date+"</p></a></dd></dl>";
				}
				$(".cot").append(str);
				scroll.refresh();
			},
			error:function(){
				alert("请求失败")
			}
		})	
	}
	city();
	$('.content').on('swipeLeft',function(){
		$(this).css({
			'-webkit-transform':"translateX(-100%)",
			'-webkit-transition':"all 1s"
		})
		$('.p').css({
			'-webkit-transform':"translateX(100%)",
			'-webkit-transition':"all 1s"
		})
		$('.li').removeClass('co');
		$('.jing').addClass('co');
	})
	$('.content').on('swipeRight',function(){
		$(this).css({
			'-webkit-transform':"translateX(0)",
			'-webkit-transition':"all 1s"
		})
		$('.p').css({
			'-webkit-transform':"translateX(0)",
			'-webkit-transition':"all 1s"
		})
		$('.jing').removeClass('co');
		$('.li').addClass('co');
	})
})(Zepto)