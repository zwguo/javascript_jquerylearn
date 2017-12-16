var width = 30;
var shape = {width:40};
function showwidth(){
	document.write(this.width);
	br();
}
showwidth();
shape.showwidth = showwidth;
shape.showwidth();
