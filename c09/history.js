$(function(){
	function loadContent(url){
		$("#container").load(url + ' #container').hide().fadeIn('slow');
	}

	$('a').on('click', function(e){
		e.preventDefault();
		var href = this.href;
		$('a').removeClass('current');
		$(this).addClass('current');
		loadContent(href);
		history.pushState('jsondata1', $(this).text, href);
	});

	window.onpopstate = function(){
		var path = location.pathname;
		loadContent(path);
		var page = path.subString(location.pathname.lastIndexOf('/') + 1);
		$('a').removeClass('current');
		$('[href="' + page + '""]').addClass('current');
	};
});