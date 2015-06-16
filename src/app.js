
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
     
        this._super();
  
        var size = cc.winSize;

        //background
        var background=new cc.Sprite(res.scene_jpg);
        background.setPosition(size.width/2, size.height/2);
        this.addChild(background);
        
     //startbutton
        var mysprite=new cc.Sprite(res.start_png);
        var mysprite2=new cc.Sprite(res.start_png);
        var startBt=new cc.MenuItemSprite(mysprite,mysprite2,this.callbackbutton,this);

        var menu1 = new cc.Menu(startBt);
        menu1.x = size.width/2;
        menu1.y = size.height/2;
        this.addChild(menu1, 2);
    
       
        return true;
    },
    callbackbutton:function()
    {
    	cc.log("准备去第333场景了！");

    	cc.director.pushScene(new GameScene);
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

