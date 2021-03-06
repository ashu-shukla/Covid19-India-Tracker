const express=require('express');
const request=require('request');
const compression = require('compression')
const app=express();
app.use(compression());

app.set('view engine','ejs');
app.use(express.static("public"));

app.get('/',function(req,res){
    var url='https://api.covid19india.org/data.json';
    request(url,function(error,response,body){
        if(!error&&response.statusCode==200){
            var parsedData=JSON.parse(body);
            res.render('index',{data: parsedData});
        }
    });
});

app.get('/hospitals',function(req,res){ 
    var url='https://api.rootnet.in/covid19-in/hospitals/beds';
    request(url,function(error,response,body){
        if(!error&&response.statusCode==200){
            var parsedData=JSON.parse(body);
            res.render('hospitals',{data: parsedData});
        }
    });
});

app.get('/state/:state',function(req,res){
    var state=req.params.state;
    var url='https://api.covid19india.org/v2/state_district_wise.json';
    request(url,function(error,response,body){
        if(!error&&response.statusCode==200){
            var parsedData=JSON.parse(body);
            res.render('state',{data: parsedData, selectedstate: state});
        }
    });
});
let PORT = process.env.PORT || 3000;
app.listen(PORT,process.env.IP,function(){
    console.log("Tracker Server online!");
});
