var colors;
colors = ['white', 'black', 'custom'];

var el = document.getElementById('colors');
el.textContent = colors[0];

//不推荐使用
colors = new Array('white', 'black', 'custom');
el = document.getElementById('colors');
el.textContent = colors[0];

document.write(colors.length + "<br/>");

document.write("'a' * 'b'=" + ('a' * 'b'));