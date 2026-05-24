import express from 'express';
const app = express();

const PORT = 8000;

app.get("/",(req,res)=>{
    res.send("Home Page");
})

app.get("/sessions",(req,res)=>{
    res.send("Session page");
})

app.listen(port, () => {
    console.log(`Server is running on ${PORT}`);
})