document.write("数组是对象p108");
costs_object = {
	room1 : 420,
	room2 : 460,
	room3 : 230,
	room4 : 620
};
costs_array = [420, 460, 230, 620];
br();
document.write("costs_object.room1:" + costs_object.room1);
br();
document.write("costs_array[0]:" + costs_array[0]);
costs_object_array = {
	room1 : [420, 40, 10],
	room2 : [460, 20, 20],
	room3 : [230, 0, 0],
	room4 : [620, 150, 60]
}
br();
document.write("costs_object_array.room1[0]:" + costs_object_array.room1[0]);
br();
costs_array_object = [
	{accom:420, food:40, phone:10},
	{accom:460, food:20, phone:20},
	{accom:230, food:0, phone:0},
	{accom:620, food:150, phone:60}
];
document.write("costs_array_object[0].accom:" + costs_array_object[0].accom);
br();