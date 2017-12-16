var el = document.getElementById('somea');
var index = 0;
function showmsg(elment, e){
	console.log("--------"+ ++index +"---------");
	console.log(elment);
	console.log("-----------------");
	console.log(e);
	console.log("-----------------");
	console.log("e.target:" + e.target);
	console.log("e.type:" + e.type);
	console.log("e.cancelable:" + e.cancelable);
	console.log("e.preventDefault():" + e.preventDefault());
	//阻止了冒泡或捕获事件流
	console.log("e.stopPropagation():" + e.stopPropagation());
}
el.addEventListener('click', function(e){
	showmsg(this, e);
}, false);
el.parentNode.addEventListener('click', function(e){
	showmsg(this, e);
}, false);