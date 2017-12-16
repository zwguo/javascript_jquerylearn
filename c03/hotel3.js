function Hotel(name, rooms, booked){
	this.name = name;
	this.rooms = rooms;
	this.booked = booked;
	this.checkAvailability = function(){
		return this.rooms - this.booked;
	};
}

var hotel1 = Hotel('a', 20, 10);
var hotel2 = new Hotel('b', 30, 5);
document.write("hotel1:" + hotel1);
document.write("<br/>");
document.write("hotel2:" + hotel2);
document.write("<br/>");
// document.write("hotel1-name:" + hotel1.name + " has " + hotel1.checkAvailability());
document.write("<br/>");
document.write("hotel2-name:" + hotel2.name + " has " + hotel2.checkAvailability());
document.write("<br/>");