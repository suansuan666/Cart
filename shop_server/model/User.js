const mongoose =require('mongoose');
const Schema =mongoose.Schema;
const bcrypt=require('bcrypt');
//建立模型
const userSchema=new Schema({
    userName:{unique:true,type:String},
    userId:Schema.Types.ObjectId,
    password:String,
    createDate:{type:Date,default:Date.now()}
});

userSchema.pre('save',function(next){
    //隨機生成salt  10是迭代次數
    bcrypt.genSalt(10,(err,salt)=>{
        if(err) return next(err);
        bcrypt.hash(this.password,salt,(err,hash)=>{
            console.log(salt);
            if(err) return next(err);
            this.password=hash;
            console.log("--------",this.password)
            next();
        })
    })
   // console.log('==============', this.password);
})



userSchema.methods ={
    comparePassword:(_password,password)=>{
        return  new Promise((resolve,reject)=>{
            bcrypt.compare(_password,password,(err,isMatch)=>{
                if(!err) resolve(isMatch);
                else reject(err);
                console.log("---",_password,password)
            })
        })
    }
}


//发布模型
mongoose.model('User',userSchema);
