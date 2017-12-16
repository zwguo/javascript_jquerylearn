$(function(){
	var newItemButton = $('#newItemButton');
	var newItemForm = $('#newItemForm');
	var textInput = $('form input:text');

	newItemButton.show();
	newItemForm.hide();

	$('#showForm').on('click', function(){
		newItemButton.hide();
		newItemForm.show();
	});

	newItemForm.on('submit', function(e){
		e.preventDefault();
		var newText = $('form input:text').val();
		$('li:last').after('<li>'+ newText +'</li>');
		newItemForm.hide();
		newItemButton.show();
		textInput.val('');
	});

	var printdiv = $('#printdiv');
	var listHeight = $('ul').height();
	printdiv.text('ul height:' + listHeight);
	$('ul').height('75%');
	console.log(listHeight + " vs " + $('ul').height());
	$('li').width('50%');
	$('li#one').width(125);
	$('li#two').width('75%');
	$('li#three').width('10em');

	var slideAd = $('#slideAd');
	var endZone = $('#footer').offset().top - $(window).height() - 500;

	$(window).on('scroll', function(){
		if(endZone < $(window).scrollTop()){
			slideAd.animate({'right':'0px'}, 250);
		}
		else{
			slideAd.stop(true).animate({'right':'-360px'}, 250);
		}
	});
});