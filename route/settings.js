const express=require('express');
const mysql=require('mysql');
const common=require('../libs/common.js');

var db=mysql.createPool({host:'127.0.0.1',user:'root',password:'123456',database:'2018'});
module.exports=function () {
	var router=express.Router();
	
	router.post('/ttop',(req,res)=>{
		if(req.body.flag==0){
			db.query(`UPDATE ABA_A1 SET max_tem=${req.body.settings}`,
				(err,data)=>{
					if(err){
						res.status(500).send('database error').end();
					}else{
						res.status(200).send('修改成功').end();
					}
				});
		}
		if(req.body.flag==1){
			db.query(`UPDATE ABA_B SET max_tem=${req.body.settings}`,
				(err,data)=>{
					if(err){
						res.status(500).send('database error').end();
					}else{
						res.status(200).send('修改成功').end();
					}
				});
		}
		if(req.body.flag==2){
			db.query(`UPDATE ABA_A2 SET max_tem=${req.body.settings}`,
				(err,data)=>{
					if(err){
						res.status(500).send('database error').end();
					}else{
						res.status(200).send('修改成功').end();
					}
				});
		}
	});
	router.post('/tbom',(req,res)=>{
		if(req.body.flag==0){
			db.query(`UPDATE ABA_A1 SET min_tem=${req.body.settings}`,
			(err,data)=>{
				if(err){
					res.status(500).send('database error').end();
				}else{
					res.status(200).send('修改成功').end();
				}
			});
	    }
		if(req.body.flag==1){
			db.query(`UPDATE ABA_B SET min_tem=${req.body.settings}`,
			(err,data)=>{
				if(err){
					res.status(500).send('database error').end();
				}else{
					res.status(200).send('修改成功').end();
				}
			});
	    }
		if(req.body.flag==2){
			db.query(`UPDATE ABA_A2 SET min_tem=${req.body.settings}`,
			(err,data)=>{
				if(err){
					res.status(500).send('database error').end();
				}else{
					res.status(200).send('修改成功').end();
				}
			});
	    }
	});
	router.post('/htop',(req,res)=>{
		if(req.body.flag==0){
			db.query(`UPDATE ABA_A1 SET max_hum=${req.body.settings}`,
			(err,data)=>{
				if(err){
					res.status(500).send('database error').end();
				}else{
					res.status(200).send('修改成功').end();
				}
			});
	    }
		if(req.body.flag==1){
			db.query(`UPDATE ABA_B SET max_hum=${req.body.settings}`,
			(err,data)=>{
				if(err){
					res.status(500).send('database error').end();
				}else{
					res.status(200).send('修改成功').end();
				}
			});
	    }
		if(req.body.flag==2){
			db.query(`UPDATE ABA_A2 SET max_hum=${req.body.settings}`,
			(err,data)=>{
				if(err){
					res.status(500).send('database error').end();
				}else{
					res.status(200).send('修改成功').end();
				}
			});
	    }
	});
	router.post('/hbom',(req,res)=>{
		if(req.body.flag==0){
			db.query(`UPDATE ABA_A1 SET min_hum=${req.body.settings}`,
			(err,data)=>{
				if(err){
					res.status(500).send('database error').end();
				}else{
					res.status(200).send('修改成功').end();
				}
			});
		}
		if(req.body.flag==1){
			db.query(`UPDATE ABA_B SET min_hum=${req.body.settings}`,
			(err,data)=>{
				if(err){
					res.status(500).send('database error').end();
				}else{
					res.status(200).send('修改成功').end();
				}
			});
		}
		if(req.body.flag==2){
			db.query(`UPDATE ABA_A2 SET min_hum=${req.body.settings}`,
			(err,data)=>{
				if(err){
					res.status(500).send('database error').end();
				}else{
					res.status(200).send('修改成功').end();
				}
			});
		}
	});
	return router;
}
