第8章 Ajax与JSON 2017-12-17 10：22
8.1、概念
数据通常会以JavaScript对象表示法（JavaScript Object Notation，JSON）的格式进行发送。
Ajax：
	Ajax允许从服务器请求数据，并加载数据并不需要刷新整个页面。
数据格式：
	服务器通常能返回HTML、XML或JSON。
jQuery与Ajax：
	jQuery简化了创建Ajax请求和处理服务器返回数据的过程。
8.2、Ajax
原指Asynchronous JavaScript And XML，后指一系列在浏览器中提供异步功能的技术。
有很多应用场景，比如实时搜索、自动完成，实时信息刷新，网上加入购物车，注册时检测用户名等等。
当浏览器发现<script>标签时，它通常会停止处理页面的其余部分，直到这段脚本被加载并处理完毕，这便是同步处理模型。
使用Ajax，浏览器可以向服务器请求一些数据，并且一旦数据请求发出，就可以继续加载页面，处理用户与页面间的交互，这便是异步（或称非阻塞）处理模型。
8.3、处理Ajax请求及响应
浏览器会使用XMLHttpRequest对象来创建Ajax请求，服务器响应请求后，浏览器用同一个XMLHttpRequest对象来继续处理返回的结果。
8.4、JSON
JSON.stringify方法可以将对象转成字符串，反之JSON.parse也可以转回来：
var a = {'name':1, "id":"ids1"};
undefined
a
{name: 1, id: "ids1"}
JSON.stringify(a)
"{"name":1,"id":"ids1"}"
var b = JSON.stringify(a);
undefined
JSON.parse(b)
{name: 1, id: "ids1"}
JSON.parse(b) == a
false
8.5、Node与Element的区别
http://www.cnblogs.com/jscode/archive/2012/09/04/2670819.html
8.6、使用Ajax加载XML
如果服务器返回的是XML，则可以用xhr.responseXML接收，它本身就是一个对象，可以使用DOM的方法查找，比如：respose.getElementsByTagName('event')来查找所有的<event></event>元素。
而json则使用xhr.responseText来接收，用JSON.parse()来转成JSON对象。