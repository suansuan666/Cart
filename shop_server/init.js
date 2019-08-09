const mongoose =require('mongoose');
const db = 'mongodb://localhost/shop';


//引入Schema
const glob=require('glob');
const path=require('path');
exports.initSchemas=()=>{
    //__dirname是获取当前项目绝对地址
    glob.sync(path.resolve(__dirname,'./model','*.js')).forEach(require)
}



exports.connect =() =>{
    //连接数据库 （第二个参数是去解析URL）
    mongoose.connect(db, { useNewUrlParser: true });     
    //监听数据库连接      
    mongoose.connection.on('disconnected',()=>{
        mongoose.connect(db);
    });
    //当发生连接错误时
    mongoose.connection.on('error',err =>{
        console.log('error');
        mongoose.connect('db');
    });
    //初始连接
    mongoose.connection.once('open',()=>{
        console.log('db start sucess');
    })
};


