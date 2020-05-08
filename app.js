const express=require('express');
const request=require('request');
const app=express();
app.set('view engine','ejs');
app.use(express.static("public"));

app.get('/',function(req,res){
    var url='https://api.covid19india.org/data.json';
    request(url,function(error,response,body){
        if(!error&&response.statusCode==200){
            var parsedData=JSON.parse(body);
            res.render('index',{data: parsedData});
            console.log('Tracker Displayed!');
        }
    });
});
app.listen(process.env.PORT,process.env.IP,function(){
    console.log("Tracker Server online!");
});
