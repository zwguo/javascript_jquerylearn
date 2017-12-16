$(function(){
	var h1 = $('#h1');
	$('#h1 ul').hide();
	h1.append('<a>SHOW</a>');
	h1.on('click', function(){
		$('#s1').next().fadeIn(500).children('.hot').addClass('.complete');
		h1.find('a').fadeOut();
	});
	//在选取结果中添加或过滤元素
	var listItems = $('li');
	listItems.filter('.hot:last').removeClass('hot');
	$('li:not(.hot)').addClass('complete');
	listItems.has('em').addClass('headline');
	listItems.each(function(){
		var t = $(this);
		if(t.is('.hot')){
			t.prepend('Priority item: ');
		}
	});
	$('li:contains("Four")').append('(local)');
});