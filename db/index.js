const mongoose = require("mongoose");
const Machine = require("../models/Machine");
const User = require("../models/User");

const db = {};

db.mongoose = mongoose;
db.user = require("../models/User");
db.role = require("../models/Machine");

db.EITS = [
  new User({ fullName: "Lewis Amoakwa" }),
  new User({ fullName: "Chidera Okeke" }),
  new User({ fullName: "Amoro Bagei" }),
  new User({ fullName: "Daniella Darlington" }),
  new User({ fullName: "Miriam Wamey" }),
  new User({ fullName: "Caroline Enyonam Kpogo" }),
  new User({ fullName: "Benedicta Fremah Boamah" }),
  new User({ fullName: "Yaw Antwi Owusu" }),
  new User({ fullName: "Caleb Mensa-Bonsu" }),
  new User({ fullName: "Timothy Afrane Wuo-Asare" }),
  new User({ fullName: "Caleb Lamptey" }),
  new User({ fullName: "Emmanuel Arkorful" }),
  new User({ fullName: "Kelvin Bariche" }),
  new User({ fullName: "Elias Konado Bansi" }),
  new User({ fullName: "Paul Amedzrator" }),
  new User({ fullName: "Veronique Abakar" }),
  new User({ fullName: "Kingsley Boakey" }),
  new User({ fullName: "Papa Emissah Kuofie" }),
  new User({ fullName: "Clement Amoasi" }),
  new User({ fullName: "Samuel Setsofia" }),
  new User({ fullName: "Alfred Sosu" }),
  new User({ fullName: "Mushrafat Abdulrahaman" }),
  new User({ fullName: "Abdul Bah" }),
  new User({ fullName: "Philip Frempong" }),
  new User({ fullName: "Alex Boateng" }),
  new User({ fullName: "Kohol Lornav" }),
  new User({ fullName: "Michael Akinneke" }),
  new User({ fullName: "Abdulazeez Abu" }),
  new User({ fullName: "Oluwafunmilayo Olumoko" }),
  new User({ fullName: "Adesola Olalekan" }),
  new User({ fullName: "Agatha Ambrose" }),
  new User({ fullName: "Somto Chike-Nwaka" }),
  new User({ fullName: "Mary Okwong" }),
  new User({ fullName: "Wemimo Olapade" }),
  new User({ fullName: "Joyful U John" }),
  new User({ fullName: "Odafe Aror" }),
  new User({ fullName: "Dafe Odje" }),
  new User({ fullName: "Sogo Ayenigba" }),
  new User({ fullName: "Adegboyega Jaiyeola" }),
  new User({ fullName: "Uchechi Eziashi" }),
  new User({ fullName: "Malik Kolade" }),
  new User({ fullName: "Amen Oluwaseun Olabode" }),
  new User({ fullName: "Arthur Iniubong" }),
  new User({ fullName: "Emmanuel Ozi-yusuf" }),
  new User({ fullName: "Johnson Ojo" }),
  new User({ fullName: "Ephraim Oghene" }),
  new User({ fullName: "Aminu Ibrahim Hashim" }),
  new User({ fullName: "Bethel Melariri" }),
  new User({ fullName: "Gbemisola Takuro" }),
  new User({ fullName: "Pius Ikeoffiah" }),
  new User({ fullName: "Francis Babalola" }),
];

db.machines = [
  new Machine({
    id: 1,
    status: true,
    remainingTime: 0,
    user: "Bethel Melariri",
  }),
  new Machine({
    id: 2,
    status: false,
    remainingTime: 59,
    user: "Francis Babalola",
  }),
  new Machine({
    id: 3,
    status: false,
    remainingTime: 30,
    user: "Malik Kolade",
  }),
];

module.exports = db;
