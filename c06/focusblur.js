var elUsername = document.getElementById('username');
var elMsg = document.getElementById('feeback');
function checkUsername(){
	if(this.value.length < 5){
		elMsg.textContent = 'Not long enough, yet...';
	} else{
		elMsg.textContent = '';
	}
}
function tipUsername(){
	elMsg.textContent = 'Username must be 5 characters or more';
}
elUsername.addEventListener('focus', tipUsername, false);
elUsername.addEventListener('blur', checkUsername, false);