import express from 'express'
import connectdb from './db.js';
import expenserouter from "./routes/expenseroute.js"
import cors from "cors"
const app=express();
app.use(express.json())
app.use(cors())
connectdb();
app.use("/api/expense",expenserouter);

const PORT=7777;
app.listen(PORT,()=>{

    console.log(`server is running on PORT : ${PORT}`);
    
})