;(function($){
	init()
	function init(){
		var data=ajax(),html="";
		$.each(data.top,function(i,val){
			html+="<div class='list'>"
				html+="<dl>"
					html+="<dt><img src='"+val.url+"'></dt>"
					html+="<dd>"
						html+="<h3>"+val.name+"</h3>"
						html+="<p>"+val.qixian+"</p>"
						html+="<p>活动价￥<span>"+val.guodong+"</span></p>"
						html+="<p>市场价：<del>"+val.shichang+"</del></p>"
						html+="<a href=''>"+val.atxt+"</a>"
					html+="</dd>"
				html+="</dl>"
			html+='</div>'
		})
		$(".top").append(html);
		var str="";
		$.each(data.bottom,function(i,val){
			str+="<div class='list1'>"
				str+="<dl>"
					str+="<dt><img src='"+val.url+"'></dt>"
					str+="<dd>"
						str+="<h3>"+val.name+"</h3>"
						str+="<p>骏途价￥<span>"+val.guodong+"</span></p>"
						str+="<p>市场价： <del>"+val.shichang+"</del></p>"
						str+="<a href=''>"+val.atxt+"</a>"
					str+="</dd>"
						str+="<div class='ding'>"+val.xiaobiao+"</div>"
				str+="</dl>"
			str+='</div>'
		})
		$(".bottom").append(str);
	}
	function ajax(){
		var data=null;
		$.ajax({
			url:"json/cyiyuan.json",
			type:"post",
			dataType:"json",
			async:false,
			success:function(json){
				data=json
			},error:function(){
				alert("请求错误")
			}
		})
		return data
	}
})(Zepto)