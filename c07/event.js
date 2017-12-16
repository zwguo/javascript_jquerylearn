$(function(){
	var ids = '';
	var $listItems = $('li');
	$listItems.on('mouseover click', function(){
		ids = this.id;
		$listItems.children('span').remove();
		$(this).append('<span class="hot">' + ids + '</span>');
	});

	$listItems.on('mouseout', function(){
		$(this).children('span').remove();
	});

	var item = $('#s1');
	for(i=0; i<20; i++){
		item.on('click', function(e){
			var _id = this.id;
			if(_id){
				console.log(_id + "-click-" + e.target.id);
			}
			else{
				console.log(this + "-click-" + e.target.id);
			}
		});
		var _id = item.attr('id');
		if(_id){
			console.log(_id + "-addclick");
		}
		else{
			console.log(item[0] + "-addclick");
		}
		item = item.parent();
		if(item[0] == document){
			break;
		}
	}
});