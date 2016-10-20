var main1=new IScroll('section');
;(function($){
	$.ajax({
		url:'../json/data.json',
		dataType:'json',
		success:function(e){
			console.log(e)
			var str='<dl>';
			$.each(e,function(key,val){
				str+='<a href="../temple.html"><dt>'+
		        		'<img src='+e[key].img+' alt="">'+
		        	'</dt>'+
		        	'<dd>'+e[key].content+'</dd>'
			})
			str+='</dl></a>'
			$(".first-content").append($(str));
			$(".second-content").append($(str));
			$("._content").append($(str));
			main1.refresh()
		},
		error:function(e){
			console.log('请求失败')
		}
	})
	$('.lianxi').on('click',function(){
    	$('.zzc').show();
		$('.dv').show();
    })
    $('.sp1').on('click',function(){
		$('.zzc').hide();
		$('.dv').hide();
	})
	$(".ye").on("tap",function(){
		location.href="../yefamen.html"
	})
	$(".yi").on("tap",function(){
		location.href="../cyiyuan.html"
	})
	$(".wang").on("tap",function(){
		location.href="../cwangqi.html"
	})
	$(".play").on("tap",function(){
		location.href="../play.html"
	})
	$(".auto").on("tap",function(){
		location.href="../auto.html"
	})
	$(".bao").on("tap",function(){
		location.href="../baoche.html"
	})
	function shu(){
		setTimeout(function(){
			main1.refresh()
		},200)
	}
})(Zepto)
