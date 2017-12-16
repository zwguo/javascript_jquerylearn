var a = '3';
var b = 3;
wb("a:" + a + ",type:" + typeof(a));
wb("b:" + b + ",type:" + typeof(b));
wb("a == b:" + (a == b));
wb("a != b:" + (a != b));
wb("a === b:" + (a === b));
wb("a !== b:" + (a !== b));
br();
var level = 2;
var msg = '';
switch(level){
	case 1:
		msg = "this is one;"
		break;
	case 2:
		msg = "this is two;"
		break;
	default :
		msg = "this is another value;"
		break;
}
wb("switch case level:" + level + ",result:" + msg);
br();

level = '2';
msg = '';
switch(level){
	case 1:
		msg = "this is one;"
		break;
	case '2':
		msg = "this is two;"
		break;
	default :
		msg = "this is another value;"
		break;
}
wb("switch case level:" + level + ",result:" + msg + ",action:switch-case is the 严格等于");
if('1' > 0){
	wb("'1' > 0: true");
} else {
	wb("'1' > 0: false");
}
wb('ten'/2);
br();

wb('真假：');
var aa;
if(!aa){
	wb("aa未赋值是假");
}
var bb = '';
if(!bb){
	wb("bb是空串是假");
}
bb = 0;
if(bb){
	wb("bb=数字0是假");
}
if(!null){
	wb("null是假");
}
if(!undefined){
	wb("undefined是假");
}
bb = 10/'string';
if(!bb){
	wb("NaN是假");
}
bb = 'false';
if(bb){
	wb("b不是空串是真");
}
var cc = [];
if(cc){
	wb("数组是真");
}
var dd = {};
if(dd){
	wb("对象是真");
}


var a1 = '1';
var a1 = '2';
wb("重复定义两个同名变量，结果a1：" + a1);
br();

if(false == 0 && 0 == false 
	&& false == '' && '' == false
	&& '' == 0 && 0 == ''){
	wb("false 0 '' 是相等的");
}
if(undefined == undefined && null == null && undefined == null && null == undefined){
	wb("undefined null 是自身及相互相等的");
}
if(undefined != false && null != false){
	wb("undefined null 和false是不等的");
}
if(undefined != 0 && null != 0){
	wb("undefined null 和0是不等的");
}
if(undefined != '' && null != ''){
	wb("undefined null 和''是不等的");
}
if(NaN != NaN){
	wb("NaN和自身都不相等");
}
br();

if(!document.getElementById('header')){
	wb("document.getElementById('header') 是假值");
}
if(document.getElementById('header') != false){
	wb("但document.getElementById('header') 并不等于false");
}
br();

var artist = 'artist';
var artistA = (artist || 'Unkown');
wb('artistA:' + artistA);
artist = '';
artistA = (artist || 'Unkown');
wb('artistA:' + artistA);
artistA = (artist || {});
wb('artistA:' + artistA);
br();

wb("for:");
for(var k =0; k<10; k++){
	document.write(k + " ");
}
br();
wb("while:");
var k = 0;
while(k < 10){
	document.write(k + " ");
	k++;
}
br();
wb("do-while:");
k = 0;
do{
	document.write(k + " ");
	k++;
} while(k < 10)
br();


