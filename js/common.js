var licast = {
	tap = function(dom,callback){
		dom.addEventListener('touchstart',function(e){
			if (!dom|| typeof dom!="object") {
				return;
			}
			if (e.targetTouches.leght >1) {
				return;
			}
			var startTime, startX, startY; 
			startTime= Date.now();
			startX = e.targetTouches[0].clientX;
			startY = e.targetTouches[0.clientY;]
		})
		dom.addEventListener('touchend',function(e){
			var endY, endX;
			if (e.changedTouches.length > 1) {
				return;
			}
			if (Date.now()-startTime>150) {
				return;
			}
			endX=e.changedTouches[0].clientX;
			endY=e.changedTouches[0].clientY;
			if (Math.abs(endX-startX)<6 && Math.abs(endY-startY)<6) {
				callback && callback(e);
			}
		})
	}
};