;(function($){
	var Progress=function(opt){
		//console.log(opt);
		//定义默认参数
		var def={
			value:0.5
		}
		//定义扩展参数
		this.settings=$.extend({},def,opt);
		//进度条的功能语句
		//创建HTML结构
		var html=$('<div class="pro_wrap">'//白条
					+'<div class="pro"></div>'
					+'<span class="tri"></span>'//三角条
				  +'</div>');
				  
		html.appendTo(this.settings.wrap);
		//设置进度条的宽，指针位置
		var totalWidth=html.width();
		var w=totalWidth*this.settings.value;
		//console.log(totalWidth)'width',w+"px"
		html.find('.pro').animate({'width':w+"px"},1000);
		html.find('.tri').animate({'left':w-5+'px'},1000);
		var scal=$('<p class="scale">'+this.settings.text+'<span>'+this.settings.value*100+'%</span></p>');
		$('.pro_wrap').after(scal);
	}
	$.progress=function(opt){
		new Progress(opt);
	}
	
})(jQuery)