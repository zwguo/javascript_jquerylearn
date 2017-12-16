var hotel = new Object();
hotel.name = "Park";
hotel.rooms = 50;
hotel.booked = 25;
hotel.checkAvailability = function(){
	return this.rooms - this.booked;
};

hotel.rooms = 30;
document.write(hotel.checkAvailability());
document.write("<br/>");
document.write(hotel.name + " booked " + hotel['booked']);
document.write("<br/>");

var hotel2 = {};
document.write("hotel2:" + hotel2);
document.write("<br/>");
hotel2.name = "can be deleted";
document.write("hotel2:" + hotel2);
document.write("<br/>");
document.write("hotel2.name:" + hotel2.name);
document.write("<br/>");
delete hotel2.name;
document.write("hotel2.name:" + hotel2.name);
document.write("<br/>");