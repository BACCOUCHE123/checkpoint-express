const express =require ('express');
const app =express ();

const checkTime = (req, res, next) => {
    var d=new Date().getDay()
    var h=new Date().getHours()
    if((h >= 9 && h<18) && (d > 0 && d <6)){
        next();
    }else{
        res.send("not found")
    }
}
app.use(checkTime)
app.get('/',(req,res)=>{
   res.sendFile(__dirname +'/views/Home.html');
});
app.get('/OurServices',(req,res)=>{
    res.sendFile(__dirname +'/views/OurServices.html');
 });
 app.get('/Contact-us',(req,res)=>{
    res.sendFile(__dirname +'/views/Contact-us.html');
 });
 app.use(express.static('views'));
app.listen(5000,()=> console.log('server is running'));  
