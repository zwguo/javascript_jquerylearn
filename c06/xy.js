var sx = document.getElementById('screenX');
var sy = document.getElementById('screenY');
var px = document.getElementById('pageX');
var py = document.getElementById('pageY');
var cx = document.getElementById('clientX');
var cy = document.getElementById('clientY');

function showPosition(event){
	sx.textContent = event.screenX;
	sy.textContent = event.screenY;
	px.textContent = event.pageX;
	py.textContent = event.pageY;
	cx.textContent = event.clientX;
	cy.textContent = event.clientY;
}

var el = document.getElementById('body');
el.addEventListener('mousemove', showPosition, false);
el.addEventListener('mousedown', function(){
	console.log("-----mousedown------");
}, false);
el.addEventListener('mouseup', function(){
	console.log("mouseup");
}, false);
el.addEventListener('click', function(){
	console.log("-----click------");
}, false);