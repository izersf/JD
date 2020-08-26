console.log("sss")
var butleft = document.getElementsByClassName("buttonleft");//向左
var butright = document.getElementsByClassName("buttonright");//向右

var swiperulpcopy = document.getElementsByClassName("swiperulp-copy");//内容轮播
var toleftvalue=0
console.log(swiperulpcopy[0])
butleft[0].onclick = function(){
	
	toleftvalue += -265;
	swiperulpcopy[0].style.left = toleftvalue+'px'; 
}