;(function($){
	function city(){
		$.ajax({
			url:'data1.json',
			type:"get",
			dataType:"json",
			success:function(e){
				var str="";
				console.log(e)
				for(var i in e){
					str+="<dl><dt><a href='#'><img src="+e[i].image+"></a></dt><dd><h2>"+e[i].name+"</h2><h3>¥<span>"+e[i].low_price+"</span><a>省61元</a></h3><h4>有效期至：<span>"+e[i].date+"</span></h4><h4>剩余时间："+e[i].sur+"</h4><button>立即购买</button></dd></dl>";
				}
				$(".con").append(str);
			},
			error:function(){
				alert("请求失败")
			}
		})	
	}
	city();
})(Zepto)