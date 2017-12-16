var el = document.getElementById('lastKey');
var labelcount = document.getElementById('labelcount');
var labellastCode = document.getElementById('labellastCode');
el.addEventListener('input', function(){
	labelcount.textContent = el.value.length;
}, false);
el.addEventListener('keypress', function(e){
	labelcount.textContent = el.value.length;
	labellastCode.textContent = e.keyCode;
}, false);
el.addEventListener('keydown', function(e){
	console.log("keydown:"+ e.keyCode);
}, false);
el.addEventListener('keyup', function(e){
	console.log("keyup:"+ e.keyCode);
}, false);