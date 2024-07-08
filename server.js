import express from 'express'

const app=express()
const PORT=process.env.PORT || 8000

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.get("/",(req,res)=>{
    return res.send("Fuck everyone");
})

//Routes import:
import routes from './Routes/index.js'
app.use(routes);

app.listen(PORT,()=>{
    console.log(`server is listen at port ${PORT}`);
})