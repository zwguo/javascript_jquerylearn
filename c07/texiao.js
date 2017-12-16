//$("#s1").hide().slideDown(3000);
console.log('等待2秒-淡出');
$("#s1").delay(2000).fadeOut();
$('#s1').delay(2200).fadeIn();
$('li').on('click', function(){
	$(this).animate({
		opacity: 0.0,
		paddingLeft: '+=80'
	}, 5000, function(){
		$(this).remove();
	});
});