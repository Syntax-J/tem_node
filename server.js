const express=require('express');
const static=require('express-static');
const bodyParser=require('body-parser');
const multer=require('multer');
const mysql=require('mysql');
const cookieParser=require('cookie-parser');
const cookieSession=require('cookie-session');
const expressRoute=require('express-route');
const consolidate=require('consolidate');


var server=express();
server.listen(8080);
var routerUser=express.Router();
var db=mysql.createConnection({host:'127.0.0.1',user:'root',password:'123456',database:'2018'});
//获取请求数据
server.use(bodyParser.urlencoded());
//cookie session
server.use(cookieParser());
(function(){var keys=[];
for(let i=0;i<100000;i++){
	keys[i]='a_'+Math.random();
}
server.use(cookieSession({
	name:'sess_id',
	keys:keys,
	maxAge:20*60*1000
}));
})();

//模版
server.set('view engine','html');
server.set('views','./template');
server.engine('html',consolidate.ejs);
//route
server.use('/',require('./route/ori.js')());
server.use('/cube1/',require('./route/cube1.js')());
server.use('/admin/',require('./route/admin.js')());
server.use('/admin/settings/',require('./route/settings.js')());




// server.use('/cube',routerUser);
// server.get('/',function (req,res) {
// 	res.render('signin.ejs');
// });
// routerUser.get('',function (req,res) {

// })
//static文件
server.use(static('./www'));