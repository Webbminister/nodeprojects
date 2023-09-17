import express from "express";
import moment from 'moment';

let today = moment();


const app = express();
const port = 5000;

app.use(express.static("public"))

app.use((req, res,next) =>{
    const now = moment();
    console.log(now);
    if(now.isoWeekday() <= 5 && now.hours() >= 9 && now.hours() < 17){
        console.log("allow access to app");
        next();
    }else{
        res.send("Sorry, the app is only available during working hours (Mon - Fri, 9 AM to 5 PM).");
    }
});

app.get("/",(req,res) =>{
    const date = new Date();
    const year = date.getFullYear();
    const dayOfTheWeek = date.getDay();
    const hour =  date.getHours();
res.render("index.ejs", {dayTime: "a weekend", advice: "work smart", currentYear: year, weekDay: dayOfTheWeek, hour: hour});
})

app.get("/services",(req,res) =>{
    const year = new Date().getFullYear();

    res.render("services.ejs", 
    {dayTime: "a weekday",
     advice: "work smart",
     currentYear: year
    })
    })

    app.get("/contact",(req,res) =>{
        const year = new Date().getFullYear();
        res.render("contact.ejs", {dayTime: "a weekday", advice: "work smart",currentYear: year})
        })


app.listen(port,() => {
    console.log(`server started on port ${port}.`);
})