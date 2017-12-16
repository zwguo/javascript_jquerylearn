var isMaopao = false;
var paras = document.location.href.split("?")[1].split("=");
if(paras.length > 2){
	if(paras.indexOf('true')){
		isMaopao = true;
	}
}
var el = document.getElementById('somea');
var index = 0;
function showmsg(){
	console.log("--------"+ ++index +"---------");
	console.log(this);
	console.log("-----------------");
}
while(el != null){
	//最后一个参数，false：冒泡方式，true：捕获方式
	el.addEventListener('click', showmsg, !isMaopao);
	el = el.parentNode;
}