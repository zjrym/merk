;(function($){
	getJson();
	function getJson(){
		$.ajax({
			url:"baoche.json",
			type:"post",
			dataType:"json",
			success:function(e){
				var str="";
				$.each(e,function(i,val){
					str+='<dl>'
						+'<dt><img src="'+val.img+'" alt="" /></dt>'
						+'<dd>'
						+'<h1>'+val.name+'</h1>'
						+'<p class="list">'+val.lis1+'</p>'
						+'<p class="list">'+val.list2+'</p>'
						+'<p class="list">'+val.list3+'</p>'
						+'<p class="list">'+val.list4+'</p>'
						+'<p class="list">'+val.list5+'</p>'
						+'<p class="p1">'
						+'<a>'+val.jtu+'</a>'
						+'<br />'
						+'<a>'+val.scj+'</a>'
						+'<span>'+val.see+'</span>'
						+'</p>'



						+'</dd>'
					   +'</dl>'
				})
				$(".box").html(str)
				


			},
			error:function(){
				alert("请求失败！")
			}
		})
	}
})(Zepto)