window.onload=function(){
	timeBack();
	searchEffect();
	bannerEffect();
}
// 获取秒杀
function timeBack(){
	var spans = document.querySelector(".jd_time").querySelectorAll("span");
	// console.log(spans);
	var timetotal = 3700;
	var timerId = setInterval(function(){
		timetotal--;
		if (timetotal < 0) {
			clearInterval(timerId);
			return;
		}
		var hour = Math.floor(timetotal/3600);
		var minute = Math.floor(timetotal%3600/60);
		var second = timetotal%60;
		spans[0].innerHTML=Math.floor(hour/10);
		spans[1].innerHTML=Math.floor(hour%10);
		spans[3].innerHTML=Math.floor(minute/10);
		spans[4].innerHTML=Math.floor(minute%10);
		spans[6].innerHTML=Math.floor(second/10);
		spans[7].innerHTML=Math.floor(second%10);

	},1000);
}
// 导航栏
function searchEffect(){
	var banner = document.querySelector(".jd_banner");
	var bannerHeight = banner.offsetHeight;
	var search = document.querySelector(".jd_search");
	window.onscroll = function(){
		var offsetTop = document.body.scrollTop;
		// console.log(offsetTop);

		var opacity = 0;
		if(offsetTop < bannerHeight){
			
			opacity = offsetTop/bannerHeight;
			// console.log(opacity);
			// console.log(bannerHeight);
			search.style.backgroundColor= "rgba(233,35,34,"+ opacity +")";
		}

	}
}
// 轮播图
function bannerEffect(){
	var banner = document.querySelector(".jd_banner");
	var imgBox = document.querySelector(".jd_bannerImg");
	var first= imgBox.querySelector('li:first-of-type');
	var last = imgBox.querySelector('li:last-of-type');
	imgBox.appendChild(first.cloneNode(true));
	imgBox.insertBefore(last.cloneNode(true), imgBox.firstChild);
	var lis = imgBox.querySelectorAll('li');
	var count = lis.length;
	var bannerWidth = banner.offsetWidth;
	imgBox.style.width= count*bannerWidth+'px';
	for(var i = 0;i < count; i++){
		lis[i].style.width = bannerWidth+'px';
	}
	var index = 1;
	 imgBox.style.left=-bannerWidth+"px";
	 window.onresize=function(){
	 	bannerWidth = banner.offsetWidth;
	 	imgBox.style.width= count*bannerWidth+'px';
	for(var i = 0;i < count; i++){
		lis[i].style.width = bannerWidth+'px';
	}
	imgBox.style.left=-bannerWidth+"px";
	 }
	 
	 var setPoint =function(index){
	 	var point = document.querySelector('.jd_point');
	 	var points = point.querySelectorAll('li');
	 	for(var i=0;i< points.length;i++){
	 		 points[i].classList.remove('current');
	 	}
	 	 points[index-1].classList.add('current');
	 }
	 var timerId;
	 var startTime =function(){
	 	timerId=setInterval(function(){
	 		index++;
	 		imgBox.style.transition="left 0.5s ease-in-out";
	 		imgBox.style.left=(-index*bannerWidth)+'px';
	 		setTimeout(function(){
	 			if (index==count-1){
	 				index=1;
	 				imgBox.style.transition='none';
	 				imgBox.style.left=(-index*bannerWidth)+'px';
	 				
	 			}
	 		},500);
	 	}, 1000);
	 }
	 startTime();
	 var startX, moveX, distanceX;
	 var isEnd=true;
	 imgBox.addEventListener('touchstart',function(e){
	 	clearInterval(timerId);
	 	startX= e.targetTouches[0].clientX;
	 });
	 imgBox.addEventListener('touchmove',function(e){
	 	if(isEnd){
	 		moveX= e.targetTouches[0].clientX;
	 	distanceX= moveX-startX;
	 	imgBox.style.transition='none';
	 	imgBox.style.left=(-index*bannerWidth + distanceX)+'px';
	 	}
	 });
	 imgBox.addEventListener('touchend',function(e){
	 	isEnd=false;
	 	if(Math.abs(distanceX)>100){
	 		if(distanceX >0){
	 			index--;
	 		}else{
	 			index++;
	 		}
	 		imgBox.style.transition="left 0.5s ease-in-out";
            imgBox.style.left=-index*bannerWidth+"px";
	 	}else if (Math.abs(distanceX)>0){
	 		imgBox.style.transition="left 0.5s ease-in-out";
            imgBox.style.left=-index*bannerWidth+"px";
	 	}
	 	startX=0;
	 	moveX=0;
	 	distanceX=0;
	 });
	 imgBox.addEventListener('webkitTransitionEnd',function(){
	 	if(index==count-1){
	 		index=1;
	 		imgBox.style.transition='none';
	 		imgBox.atyle.left=-index*bannerWidth+'px';
	 	}else if (index==0) {
	 		index=count-2;
	 		imgBox.style.transition='none';
	 		imgBox.atyle.left=-index*bannerWidth+'px';
	 	}
	 	setPoint(index);
	 setTimeout(function(){
	 	isEnd=true;
	 	clearInterval(timerId);
	 	startTime();
	 },100);
	 });
}