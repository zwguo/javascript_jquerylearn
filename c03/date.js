wb("Date对象 p126");
var today = new Date();
wb("today:" + today);
wb("today.getDate():" + today.getDate());
wb("星期几（0-6）today.getDay():" + today.getDay());
wb("today.getFullYear():" + today.getFullYear());
wb("today.getHours():" + today.getHours());
wb("today.getMilliseconds():" + today.getMilliseconds());
wb("today.getMinutes():" + today.getMinutes());
wb("月份（0-11）today.getMonth():" + today.getMonth());
wb("today.getSeconds():" + today.getSeconds());
wb("today.getTime():" + today.getTime());
wb("当前时区的分钟today.getTimezoneOffset():" + today.getTimezoneOffset());
wb("today.toDateString():" + today.toDateString());
wb("today.toTimeString():" + today.toTimeString());
wb("today.toString():" + today.toString());
var y1900 = new Date(1900, 1, 1);
wb("1900年：" + y1900);
wb("1900年getTime：" + y1900.getTime());
wb("1900年toString：" + y1900.toString());