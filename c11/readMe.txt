第11章 内容面板 p476
11.1、折叠面板
accordion.html
11.2、选项卡面板
tab.html
11.3、模式窗口
modal-window.html
11.4、照片查看器
c11/photo-viewer.html
其中涉及两种技术：
	异步加载图片：当用户连续点击两张图片后，如果第一张图片加载慢，则等其加载完成，会把第二张图片也冲掉的，故需要记录当前的点击图片；
	缓存图片：当用户回过头来查看之前点击过的图片时，不希望再次记载，故缓存下。
11.5、轮播图
c11/slider.html
11.6、创建jQuery插件
$.fn.getS = function(){ console.log(this.attr('id')); return this;}
ƒ (){ console.log(this.attr('id')); return this;}
$('#photo-viewer').getS()
VM2917:1 photo-viewer

立即调用函数表达式（IIFE）可以用来保留作用域和阻止命名冲突。

另外想到一点：
	window.load = function()...
	$(function(){}...)
