import express from 'express';
const app = express();

app.get('/api/name', (req,res)=>{
    res.send("HI HELLO")
})


const port  = process.env.PORT || 5000;

app.listen(port, ()=>{
    console.log(`Server is ready at http://localhost:${port}`)
})  