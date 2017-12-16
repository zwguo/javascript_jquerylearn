//选中所有<h1>到<h6>标头，然后添加headline的css属性
$(':header').addClass('headline');
//选中前3个li列表项，并做如下两件事情：1、隐藏这些元素；2、将这些元素淡入显示到视图中。
$('li:lt(3)').hide().fadeIn(1500);
//添加一个事件监听器，当用户点击其中一个列表项时，会触发一个匿名函数，将这个元素从页面移除。
$('li').on('click', function(){
	$(this).remove();
	console.log($(this) + " removed")
});
$('li').on('click', function(){
	console.log($(this) + "clicked")
});
(function(){
	console.log('ok');
})()
$(document).ready(function(){
	console.log('document.ready');
});
$(function(){
	console.log('$(function(){})')
	console.log('html方法返回第一个匹配元素及其子代的内容，而text方法返回所有的文本');
	console.log('$(\'li\').html():' + $('li').html());
	var textCatch = $('ul').text();
	console.log('$(\'ul\').text(),type:' + typeof(textCatch) + ",value:" + textCatch);
	console.log('html setter方法会设置每个匹配元素的内容，text setter方法也会设置所有内容，但是是纯文本');
	//$('li').html('<h2>Good!</h2>');
	//$('li').text('<h3>Good2!</h3>');
	$('li').html(function(){
		var a = '<div>' + $(this).text() + '</div>';
		console.log(a);
		return a;
	});
	$('li:contains("mic")').text('mic is replaced');
	console.log('before:前，after:后，prepend:内容前，append:内容后');
	$('#id1').before('<div id="id0">$(\'ul\').before</div>');
	$('#id0').prepend('<h1>Text:</h1>');
	$('#id1').append(' append text.');
});


