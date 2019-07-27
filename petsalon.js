const salon = {
  //object
  name: "Fashion Pets",
  phone: "555-123-4567",
  address: {
    //object inside an object
    street: "5th Avenue",
    number: "25-A"
  },
  workingHours: {
    open: "8:00 am",
    close: "5:00 pm"
  },
  pets: [] //empty array
};

//object destructing
let {
  name,
  phone,
  address: { street, number },
  workingHours: { open, close },
  pets: []
} = salon;

console.log(open);

document.getElementById(
  "info"
).innerHTML = `<h2>${name} (${phone}), ${street} ${number} <br> it is open from ${open} to ${close} </h2>`;

function Pet(name, age, service, ownerName, contactPhone) {
  this.hunger = 10;
  this.happiness = 5;
  this.name = name;
  this.age = age;
  this.ownerName = ownerName;
  this.contactPhone = contactPhone;
  this.service = service;
  this.feed = function() {
    this.hunger -= 10;
    this.happiness += 10;
  };
  this.status = function() {
    console.log(
      this.name + "hunger: " + this.hunger + "happiness: " + this.happiness
    );
  };
  this.ownerContact = function() {
    console.log(
      "Owner name:" + this.ownerName + "\n" + "Phone: " + this.contactPhone
    );
  };
}

const pet1 = new Pet("Zoey", 2, "shower", "Travis", "855-123-4567");
const pet2 = new Pet("Janis", 2, "haircut", "Sabrina", "555-123-4567");
const pet3 = new Pet("Ozzy", 6, "shower", "Yair", "555-122-2222");

// pet1.feed();
// pet1.status();
// pet1.feed();
// pet1.status();
pet1.ownerContact();
// console.log(pet1);

salon.pets.push(pet1);
salon.pets.push(pet2);
salon.pets.push(pet3);

window.alert(" This Pet salon currently has " + salon.pets.length + " pets ");
// alert or html file
