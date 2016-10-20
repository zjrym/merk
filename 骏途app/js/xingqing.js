;(function($){
	var arr=decodeURI(location.search).substr(1);
	var json=city();
	var str="";
	$.each(json,function(i,val){
		console.log(arr==json[i].id)
		if(arr==json[i].id){
			str+="<dl><dt><a href='#'><img src="+json[i].image+"></a></dt><dd><a href='#'><h2>"+json[i].name+"</h2><h3>"+json[i].addr+"</h3><h4>¥"+json[i].low_price+"起</h4></a></dd></dl>";
			console.log(str)
			$(".main").html(str);
			
		}

	})
	//$("#thelist").append(str);
	function city(){
		var data=null;
		$.ajax({
			url:'data.json',
			type:"get",
			dataType:"json",
			async:false,
			success:function(e){
				data=e
			},
			error:function(){
				alert("请求失败")
			}
		})	
		return data
	}
})(Zepto)