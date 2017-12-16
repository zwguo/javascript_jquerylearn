var elUsername = document.getElementById('username');
function checkUsername(minlength){
	var elMsg = document.getElementById('feeback');
	if(elUsername.value.length < minlength){
		elMsg.textContent = 'Username must be 5 characters or more';
	} else{
		elMsg.textContent = '';
	}
}
var d = checkUsername;
elUsername.addEventListener('blur', function(){
	checkUsername(5);
}, false);