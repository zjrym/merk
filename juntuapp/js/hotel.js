;(function($){
	var mySwiper = new Swiper ('.swiper-container', {
	    loop: true,
	    autoplay:2000,
	})
	function city(){
		$.ajax({
			url:'data3.json',
			type:"get",
			dataType:"json",
			success:function(e){
				var str="";
				for(var i in e){
					str+="<dl><dt><a href='#'><img src="+e[i].image+"></a></dt><dd><a href='#'><h3>"+e[i].name+"</h3><h4>"+e[i].date+"</h4><h5>¥"+e[i].low_price+"<span>起</span><a>¥"+e[i].price+"</a></h5></a></dd></dl>";
				}
				$(".hotel").append(str);
			},
			error:function(){
				alert("请求失败")
			}
		})	
	}
	Goto()
	function Goto(){
		$("#go").on("tap",function(){
			var reg=/[\u4e00-\u9fa5]/g;
			var date=new Date();
			var y=date.getFullYear();
			var i=y+"-"+$("#in").text().replace(reg,"-"),o=y+"-"+$("#out").text().replace(reg,"-");
			var url="rili.html?date_in="+i+"&date_out="+o;
			$(this).attr("href",url)
		})
	};
	city();
	function getDay(Time){
		var tday=new Date()*1/86400000,
			nday=new Date(Time)*1/86400000,   
			sub=Math.abs(Math.ceil(nday-tday));
			if(sub==0){
				/*$("#ji").text(1)*/
				return sub;
			}else{
				/*$("#ji").text(sub)*/
				return sub;
			}
	}
	function getTime(n){
		var n=n || 0,
			time=new Date(),
			new_time=new Date(time.getFullYear(),time.getMonth()+1,time.getDate()+n)
			return new_time.getFullYear()+"-"+numzero(new_time.getMonth())+"-"+numzero(new_time.getDate())
	};
	function zhouji(Time){
		var arr=["日","一","二","三","四","五","六",]
			tday=new Date()*1/86400000,
			nday=new Date(Time)*1/86400000,   
			sub=Math.abs(Math.ceil(nday-tday)),
			xingqi=new Date(Time).getDay();
			num="";
			if(sub==0){
				$("#ji").text(1)
			}else{
				$("#ji").text(sub)
			}
			
			switch(sub){
				case 0:num="周"+arr[xingqi];break;
				case 1:num="周"+arr[xingqi];break;
				case 2:num="周"+arr[xingqi];break;
				default:num="周"+arr[xingqi];
			} 
		return num
	}
	var xinxi=getXinxi();
		if(xinxi){
			var intime=xinxi.date_in,
				outtime=xinxi.date_out;
		}else{
			var intime=getTime(),
				outtime=getTime(1);
		}
		
		console.log(intime)
		var today=getDay(intime),
			nextDay=getDay(outtime),
			cha=nextDay-today;
			 m=intime.charAt(6),
			 d=intime.substr(8,2),
			 m2=outtime.charAt(6),
			 d2=outtime.substr(8,2);
			 console.log(m+""+d+""+m2+""+d2)
		$("#in").text(m+"月"+d+"日")
		$("#out").text(m2+"月"+d2+"日")
		$(".gong").text(cha+"晚")
		$("#inzhou").text(zhouji(intime))
		$("#outzhou").text(zhouji(outtime))
		console.log(zhouji(intime))

	$("#zhe").on("tap",function(){
		$(".mark").css("top","0");
	})
	$(".top").find("p").on("tap",function(){
		$(this).addClass("yang").siblings().removeClass("yang")
	})
	$(".top1").find("p").on("tap",function(){
		$(this).addClass("yang1").siblings().removeClass("yang1")
	})
	$("#btn").on("tap",function(){
		$(".mark").css("top","100%");
		$("#zhe").find("b").text($(".yang").text()+"、"+$(".yang1").text())
	})
	var ls=window.sessionStorage;
	var txt=ls.getItem("city");
	if (!txt) {
		$("#mudi").text("西安")
	}else{
		$("#mudi").text(txt)
	};
	$("#zhuan").on("tap",function(){
		location.href="mudi.html"
	})
})(Zepto)