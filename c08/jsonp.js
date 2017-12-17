function a(content){
	document.getElementById('res').innerText = JSON.stringify(content);
}
document.write('<script src="http://localhost:8080/jslearn-server/jsonp/a"></script>');