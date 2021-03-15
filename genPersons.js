const mongoose = require("mongoose");
const faker = require("faker");
const Persons = require("./model/personSchema");
const SanJose = require("./data.json");

const run = async () => {
  await mongoose.connect("mongodb://localhost:27017/person2", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  let i = 1; 
  SanJose.map(async (v) => {
    console.log(v.name, i);
    Persons.create({
      id: i++,
      name: v.name,
      email: faker.internet.email(),
      phone: v.phone,
      age: faker.random.number(100),
      website: v.website,
      address: {
        address_line_1: v.address_line_1,
        address_line_2: v.address_line_2,
        city: v.city,
        state: v.state,
        zipcode: v.zipcode,
        lat: v.lat,
        lng: v.lng,
      },
    });
  });
};

run();
