;(function($){
	$("#back").on("tap",function(){
		window.history.go(-1)
	})

	//点击care
	$("#care").on("tap",function(){
		if(!$(this).hasClass('bg')){
			$(this).addClass('bg');
			$('#d').show();
		}else{
			$(this).removeClass('bg');
			$('#d').hide();
		}
	})
	$("#care1").on("tap",function(){
		if(!$(this).hasClass('bg')){
			$(this).addClass('bg');
			$('#nine1').show();
		}else{
			$(this).removeClass('bg');
			$('#nine1').hide();
		}
	})
	$("#care2").on("tap",function(){
		if(!$(this).hasClass('bg')){
			$(this).addClass('bg');
			$('#nine2').show();
		}else{
			$(this).removeClass('bg');
			$('#nine2').hide();
		}
	})

	//滑到一定高度显示头部
	$('#main')[0].addEventListener('touchstart',function(e){
		sFn(e);
	},false)
	$('#main')[0].addEventListener('touchmove',function(e){
		mFn(e);
	},false)
	$('#main')[0].addEventListener('touchend',function(e){
		eFn(e);
	},false)
	var sY=0
		m=0,
		f=null,
		sT=0;
	function sFn(e){
		sY=e.touches[0].clientY;
		//console.log(sY);
		sT=$('#main')[0].scrollTop;
		console.log(sT);
		var sH=$('#main').height();
		console.log(sH);
		
	}
	function mFn(e){
		m=sY-e.touches[0].clientY;
		if(m>50){
			f="down"
		}
		console.log(f)
	}
	function eFn(e){
		if(sT>200){
			$('.header').fadeIn(1000)
		}else{
			$('.header').fadeOut(1000)
		}
		
	}
})(Zepto)