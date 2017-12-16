var itemTwo = document.getElementById('two');
var elText = itemTwo.firstChild.nodeValue;
elText = elText.replace('pine nuts', 'kale');
itemTwo.firstChild.nodeValue = elText;

var innerHTML = document.getElementById('one').innerHTML;
var innerText = document.getElementById('one').innerText;
var txtContent = document.getElementById('one').textContent;
var nodeValue = document.getElementById('one').nodeValue;
wb('document.getElementById("one").innerHTML:' + innerHTML);
wb('document.getElementById("one").innerText:' + innerText);
wb('document.getElementById("one").textContent:' + txtContent);
wb('document.getElementById("one").nodeValue:' + nodeValue);

document.getElementById('one').textContent = "<em>BLACK</em> MAN";
document.getElementById('two').innerHTML = "<em>BLACK</em> MAN <a href='http://www.baidu.com'>baidu</a>";

var newEl = document.createElement('li');
var newText = document.createTextNode('quinoa');
newEl.appendChild(newText);
var position = document.getElementsByTagName('ul')[0];
position.appendChild(newEl);

var removeEl = document.getElementsByTagName('li')[3];
var containerEl = removeEl.parentNode;
containerEl.removeChild(removeEl);