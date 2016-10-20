;(function($){
	//焦点图
	$("#back").on("tap",function(){
		window.history.go(-1)
	})

	function render(){
		$.ajax({
			url:"zjdata.json",
			type:"post",
			dataType:"json",
			success:function(data){
				console.log(data);
				var str="";
				for(var i=0;i<data.length;i++){
					str+='<section class="theme">'
						 +'<div class="hot">'
						 	+'<img src="'+data[i].img+'">'
						 	+'<p>'+data[i].name+'</p>'
							+'<p>'+data[i].id+'</p>'
							+'<p>￥<span>'+data[i].price+'</span>起</p>'
							+'<p>活动日期:'+data[i].date+'</p>'
						+'</div>'
						+'<p class="ps">'
						+'<span>'+data[i].content+'</span>'
						+'<i>'+data[i].main+'</i>'
						+'</p>'
						+'<h4>'+data[i].aim+'</h4>' 
						+'</section>'
				}
				$("#thelist").append(str);
			},
			error:function(){
				console.log("请求错误");
			}
		})
	}
	render();
	var myScroll,
	pullDownEl, pullDownOffset,
	pullUpEl, pullUpOffset,
	generatedCount = 0;
	function pullDownAction () {
			setTimeout(function () {
			myScroll.refresh();
			//console.log(1)
		}, 1000);
	}

	function pullUpAction () {

		setTimeout(function () {
			var el, li, i;
			el = document.getElementById('thelist');
			for (i=0; i<3; i++) {
				render();
				console.log(render);

			}
			myScroll.refresh();
		}, 1000);
	}

	function loaded() {
		pullDownEl = document.getElementById('pullDown');
		pullDownOffset = pullDownEl.offsetHeight;
		pullUpEl = document.getElementById('pullUp');
		pullUpOffset = pullUpEl.offsetHeight;
		myScroll = new iScroll('main', {
			useTransition: true,
			topOffset: pullDownOffset,
			onRefresh: function () {
				if (pullDownEl.className.match('loading')) {
					pullDownEl.className = '';
					pullDownEl.querySelector('.pullDownLabel').innerHTML = 'Pull down to refresh...';
				} else if (pullUpEl.className.match('loading')) {
					pullUpEl.className = '';
					pullUpEl.querySelector('.pullUpLabel').innerHTML = 'Pull up to load more...';
				}
			},
			onScrollMove: function () {
				if (this.y > 5 && !pullDownEl.className.match('flip')) {
					pullDownEl.className = 'flip';
					pullDownEl.querySelector('.pullDownLabel').innerHTML = 'Release to refresh...';
					this.minScrollY = 0;
				} else if (this.y < 5 && pullDownEl.className.match('flip')) {
					pullDownEl.className = '';
					pullDownEl.querySelector('.pullDownLabel').innerHTML = 'Pull down to refresh...';
					this.minScrollY = -pullDownOffset;
				} else if (this.y < (this.maxScrollY - 5) && !pullUpEl.className.match('flip')) {
					pullUpEl.className = 'flip';
					pullUpEl.querySelector('.pullUpLabel').innerHTML = 'Release to refresh...';
					this.maxScrollY = this.maxScrollY;
				} else if (this.y > (this.maxScrollY + 5) && pullUpEl.className.match('flip')) {
					pullUpEl.className = '';
					pullUpEl.querySelector('.pullUpLabel').innerHTML = 'Pull up to load more...';
					this.maxScrollY = pullUpOffset;
				}
			},
			onScrollEnd: function () {
				if (pullDownEl.className.match('flip')) {
					pullDownEl.className = 'loading';
					pullDownEl.querySelector('.pullDownLabel').innerHTML = 'Loading...';
					pullDownAction();	// Execute custom function (ajax call?)
				} else if (pullUpEl.className.match('flip')) {
					pullUpEl.className = 'loading';
					pullUpEl.querySelector('.pullUpLabel').innerHTML = 'Loading...';
					pullUpAction();	// Execute custom function (ajax call?)
				}
			}
		});

		setTimeout(function () { document.getElementById('main').style.left = '0'; }, 800);
	}

	document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);

	document.addEventListener('DOMContentLoaded', function () { setTimeout(loaded, 200); }, false);

		
})(Zepto)


