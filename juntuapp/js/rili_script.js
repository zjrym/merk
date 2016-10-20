;(function($){
	$("#page").Rili({
		
	})
	var xinxi=getXinxi(),
		inarr=xinxi.date_in.split("-"),
		iny=inarr[0],
		inm=removezero(inarr[1]),
		ind=removezero(inarr[2]),
		outarr=xinxi.date_out.split("-"),
		outy=outarr[0],
		outm=removezero(outarr[1]),
		outd=removezero(outarr[2]);
		if(inm==outm){
			var tds=$("#tab"+inm).find("td").not(".old,.prev");
			tds.filter(function(){
				var txt=$(this).find("small").text()*1;
				if(txt>=ind&&txt<=outd){
					return $(this);
				}
			}).addClass("zhu")
			/*$(".zhu").first().append("<b>入住</b>")
			$(".zhu").last().append("<i>离开</i>")*/
		}else{
			var intds=$("#tab"+inm).find("td").not(".old,.prev"),
				outtds=$("#tab"+outm).find("td").not(".prev");
				intds.filter(function(){
					var txt=$(this).find("small").text()*1;
					if(txt>=ind){
						return $(this);
					}
				}).addClass("zhu")
				outtds.filter(function(){
					var txt=$(this).find("small").text()*1;
					if(txt<=outd){
						return $(this);
					}
				}).addClass("zhu")
				
		}
		$(".zhu").first().append("<b>入住</b>")
		$(".zhu").last().append("<i>离开</i>")
		var isClick=false;
		$("#page").on("tap","td",function(){
			if($(this).is(".old,.prev"))return false;
			if(!isClick){
				$(".zhu").removeClass();
				$("#page").find("b,i").remove()
				$(this).addClass("zhu");
				$(this).append("<b>入住</b>");
				isClick=true;
			}else{	
				$(this).addClass("zhu");
				$(this).append("<i>离开</i>");
				isClick=false;
				var iday=$(".zhu").first().find("small").text(),
					oday=$(".zhu").last().find("small").text(),
					reg=/[\u4e00-\u9fa5]/g,
					iy=$(".zhu").first().parents(".rili_box").find("h3").text().replace(reg,"-"),
					oy=$(".zhu").last().parents(".rili_box").find("h3").text().replace(reg,"-"),
					itime=iy+numzero(iday),
					otime=oy+numzero(oday),
					cha=(new Date(otime)*1-new Date(itime)*1)/86400000;
					if(cha>15){
						alert("请选择十五天以内")
					}else{
						location.href="hotel.html?date_in="+itime+"&date_out="+otime;
					}
			}
			
		})
})(Zepto)