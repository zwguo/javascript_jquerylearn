//IE9开始支持
var xhr = new XMLHttpRequest();
xhr.onload = function(){
	if(xhr.status == 200){
		docuement.getElementById('res').innerText = xhr.responseText;
	}
	else{
		docuement.getElementById('res').innerText = "ERROR:" + xhr.status;
	}
}
xhr.open('GET', '', true);
xhr.send();