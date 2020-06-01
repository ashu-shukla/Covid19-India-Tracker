const express=require('express');
const request=require('request');
const compression = require('compression')
const app=express();
app.set('view engine','ejs');

app.use(compression()); //use compression 
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

app.get('/state/:state',function(req,res){
    var state=req.params.state;
    var url='https://api.covid19india.org/v2/state_district_wise.json';
    request(url,function(error,response,body){
        if(!error&&response.statusCode==200){
            var parsedData=JSON.parse(body);
            // console.log(parsedData);
            res.render('state',{data: parsedData, selectedstate: state});
            console.log('State Displayed!');
        }
    });
});

app.listen(8080,process.env.IP,function(){
    console.log("Tracker Server online!");
});
