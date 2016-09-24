;(function($){

	function ajax(){
		var opt="";
		$.ajax({
			url:"data/data.json",
			type:"post",
			dataType:"json",
			success:function(opt){
				//opt=opt;
			var str="";
			console.log("<img src='"+opt[0].src+"' style='width:"+opt[0].width+"px"+"'>")
			for(var i=0,len=opt.length;i<len-1;i++){
				str+="<img src='"
					+opt[i].src
					+"' style='width:"
					+opt[i].width+"px"
					+opt[i].height+"px"
					+"'>";
			}
				
			$("#main").html(str);

			},
			error:function(){
				alert("请求失败")
			}
		})

			//return opt

	}
	ajax();

})(Zepto)

	
