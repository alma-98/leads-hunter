import LeadService from "../services/LeadService.js";

const service = new LeadService();

service.create({

  business:"Investment Technology Indonesia",

  category:"Software House",

  email:"alma.budsteddy88@gmail.com",

  phone:"085283397198",

  website:"https://investmenttechnology.is-a.dev",

  address:"Indonesia",

  city:"Jakarta",

  province:"DKI Jakarta",

  rating:5,

  reviews:1

});

console.log(

service.count()

);

console.log(

service.getAll()

);
