var hotel = {
	name : "Quary",
	rooms : 40,
	booked : 25,
	checkAvailability: function(){
		return this.rooms - this.booked;
	}	
};

hotel.rooms = 30;
document.write(hotel.checkAvailability());
document.write("<br/>");
document.write(hotel.name + " booked " + hotel['booked']);
document.write("<br/>");