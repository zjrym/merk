;(function($){
	function city(){
		$.ajax({
			url:'data4.json',
			type:"get",
			dataType:"json",
			success:function(e){
				var arr=e.one;
				var arr1=e.two;
				var arr2=e.three;
				var str="";
				var str1="";
				var str2="";
				console.log(e)
				for(var i in arr){
					str+='<dl>'
							+'<dt><img src='+arr[i].image+'></dt>'
							+'<dd>'
								+'<h5>'+arr[i].name+'</h5>'
								+'<h2>骏途价 ¥ <span>'+arr[i].low_price+'</span></h2>'
								+'<h3>市场价：<span>¥'+arr[i].sur+'</span></h3>'
								+'<h4>去看看</h4>'
							+'</dd>'
						+'</dl>';
				}
				for(var i in arr1){
					str1+='<dl>'
							+'<dt><img src='+arr1[i].image+'></dt>'
							+'<dd>'
							+'<h5>'+arr1[i].name+'</h5>'
								+'<h2>骏途价 ¥ <span>'+arr1[i].low_price+'</span></h2>'
								+'<h3>市场价：<span>¥'+arr1[i].sur+'</span></h3>'
								+'<h4>去看看</h4>'
							+'</dd>'
						+'</dl>';
				}
				for(var i in arr2){
					str2+='<dl>'
							+'<dt><img src='+arr2[i].image+'></dt>'
							+'<dd>'
							+'<h5>'+arr2[i].name+'</h5>'
								+'<h2>骏途价 ¥ <span>'+arr2[i].low_price+'</span></h2>'
								+'<h3>市场价：<span>¥'+arr2[i].sur+'</span></h3>'
								+'<h4>去看看</h4>'
							+'</dd>'
						+'</dl>';
				}
				$(".cont").append(str);
				$(".cont1").append(str1);
				$(".cont2").append(str2);
			},
			error:function(){
				alert("请求失败")
			}
		})	
	}
	city();
})(Zepto)