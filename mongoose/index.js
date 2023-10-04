const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
const port = 5000;

//connect to mongoose
mongoose.connect("mongodb://localhost:27017/PersonDB",{useNewUrlParser: true});



const personSchema = new mongoose.Schema({
name: {type: String,required: true},
age: {type:Number},
favoriteFoods:
{type:[String]}
});

const Person = mongoose.model("Person", personSchema);

async function test(){
const person = new Person ({
    name: "Damilare",
    age: 25,
    favoriteFoods:["amala","rice","porriage"]
})

 await person.save().then(() => console.log("Person Saved"));
}
//creating array of people

const arrayOfPeople = [
    {name: "Damilare", age: 20, favoriteFoods: ["Beans"]},
    {name: "Funsho",age:30, favoriteFoods: ["shawama"]},
    {name: "Benson",age:35, favoriteFoods: ["suya"]},
    {name: "Mary",age:27, favoriteFoods: ["Rice"]}
];

Person.create(arrayOfPeople,function(err,people){
    if (err){
        console.log(err);
    }else{
        console.log("People created", people);}
})
  
// finding your documents

Person.findOne({favoriteFoods: "Beans"},function(err, person){
    if(err){
        console.error(err);
    }else{console.log("Person who loves Beans", person);}
})






mongoose.connect("mongodb://localhost:27017/PersonDB")
.then(() => console.log("Connected."))
.catch((error) => console.log(`Error
connecting to MongoDB ${error}`));


app.listen(port,() =>{
    console.log(`server running on port ${port}`);
})
