第10章 错误处理与调试 p440
10.1、执行上下文
分为全局上下文、函数上下文、eval上下文（隐式的），最后一种不讨论。
作用域也分为全局作用域和函数级作用域。
10.2、提升
Hoisting：提升，可以在函数声明之前就调用该函数。比如：
var greeting = greetUser();
function greetUser(){}
这是因该函数和第一条语句位于同一个执行上下文中，所以它们会被这样解析：
function greetUser(){}
var greeting = greetUser();
10.3、理解作用域
在解释器中，每个执行上下文都包含它自己的variables对象。它保存该执行上下文中的所有变量、函数和参数。每个执行上下文还可以访问其上层的variables对象。注意无法在代码中访问variables对象，它是解释器内部处理的一部分。
10.4、理解错误
异常抛出后，解释器会停止工作，查找异常处理代码。一直向上查找，直到到达全局上下文，此时只能终止脚本执行，并创建一个Error对象。
Error对象有如下属性：
	name：异常类型；
	message：描述；
	fileNumber：JavaScript文件名称；
	lineNumber：错误所在代码行数。
JavaScript有7种内置错误对象，分别是：
	Error：一般错误————其他错误的基础；
	SyntaxError：语法未遵循规范；
	ReferenceError：尝试引用未在作用域内声明的变量；
	TypeError：意外的数据类型，无法进行自动转换；
	RangeError：数字超出了可接受的范围；
	URIError：encodeURI()，decodeURI()以及类似的方法会在出错时使用此类型；
	EvalError：eval()函数会在出错时使用此类型。
10.5、控制台方法
内置控制台的浏览器可以使用控制台对象console，其有如下方法：
	log：日志；
	info：info；
	warn：warn；
	error：error；
	group：分组开始；
	groupEnd：分组结束。
此外还有console.table()可以展示表格：
var contacts = {"London":{"Tel": "+44(0)2079460128","Country":"UK"}, "Sydney":{"Tel":"=64(0)270101212"}};
console.table(contacts);
还有assert可以判断真伪：
console.assert(1!=1, 'not ok');
代码中还可以使用debugger关键字，如果用户打开了调试工具，则会自动触发断点。
10.6、处理异常
可以使用try/catch/finally。
10.7、抛出异常
throw new Error(this.value + ' is not a number!');
10.8、调试小贴士
可以解释代码，给别人或者自己解释；
也可以放到代码演练场中：比如JSBin.com、JSFiddle.com或者Dabblet.com，然后把连接贴给别人。
还有一些流行的游乐场，比如CSSDeck.com和CodePen.com。
检查值是否严格相等（类型也相等），使用===，而不是==。
parseInt('12.34',8)=10，8代表进制。
string.replace('a', '1')只能替换第一个出现的串，如果想全部替换，用正则。