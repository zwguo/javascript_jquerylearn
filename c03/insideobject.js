document.write("三组内置对象p112");
br();
document.write("document.lastModified:" + document.lastModified);
br();
window.print("应该会弹出一个打印对话框");
document.write("宽度：" + window.screen.width);
br();
document.write("this:" + this);
br();
document.write("window.screenX:" + window.screenX + ",windows.screenY:" + window.screenY);
br();
document.write("window.innerHeight:" + window.innerHeight + ",windows.innerWidth:" + window.innerWidth);
br();
window.alert("竟然先于print窗口出来！你必须点击OK");
window.open("http://www.baidu.com");
br();
br();
var msg = '<p><b>page title:</b>'+ document.title + '<br />'
+ '<b>page address:</b>'+ document.URL + '<br />'
+ '<b>last modified:</b>'+ document.lastModified +'<br />'
+'</p>';
document.write(msg);