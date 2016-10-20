;(function($){
	function city(){
		$.ajax({
			url:'data5.json',
			type:"get",
			dataType:"json",
			success:function(e){
				var str="";
				console.log(e)
				for(var i in e){
					str+='<dl>'
							+'<dt><img src='+e[i].image+'></dt>'
							+'<dd>'
							+'<h5>'+e[i].name+'</h5>'
								+'<h2>骏途价 ¥ <span>'+e[i].low_price+'</span></h2>'
								+'<h3>市场价：<span>¥'+e[i].sur+'</span></h3>'
								+'<h4>去看看</h4>'
							+'</dd>'
						+'</dl>';
				}
				$(".cont").append(str);
			},
			error:function(){
				alert("请求失败")
			}
		})	
	}
	city();
})(Zepto)