;(function($){
	init()
	function init(){
		var data=ajax();
		var html="";
		$.each(data.huodong,function(i,val){
			html+="<div class='list'>"
				html+="<dl>"
					html+="<dt>"
						html+="<img src='"+val.url+"'>"
					html+="</dt>"
					html+="<dd>"
						html+="<h3>"+val.zhuti+"</h3>"
						html+="<p>"+val.xiangqing1+"</p>"
						html+="<p>"+val.xiangqing2+"</p>"
						html+="<div>"
							html+="市场价：<del>"+val.shijia+"</del><br>"
							html+="<span>骏途价：</span><i>"+val.shijia+"</i>"
							html+="<a href=''>去看看</a>"
						html+="</div>"
					html+="</dd>"
				html+="</dl>"
			html+="</div>"
		})
		$(".huo").append(html)
	}
	function ajax(){
		var data=null;
		$.ajax({
			url:"json/yefamen.json",
			type:"post",
			dataType:"json",
			async:false,
			success:function(json){
				data=json;
			},
			error:function(){
				alert("请求错误")
			}
		})
		return data;
	}
})(Zepto)