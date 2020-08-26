/* =================================当鼠标滑过导航条的a标签时弹出div========================================= */
function showNavmenu(){
	var nav_content = document.getElementsByClassName("hover-a"); //得到所有的a标签
	var Jnavmenu = document.getElementById("J-navmenu");
	var flag = true
	var isOpacity;
	for(let i=0;i<nav_content.length;i++){
		nav_content[i].addEventListener('mouseenter',function(){
			Jnavmenu.style.height='230px';
			Jnavmenu.style.opacity='1';
			Jnavmenu.style.visibility='visible'
/* 			isOpacity = Jnavmenu.style.opacity;
			if(isOpacity==1){
				setTimeout(function(){Jnavmenu.style.display='block'},500)
			} */
		})
	}

	Jnavmenu.addEventListener('mouseleave',function(event){
		Jnavmenu.style.height='0px';
		Jnavmenu.style.opacity='0';
		Jnavmenu.style.visibility='hidden'
		flag_str = null;
/* 		isOpacity = Jnavmenu.style.opacity;
		if(isOpacity==0){
			setTimeout(function(){Jnavmenu.style.display='none'},800)
		} */
	})
}
showNavmenu();
/* ============================================================================================ */

/* left-ul 左侧 导航条 当鼠标进入li时弹出div */
// var leftUlLis =document.getElementById("leftNavUl");
// var hoverDiv = document.getElementsByClassName("hover-div");
// var leftLis = leftUlLis.children;
// var isEnter;
// var flag = 0;
// //鼠标进入显示
// function showLeftDiv(){
// 	for(let i=0;i<leftLis.length;i++){
// 		leftLis[i].onmouseenter = function(){
// 			flag = 0;
			
// 			hoverDiv[0].style.display = 'block';
// 		}
// 	}
// }

// //鼠标滑出隐藏
// function hiddenLeftDive(){
	
// 	for(let i =0;i<leftLis.length;i++){
// 		leftLis[i].onmouseleave = function(){
// /* 			if(isEnter==1){
// 				console.log(isEnter)
// 				hoverDivLeaveFun();
// 				flag = 1;
// 			}else if(flag==0){
// 				//isEnter = 0;
// 				hoverDiv[0].style.display = 'none';
// 			} */
// 			switch(isEnter){
// 				case 1:
// 					console.log(isEnter)
// 					hoverDivLeaveFun();
// 					break;
// 				default:
// 					hoverDiv[0].style.display = 'none';
// 			}
// 		}
// 	}
// }
// //鼠标进入hoverDiv的事件

// function hoverDivFun(){
// 	hoverDiv[0].onmouseenter = function(){
// 		isEnter = 1;
// 	}
// }

// function hoverDivLeaveFun(){
// 	hoverDiv[0].onmouseleave = function(){
// 		hoverDiv[0].style.display = 'none';
// 	}
// }

// showLeftDiv();
// hoverDivFun();
// hiddenLeftDive();

/* =================================轮播图================================================ */
var index =0;
var listImg = ['../img/swiper1.jpg','../img/swiper2.webp','../img/swiper3.webp','../img/swiper4.webp'];
var swiperImgUl = document.getElementById("swiperImgUl");
//获取所有li
var ali = swiperImgUl.children;
function swiperFun(){
	for(let value in listImg){
		swiperImgUl.innerHTML +="<li><a href='javascript:;'><img src='"+listImg[value]+"'></a></li>";
	}
	
}
swiperFun();

//轮播
ali[0].style.opacity = 1;
var timer;
function radioFun(){
	timer = setInterval(function(){
		cancelActive();
		ali[index].className='active';
		ali[index].style.opacity = 1;
		showDot(index);
		index++;
		if(index>=ali.length){
			index = 0;
		}
	},5000)
}
radioFun();
//取消active
function cancelActive(){
	for(let i=0;i<ali.length;i++){
		ali[i].className='';
		ali[i].style.opacity = 0;
	}
}

//点击向左按钮时index减1
var changeImgButLeft = document.getElementsByClassName("changeImgBut-left");
var changeImgButRight=document.getElementsByClassName("changeImgBut-right");
changeImgButLeft[0].onclick = function(){
	////////////////////////////////
	clearInterval(timer);
	cancelActive();
	if(index>0){
		index = index - 1;
		ali[index].className='active';
		ali[index].style.opacity = 1;
		showDot(index);
	}else{
		index = ali.length-1;
		ali[index].className='active';
		ali[index].style.opacity = 1;
		showDot(index);
	}
	radioFun();
	//////////////////////////////

} 

//点击向右按钮时index加1
changeImgButRight[0].onclick = function(){
	clearInterval(timer);
	cancelActive();
	index +=1;
	if(index>ali.length-1){
		index = 0;
	}
	ali[index].className='active';
	ali[index].style.opacity = 1;
	showDot(index);
	radioFun();
}

//轮播图上的圆点导航
var dotDiv = document.getElementsByClassName("dot-div"); // 圆点的父标签
//循环有多少张图片就创建多少个圆点
for(let i in listImg){
	dotDiv[0].innerHTML += '<a href="javascript:;"></a>'
}

var dot  = dotDiv[0].children; //圆点

//取消所有选中的圆点
function cancelDotSelect(){
	for(let i = 0;i<dot.length;i++){
		dot[i].style.backgroundColor = '#4D4D50'
	}
}

function showDot(i){
	cancelDotSelect();
	dot[i].style.backgroundColor = '#D1D1FB';
}

/* ================================================================== */

/* 首页内容图片轮播 */

var butleft = document.getElementsByClassName("buttonleft");//向左
var butright = document.getElementsByClassName("buttonright");//向右

var swiperulpcopy = document.getElementsByClassName("swiperulp-copy");//内容轮播
var toleftvalue=0


//点击向左时ul向左边移动265像素
butleft[0].onclick = function(){
	toleftvalue += -265;
	swiperulpcopy[0].style.left = toleftvalue+'px'; 
}

//点击向左时ul向右边移动265像素
butright[0].onclick = function(){
	toleftvalue += 265;
	swiperulpcopy[0].style.left = toleftvalue+'px'; 
}


//回到顶部
var toTop = document.getElementsByClassName('toTop');
var timer;
toTop[0].onclick = function(){
	//document.body.scrollTop = document.documentElement.scrollTop = 0;
	timer = requestAnimationFrame(function fn(){
		var top =document.body.scrollTop || document.documentElement.scrollTop ;
		if(top > 0){
			document.body.scrollTop = document.documentElement.scrollTop = top - 50;
			timer = requestAnimationFrame(fn);
		}else{
			cancelAnimationFrame(timer);
		}
	})
	//timer;
}

//鼠标进入改变图标
var hver = document.getElementsByClassName("hover");
var hoveractive = document.getElementsByClassName("hoveractive");
var toTop = document.getElementsByClassName("toTop");

toTop[0].onmouseenter = function(){
	hver[0].style.display='none';
	hoveractive[0].style.display='block';
}
toTop[0].onmouseleave = function(){
	hoveractive[0].style.display='none';
	hver[0].style.display='block';
}
