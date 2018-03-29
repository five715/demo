var _game = null;

$(function(){
	$(window).bind("resize load", function(){
		w = $(".box").width();
		if(w < 1000){			
			size = w / 64;
			$("html").css("font-size",size+"px");
		}
	})
	Homeward.Preload.load(progress, complete);
})
/**
 * 加载中
 */
function progress(e){
	var per = Math.floor(e.loaded*100);
	console.log(per);
}
/**
 * 加载完成
 */
function complete(e){
	
}
/**
 * 游戏开始
 */
function onGameStart(){
	
}
/**
 * 游戏结束
 */
function onGameOver(){
	
}
