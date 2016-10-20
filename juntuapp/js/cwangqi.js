;(function($){
	init()
	function init(){
		var data=ajax(),html="";
		$.each(data.tuwen,function(i,val){
			html+="<div class='list'>"
				html+="<dl>"
					html+="<dt><img src='"+val.url+"' alt=''></dt>"
					html+="<dd>"
						html+="<p>"+val.name+"</p>"
						html+="<div>"
							html+="市场价：<del>"+val.shichang+"</del><br>"
							html+="<span>骏途价：￥</span><i>"+val.juntu+"</i>"
							html+="<a href=''>"+val.atxt+"</a>"
						html+="</div>"
					html+="</dd>"
					html+="<em>"+val.etxt+"</em>"
				html+="</dl>"
			html+="</div>"
		})
		$(".top").html(html);
console.log(data)
	}
	function ajax(){
		var data=null;
		$.ajax({
			url:"json/zhitong.json",
			type:"post",
			dataType:"json",
			async:false,
			success:function(e){
				data=e;
			},error:function(){
				alert("请求错误")
			}
		})
		return data;
	}
})(Zepto)