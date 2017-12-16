function Hotel(name, rooms, booked){
	this.name = name;
	this.rooms = rooms;
	this.booked = booked;
	this.checkAvailability = function(){
		return this.rooms - this.booked;
	};
}

var hotel = {
	name : "Park",
	rooms : 40,
	booked : 30,
	checkAvailability : function(){
		return this.rooms - this.booked;
	}
};

var hotel1 = new Hotel("a", 19, 11);
var hotel2 = new Hotel("b", 190, 110);
document.write(hotel1.name + " has " + hotel1.checkAvailability());br();
document.write(hotel2.name + " has " + hotel2.checkAvailability());br();
document.write(hotel.name + " has " + hotel.checkAvailability());br();
document.write("delete hotel1.name delete hotel.name");
delete hotel1.name;
delete hotel.name;
document.write(hotel1.name + " has " + hotel1.checkAvailability());br();
document.write(hotel2.name + " has " + hotel2.checkAvailability());br();
document.write(hotel.name + " has " + hotel.checkAvailability());br();