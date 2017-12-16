var firstItem = document.getElementById('one');
if(firstItem != null && firstItem.hasAttribute('class')){
	var attr = firstItem.getAttribute('class');
	var el = document.getElementById('scriptResults');
	el.innerHTML = '<p>The first item has a attribute class: ' + attr + '</p>';
}

firstItem.className = 'cool';
var fourthItem = document.getElementsByTagName('li').item(3);
fourthItem.setAttribute('class', 'red');
fourthItem.setAttribute('notexistattribute', 'justtest');
fourthItem.setAttribute('notexistattribute2', 'justtest2');

//尝试移除一个并不存在的属性会引起错误
if(fourthItem.hasAttribute('notexistattribute2')){
	fourthItem.removeAttribute('notexistattribute2');
}