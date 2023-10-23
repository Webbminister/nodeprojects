import express, { json } from "express";
const app = express();
import cors from "cors";
import 'dotenv/config'
import mongoose from "mongoose";
// import router from "./routers/profile"
const profileRoutes=require('./routers/profile')
app.use(cors());
app.use(json());
const port = process.env.PORT || 5001;

app.use('/',profileRoutes)
// app.get('/User', (req, res) => {
//     res.send();
// })

// app.post('/User',async(req,res)=> {
//   // console.log(req.body);
//   try{
//   const user = await user.create(req.body)
//   res.status(200).json(user);

//   }catch (error){
//       console.log(error.message);
//       res.status(500).json({message: error.message})
//   }
// })

// app.put('/',(req,res)=> {
//   res.send()
// })
// app.delete('/',(req,res)=> {
//   res.send()
// })

// console.log(process.env)
mongoose.connect(process.env.APP_DB_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(() =>{
    console.log("Connected to MongoDB");
    app.listen(port, () => {
        console.log(` Server started on port ${port}`)
      })
})
.catch((error) =>{
    console.error("Error connecting to MongoDB:",error);
});