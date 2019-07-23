window.onload=function () {
	var ct_left = document.querySelector('.ct_left');
	var ulBox = ct_left.querySelector('ul');
	var startY=0;
	var moveY =0;
	var distanceY=0;
	var currentY =0;
	var leftHeight = ct_left.offsetHeight;
	var ulBoxHeight= ulBox.offsetHeight;
	var maxTop=0;
	var minTop=leftHeight-ulBoxHeight;
	 /*设置滑动状态下的最大的top值*/
    var maxBounceTop=maxTop+100;
    /*设置滑动状态下的最小top值*/
    var minBounceTop=minTop-100;

	ulBox.addEventListener("touchstart", function(e){
		startY = e.targetTouches[0].clientY;
	});
	ulBox.addEventListener("touchmove", function(e){
		moveY = e.targetTouches[0].clientY;
		// console.log(moveY);
		distanceY= moveY-startY;
		if (currentY+distanceY > maxBounceTop || currentY+distanceY < minBounceTop) {
			return;
		}
		ulBox.style.transition='none';
		ulBox.style.top=(currentY+distanceY)+'px';
	});
	ulBox.addEventListener("touchend", function(e){
		if(currentY+distanceY < minTop){
            currentY=minTop;
            /*回到minTop位置*/
            ulBox.style.transition="top 0.5s";
            ulBox.style.top=minTop+"px";
        }
        else if(currentY+distanceY > maxTop){
            currentY=maxTop;
            /*回到maxTop位置*/
            ulBox.style.transition="top 0.5s";
            ulBox.style.top=maxTop+"px";
        }
        else{
            /*记录当前滑动的距离*/
            currentY+=distanceY;
        }
	});
	li
}