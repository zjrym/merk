;(function($){
	$.fn.Rili=function(opt){
		var setings=$.extend({
			stsr:new Date(),
			size:10
		},opt||{})
		return $(this).each(function(){
			var currentD=setings.stsr;
			var page=$(this),y=currentD.getFullYear(),m=currentD.getMonth();
			for(var i=0;i<setings.size;i++){
				var newcurrentD=new Date(y,m+i)
				createHtml(newcurrentD.getFullYear(),newcurrentD.getMonth()+1,page);	
			}
			
		})
		function createHtml(y,m,page){
				html="<div class='rili_box'>";
				html+="<h3>"+y+"年"+numzero(m)+"月</h3>";
				html+="<ul><li>日</li><li>一</li><li>二</li><li>三</li><li>四</li><li>五</li><li>六</li></ul>";
				html+=createTable(y,m);
				html+="</div>"
				page.append($(html))
		}
		function createTable(y,m){
			var Days=getdays(y,m),
				pDays=getdays(y,m-1),
				prevdays=new Date(y,m-1,1).getDay(),
				rows=Math.ceil((Days+prevdays)/7),
				Month=new Date().getMonth()+1,
				day=new Date().getDate(),
				str="<table id='tab"+m+"'>";
				for(var i=0;i<rows;i++){
					str+="<tr>";
					for(var j=1;j<=7;j++){
						var b=(j+i*7)-prevdays;
						if(b<1){
							str+="<td class='prev'><small>"+(pDays+b)+"</small></td>";
						}else{
							if(b<=Days){
								if(m==Month&&b<day){
									str+="<td class='old'><small>"+b+"</small></td>";
								}else{
									str+="<td><small>"+b+"</small></td>";
								}
							}
						}
						
					}
					str+="</tr>";
				}
				str+="</table>";
				return str;
		}
		function getdays(y,m){
			if(m==1||m==3||m==5||m==7||m==8||m==10||m==12){
				return 31;
			}else if(m==4||m==6||m==9||m==11){
				return 30;
			}else{
				if(y%400==0||(y%4==0&&y%100!=0)){
					return 29;
				}else{
					return 28;
				}
			}
		}
	}
})(Zepto)