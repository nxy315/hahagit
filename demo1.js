// JavaScript Document


window.onload=function(){
	var oDiv=document.getElementById('div1');
	oDiv.onclick=function(){
		alert('ok');
		return 'good';
	};
};


function setColor(obj,attr){
	return obj.currentStyle[attr];
}