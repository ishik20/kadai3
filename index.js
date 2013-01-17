enchant();
window.onload=function() {
    var game = new Game(320, 480);
    game.onload = function() {
        var bgSprite = new Sprite(320, 480);
        var bgSurface = new Surface(320, 480);
        bgSurface.context.strokeStyle = "#ff0000";
        bgSurface.context.beginPath();
        bgSurface.context.rect(100, 100, 150, 150);
        bgSurface.context.stroke();
        bgSurface.context.strokeStyle = "#0000ff";
        bgSurface.context.moveTo(200, 200);
        bgSurface.context.lineTo(300, 300);

        var len = 10, i;
        var x = 200, y = 200;
        bgSurface.context.moveTo(x, y);
        for (i = 0; i < 10; i++) {
        
	        y = y - len;
	        bgSurface.context.lineTo(x, y);
	        len +=5;
	        x = x + len;
   	    	bgSurface.context.lineTo(x, y);
   	    	len += 5;
        	y = y + len;
        	bgSurface.context.lineTo(x, y);
        	len += 5;
        	x = x - len;
        	bgSurface.context.lineTo(x, y);
        	len += 5;

        }
        bgSurface.context.stroke();
        bgSprite.image = bgSurface;
        game.rootScene.addChild(bgSprite);

		bgSprite.addEventListener(
    	    Event.TOUCH_START, function(event) {
    		if (event.x > 160) {
        		bgSprite.rotate(10);
    		} else {
        		bgSprite.rotate(350);
		    }
		});
    };
    game.start();
};
        
        