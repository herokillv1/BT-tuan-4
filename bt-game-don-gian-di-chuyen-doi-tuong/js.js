function Hero(image, top, left, size,speed){
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;
    this.speed = speed;

    this.getHeroElement = function(){
        return '<img width="'+ this.size + '"' +
            ' height="'+ this.size + '"' +
            ' src="' + this.image +'"' +
            ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
    }

    this.moveRight = function(){
        this.left += this.speed;
        console.log('ok: ' + this.left);
    }

    this.moveDown = function(){
        this.top += this.speed;
        console.log('ok: ' + this.top);
    }

    this.moveLeft = function(){
        this.left -= this.speed;
        console.log('ok: ' + this.left);
    }

    this.moveUp = function(){
        this.top -= this.speed;
        console.log('ok: ' + this.top);
    }

}

var hero = new Hero('trungbd.png', 20, 30,100,100);


    let moveX = 1;
    let moveY = 1;

    function start() {
        if ((hero.left > window.innerWidth - hero.size *1.8) || (hero.left < 0)) {
            moveX = -moveX;
        }
        if (moveX > 0) {
            hero.moveRight();
        } else hero.moveLeft();

        if ((hero.top > window.innerHeight - hero.size *1.6 ) || (hero.top < 0)) {
            moveY = -moveY;
        }
        if (moveY > 0) {
            hero.moveDown();
        } else hero.moveUp();
        document.getElementById('game').innerHTML = hero.getHeroElement();
        setTimeout(start, 100);
    }


start();