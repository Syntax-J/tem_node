const express=require('express');
const mysql=require('mysql');
const common=require('../libs/common.js');

var db=mysql.createPool({host:'127.0.0.1',user:'root',password:'123456',database:'2018',multipleStatements: true});
module.exports=function () {
	var router=express.Router();

	router.use((req,res,next)=>{
		if(!req.session['admin_id']&& req.url!='/login'){
			res.redirect('/admin/login');
		}else{
			next();
		}
	})
	router.get('/login',(req,res)=>{
		res.render('signin.ejs');
	})
	router.post('/login',(req,res)=>{
		var username=req.body.username;
		var password=common.md5(req.body.password+common.MD5_SUFFIX);

		db.query(`SELECT * FROM admin_table WHERE username='${username}'`,
		(err,data)=>{
			if(err){
				res.status(500).send('database error').end();
			}else{
				if (data.length==0) {
					res.status(400).send('account error').end();
				}else{
					if (data[0].password==password) {
						var date=new Date();
						var str=(`${date.getFullYear()}年${date.getMonth()+1}月${date.getDate()}日${date.getHours()}时${date.getMinutes()}分${date.getSeconds()}秒`);
							db.query(`INSERT INTO admin_log(User,Time) VALUES ('${req.body.username}','${str}')`,
							(err,data)=>{

							});						
						req.session['admin_id']=data[0].ID;
						res.redirect('/admin/');
					}else{
						res.status(400).send('password error').end();
					}
					
				}
			}
		});
	})	
	router.get('/',(req,res)=>{
		db.query(`SELECT max_tem,min_tem,max_hum,min_hum FROM aba_a1;
				  SELECT max_tem,min_tem,max_hum,min_hum FROM aba_b;
				  SELECT max_tem,min_tem,max_hum,min_hum FROM aba_a2;
				  SELECT * FROM admin_log`,
		(err,data)=>{
			if(err){
				res.status(500).send('database error').end();
			}else{
				res.render('admin.ejs',{server_data:data});
			}
		});		
	})
	return router;
}