var Homeward = {};
Homeward.VER = "1.0.0";
Homeward.Event = {
	
}
/**
 *	预先加载
 */
Homeward.Preload = {
	_queue : null,	//loder
	_images : [
		{id:1,src : "loading_bg.png"},
		{id:2,src : "loading_car.png"},
		{id:3,src : "loading_bg.png"},
		{id:4,src : "loading_car.png"},
		{id:5,src : "loading_bg.png"},
		{id:6,src : "loading_car.png"},
		{id:7,src : "loading_bg.png"},
		{id:8,src : "loading_car.png"},
		{id:9,src : "loading_bg.png"},
		{id:10,src : "loading_car.png"},
		{id:11,src : "loading_bg.png"},
		{id:12,src : "loading_car.png"}
	],
	_sounds : [
	
	],
	/**
	 *	初始化
	 */
	init : function(){
		this._queue = new createjs.LoadQueue(true);
		this._queue.loadManifest(this._images, false, "images/");
//		this._queue.loadManifest(this._sounds, false, "");
//		createjs.Sound.registerSounds(this._sounds);
	},
	/**
	 *	加载
	 */
	load : function(progress, complete){
		if(!this._queue) Homeward.Preload.init();
		if(progress)this._queue.on("progress", progress, this);//资源载入中
		if(complete)this._queue.on("complete", complete, this);//资源载入完毕
		this._queue.load();
	},
	/**
	 *	获取loader
	 */
	getQueue : function(){
		return this._queue;
	},
	/**
	 *	获取文件实体
	 */
	getResult : function(id){
		return this._queue.getResult(id);
	}
};
Homeward.main = function(canvas){
	var _this = this;
	_this.init = function(){
		_this.Stage_constructor(canvas);//继承stage
		createjs.Ticker.setFPS = FPS;	//帧频
		createjs.Ticker.addEventListener('tick', _this);	//按照帧频更新舞台
		createjs.Touch.enable(_this);	//启用tauch
		
		
	}
	_this.init(canvas);
}
Homeward.main.prototype = createjs.extend(Homeward.main, createjs.Stage);
Homeward.main = createjs.promote(Homeward.main, "Stage");