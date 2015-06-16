
var OverLayer = cc.Layer.extend({
	sprite:null,
	ctor:function () {

		this._super();

		var size = cc.winSize;

		//background
		var background=new cc.Sprite(res.scene_jpg);
		background.setPosition(size.width/2, size.height/2);
		this.addChild(background);

		//continuebutton
		var mysprite=new cc.Sprite(res.continue_png);
		var mysprite2=new cc.Sprite(res.continue_png);
		var continuebt=new cc.MenuItemSprite(mysprite,mysprite2,this.callbackbutton,this);

		var menu1 = new cc.Menu(continuebt);
		menu1.x = size.width/2;
		menu1.y = size.height/2;
		this.addChild(menu1, 2);
		
		//score
		var value=new GameLayer();
		var me=this._scoreValue;
	//	var Score=GameLayer.onEnter();
		this._score=new cc.LabelTTF(value.me+"分","",50);
		//this._score.setAnchorPoint(0, 1);
		this._score.setPosition(size.width/2, size.height/2+100);
		this.addChild(this._score);

		
		return true;
	},
	callbackbutton:function(){
	//	cc.director.popScene();
	//	cc.director.popToRootScene();
		cc.director.pushScene(new HelloWorldScene);
	}
//	setScore:function(value){
//		//var value=new OverScene();
//		this._score.setString(value);
//	}
});

var OverScene = cc.Scene.extend({
	//_layer:null,
//	ctor:function(){
		onEnter:function () {
		this._super();
		var layer = new OverLayer();
		this.addChild(layer);
	}
//	onEnter:function () {
//		this._super();
//		
//	},
//	setScore:function(value){
//		this._layer.setScore(value);
//	}
});

