var ddlist = document.getElementById('choices');
var checkbox = document.getElementById('deal');
var msg = document.getElementById('msg');
var form1 = document.getElementById('form1');
ddlist.addEventListener('change', function(){
	var selectValue = ddlist.options[ddlist.selectedIndex].value;
	if(selectValue == "month"){
		msg.textContent = "YEAR can save $10.";
	} else{
		msg.textContent = "Wise chioce!";
	}
}, false);
form1.addEventListener('submit', function(e){
	if(!checkbox.checked){
		msg.textContent = "you must agree";
		e.preventDefault();
	}
}, false);
