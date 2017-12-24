第9章 api p399
9.1、地址位置
HTML5有一些新特性，但不是所有浏览器都支持：
	navigator.geolocation，可以获取用户的所在位置；
	localStorage，本地存储；
	sessionStorage，会话存储；
	history，浏览器历史记录中的条目。
可以用modernizr来检测。
9.2、浏览器会为每个域的存储对象分配5M的数据空间
如果超过浏览器会提示用户是否同意存储更多信息。因为浏览器采取同源策略，也就是说只有位于相同域中的其他页面才能访问这些数据：
http://www.google.com:80
http：协议必须相同；
www.google.com：子域名和域名必须相同，比如maps.google.com和www.google.com就不是同一个域名；
80：端口号必须相同。
9.3、存储对象会以同步的方式进行
window.localStorage.setItem('age', '12');
var age = window.localStorage.getItem('age');
本地存储可以在关闭浏览器后依然存在，而会话存储适合于经常更改，且私密不应该别设备上其他用户看到的内容。
9.4、受限于同源策略，本地无法调试
tomcat太麻烦了，没试。
http://javascriptbook.com/code/c09/history.html

$(function() {                                  // DOM has loaded
  function loadContent(url){                    // Load new content into page
    $('#content').load(url + ' #container').hide().fadeIn('slow');
  }

  $('nav a').on('click', function(e) {          // Click handler 
    e.preventDefault();                         // Stop link loading new page
    var href = this.href;                       // Get href attribute of link
    var $this = $(this);                        // Store link in jQuery object
    $('a').removeClass('current');              // Remove current from links
    $this.addClass('current');                  // Update current link
    loadContent(href);                          // Call function: loads content
    history.pushState('', $this.text, href);    // Update history
  });

  window.onpopstate = function() {              // Handle back/forward buttons
    var path = location.pathname;               // Get file path
    loadContent(path);                          // Call function to load page
    var page = path.substring(location.pathname.lastIndexOf('/')+1);
    $('a').removeClass('current');              // Remove current from links
    $('[href="' + page + '"]').addClass('current'); // Update current link
  };
});
9.5、jquery-ui很简单
9.6、AngularJs vs React vs Vue
http://www.yyyweb.com/4600.html
