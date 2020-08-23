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
var timer;
function radioFun(){
	timer = setInterval(function(){
		cancelActive();
		ali[index].className='active';
		index++;
		if(index>=ali.length){
			index = 0;
		}
	},3000)
}
radioFun();
//取消active
function cancelActive(){
	for(let i in ali){
		ali[i].className='';
	}
}

//点击向左按钮时index加1
var changeImgButLeft = document.getElementsByClassName("changeImgBut-left");

changeImgButLeft[0].onclick = function(){
	clearInterval(timer);
	cancelActive();
	index +=1;
	if(index>=ali.length-1){
		index = 0;
	}
	ali[index].className='active';
	radioFun();
} 

//点击向右按钮时index减1
var changeImgButRight=document.getElementsByClassName("changeImgBut-right");

changeImgButRight[0].onclick = function(){
	clearInterval(timer);
	cancelActive();
	if(index>0){
		index = index - 1;
		ali[index].className='active';
	}else{
		index = ali.length-1;
		ali[index].className='active';
	}
	radioFun();
}

/* ================================================================== */

