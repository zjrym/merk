
function numzero(num){
	if(num<10){
		return "0"+num;
	}else{
		return num;
	}
}
function getXinxi(name){
	if(!location.search) return false;
	var xinxi=location.search.substr(1),
		arr=xinxi.split("&"),
		arr2=[],
		obj={};
	for(var i=0,l=arr.length;i<l;i++){
		arr2=arr[i].split("=");
		obj[arr2[0]]=arr2[1]
	}
	return obj;
	/*var xinxi=location.search.substr(1),
		reg=new RegExp("(^|&)"+name+"=([^&]+)");
		var a=reg.exec(xinxi);
		return a[2]*/
}
function removezero(num){
	return num*1;
}