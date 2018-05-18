const express=require('express');
const mysql=require('mysql');
var db=mysql.createPool({host:'127.0.0.1',user:'root',password:'123456',database:'2018'});
module.exports=function () {
	var router=express.Router();
	router.get('/',(req,res)=>{
		db.query("SELECT * FROM table_1",function(err,data){
		 if(err){
		 	res.status(500).send('database error').end();
		 }else{
		 	res.render('index.ejs',{server_data:JSON.stringify(data)});	
		 }
	});	
	})

	return router;
}