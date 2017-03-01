(function (){
	function changRem(){
		var scale = 1 / devicePixelRatio;  
		document.querySelector('meta[name="viewport"]').setAttribute('content','initial-scale=' + scale + ',maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no , width=device-width');
		//flexible中定义<html>font-size
		var width = document.documentElement.getBoundingClientRect().width;  
		if (width / devicePixelRatio > 540) {  
		    width = 540 * devicePixelRatio;
		}
		var rem = width / 10;
		document.documentElement.style.fontSize = rem + 'px';
	}
	changRem();
	var time;
	
	window.addEventListener("resize",function (){
		clearInterval(time);
		time = setInterval(changRem(),10);
	})
})();

//jQ接口
var $ = require('./com/jquery-2.2.0');
//html接口
var tpl = require('./tpl/tpl')
$('body').before(tpl);


//swiper接口
require('./com/swiper-3.3.1.min');
var swiperAnimate = require('./com/swiper.animate1.0.2.min').swiperAnimate;
var swiperAnimateCache = require('./com/swiper.animate1.0.2.min').swiperAnimateCache;


var mySwiper = new Swiper ('.swiper-container', {
	    direction: 'vertical',
	    loop: true,

	    // 如果需要分页器
	    pagination: '.swiper-pagination',
	    
	    onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
    		swiperAnimateCache(swiper); //隐藏动画元素 
    		swiperAnimate(swiper); //初始化完成开始动画
  		}, 
 		onSlideChangeEnd: function(swiper){ 
    		swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
  		} 
	}) 











