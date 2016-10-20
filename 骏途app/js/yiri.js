;(function($){
	$("#back").on("tap",function(){
		window.history.go(-1)
	})
	//点击距离
	$("#dis").on('tap',function(){
		$('.mark').animate({'bottom':'0'},1000)
		$('.dis').animate({'bottom':'0'},1000)
	})

	//点击主题
	$("#dfg").on('click',function(){
		//alert(1)
		$('.mark').animate({'bottom':'0'},1000)
		$('.list').animate({'bottom':'0'},1000)
	})

	//点击排序
	$("#sort").on('tap',function(){
		$('.mark').animate({'bottom':'0'},1000)
		$('.sort').animate({'bottom':'0'},1000)
	})

	$('.mark').on('tap',function(){
		$('.mark').animate({'bottom':'-100%'},1000)
		$('ul').animate({'bottom':'-100%'},1000)
	})

	
		
	//筛选
	$(".list").find("li").on("tap",function(){
		//alert(1)
		$(".list").animate({'bottom':'-100%'},1000);
		var xing=$(this).text();
		console.log(xing)
		var data=ajax()
		var str=""
		$.each(data,function(i,val){
			if(val.id==xing){
				console.log("渲染")
				str+='<section class="theme">'
					+'<div class="hot">'
					+'<img src="'+val.img+'">'
					+'<p>'
					+'<img src="'+val.name+'">'
					+'</p>'
					+'<p>'+val.id+'</p>'
					+'<p>'+val.aim+'</p>'
					+'<p>'+val.content+'</p>'
					+'</div>'
					+'<p class="ps">'+val.main+'</p>'
						
					+'<h4>￥'+val.price+'起</h4>' 
				+'</section>'
				
				$('#thelist').html(str);
				/*$('#pullDown').hide();
				$('#pullUp').hide();*/
			}
		})
	})
	function ajax(){
		var json=null;
		$.ajax({
			url:"json.json",
			type:"post",
			dataType:"json",
			async:false,
			success:function(data){
				json=data;
				
			},error:function(){
				alert("请求错误")
			}
		})
		return json
	}

	
	
	//价格排序
	$('.sort').find('li').on('tap',function(){
		$(".sort").animate({'bottom':'-100%'},1000);
		var data=ajax()
		var tit=$(this).attr('data-tit');
		//由低到高
		function down(a,b){
			return a-b
		}
		//由高到低
		function up(a,b){
			return b-a;
		}
		if(tit==2){
			var str="";
			var arr1=[];
			var	arr2=[];
			var	arr3=[];
			$.each(data,function(i,val){
				arr1.push(val.price)
				arr2.push(val.price);
				arr2=arr2.sort(down)
				//console.log(arr2)
			})
			$.each(arr2,function(c,d){
				arr3.push($.inArray(d,arr1));//排重
			})
			$.each(arr3,function(a,b){
				str+='<section class="theme">'
						+'<div class="hot">'
						+'<img src="'+data[b].img+'">'
						+'<p>'
						+'<img src="'+data[b].name+'">'
						+'</p>'
						+'<p>'+data[b].id+'</p>'
						+'<p>'+data[b].aim+'</p>'
						+'<p>'+data[b].content+'</p>'
						+'</div>'
						+'<p class="ps">'+data[b].main+'</p>'
							
						+'<h4>￥'+data[b].price+'起</h4>' 
					+'</section>'
						
					$('#thelist').html(str);
					$("#pullUp").hide();
			})
		}
		if(tit==3){
			var str="";
			var arr1=[];
			var	arr2=[];
			var	arr3=[];
			$.each(data,function(i,val){
				arr1.push(val.price)
				arr2.push(val.price);
				arr2=arr2.sort(up)
				//console.log(arr2)
			})
			$.each(arr2,function(c,d){
				arr3.push($.inArray(d,arr1));//排重
			})
			$.each(arr3,function(a,b){
				str+='<section class="theme">'
						+'<div class="hot">'
						+'<img src="'+data[b].img+'">'
						+'<p>'
						+'<img src="'+data[b].name+'">'
						+'</p>'
						+'<p>'+data[b].id+'</p>'
						+'<p>'+data[b].aim+'</p>'
						+'<p>'+data[b].content+'</p>'
						+'</div>'
						+'<p class="ps">'+data[b].main+'</p>'
							
						+'<h4>￥'+data[b].price+'起</h4>' 
					+'</section>'
						
					$('#thelist').html(str);
					$("#pullUp").hide();
			})
		}
			
	})

	//距离
	$('.dis').find('li').on('click',function(){
		$(".list").animate({'bottom':'-100%'},1000);
		var data=ajax()
		var str="";
		var tit=$(this).attr('data-tit');
		//小于50km
		if(tit==2){
			$.each(data,function(i,val){
					if(val.distance<=50){
						console.log("渲染")
						str+='<section class="theme">'
							+'<div class="hot">'
							+'<img src="'+val.img+'">'
							+'<p>'
							+'<img src="'+val.name+'">'
							+'</p>'
							+'<p>'+val.id+'</p>'
							+'<p>'+val.aim+'</p>'
							+'<p>'+val.content+'</p>'
							+'</div>'
							+'<p class="ps">'+val.main+'</p>'
								
							+'<h4>￥'+val.price+'起</h4>' 
						+'</section>'
						
						$('#thelist').html(str);
						$("#pullUp").hide();
					}
			})
		}
		//小于50-100km
		if(tit==3){
			$.each(data,function(i,val){
					if(val.distance>50 && val.distance<=100){
						console.log("渲染")
						str+='<section class="theme">'
							+'<div class="hot">'
							+'<img src="'+val.img+'">'
							+'<p>'
							+'<img src="'+val.name+'">'
							+'</p>'
							+'<p>'+val.id+'</p>'
							+'<p>'+val.aim+'</p>'
							+'<p>'+val.content+'</p>'
							+'</div>'
							+'<p class="ps">'+val.main+'</p>'
								
							+'<h4>￥'+val.price+'起</h4>' 
						+'</section>'
						
						$('#thelist').html(str);
						$("#pullUp").hide();
					}
			})
		}
		//小于100-150km
		if(tit==4){
			$.each(data,function(i,val){
					if(val.distance>100 && val.distance<=150){
						console.log("渲染")
						str+='<section class="theme">'
							+'<div class="hot">'
							+'<img src="'+val.img+'">'
							+'<p>'
							+'<img src="'+val.name+'">'
							+'</p>'
							+'<p>'+val.id+'</p>'
							+'<p>'+val.aim+'</p>'
							+'<p>'+val.content+'</p>'
							+'</div>'
							+'<p class="ps">'+val.main+'</p>'
								
							+'<h4>￥'+val.price+'起</h4>' 
						+'</section>'
						
						$('#thelist').html(str);
						$("#pullUp").hide();
					}
			})
		}
		//小于100-150km
		if(tit==5){
			$.each(data,function(i,val){
					if(val.distance>150 ){
						console.log("渲染")
						str+='<section class="theme">'
							+'<div class="hot">'
							+'<img src="'+val.img+'">'
							+'<p>'
							+'<img src="'+val.name+'">'
							+'</p>'
							+'<p>'+val.id+'</p>'
							+'<p>'+val.aim+'</p>'
							+'<p>'+val.content+'</p>'
							+'</div>'
							+'<p class="ps">'+val.main+'</p>'
								
							+'<h4>￥'+val.price+'起</h4>' 
						+'</section>'
						
						$('#thelist').html(str);
						$("#pullUp").hide();
					}
			})
		}
		

	})
	


})(Zepto)