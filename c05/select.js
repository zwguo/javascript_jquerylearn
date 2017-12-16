//backup
var elementsStatic = document.querySelectorAll('li.hot');
//use class name
var elements = document.getElementsByClassName('hot');
if(elements.length > 2){
	elements[2].className = 'cool';
}
//use tag name
var elementsDynamic = document.getElementsByTagName('li');
if(elementsDynamic.length > 3){
	elementsDynamic[3].className = 'red';
}
//use csss selector
var element = document.querySelector('li.hot');
element.className = 'first';
//use select all
elements = document.querySelectorAll('li.hot');
if(elements.length > 0){
	elements[0].className = 'second';
}

//show the dynamic elements
br();
wb("getElement**得到的是动态的会及时反映dom变化：");
for(var i=0; i<elementsDynamic.length; i++){
	wb(i + "-" + elementsDynamic[i].className);
}
//show the static elements
br();
wb("这个存疑：selector得到的是静态的不会及时反映dom变化：");
for(var i=0; i<elementsStatic.length; i++){
	wb(i + "-" + elementsStatic[i].className);
}
br();
document.write('<a href="https://www.baidu.com" id="linkbaidu">baidu</a>');
br();
var elementlink = document.getElementById('linkbaidu');
wb('linkbaidu及前一个元素节点:');
var previousElement = elementlink;
while(previousElement != null){
	wb(previousElement + ":" + previousElement.textContent);
	previousElement = previousElement.previousSibling;
}
