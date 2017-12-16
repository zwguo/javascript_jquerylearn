function setup(){
	var textInput = document.getElementById('username');
	textInput.focus();
}
window.addEventListener('DOMContentLoaded', setup, false);
window.addEventListener('beforeunload', function(event){
	return '你真的要离开吗？';
}, false);