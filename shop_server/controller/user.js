const Router=require('koa-router');
let router =new Router();
const mongoose= require('mongoose');

router.post('/registUser',async (ctx)=>{
    //console.log('请求成功');
    // ctx.body='请求成功';
    //获取Model
    const User=mongoose.model('User');
    //接受post请求 ，并且封装成user对象
    let newUser=new User(ctx.request.body);
   // console.log(ctx.request.body);
    console.log(newUser);
    //使用save去保存用户信息
    await newUser.save().then(
        ()=>{
            ctx.body={
                code:200,
                message:'注册成功'
            }
        }
    ).catch(err=>{
            ctx.body={
                code:500,
                message:err
            }
    })

})

router.post('/loginUser',async (ctx)=>{
    console.log(ctx.request.body);
    let loginUser=ctx.request.body;
    let userName=loginUser.userName;
    let password=loginUser.password;
    const User=mongoose.model('User');
    //查询用户名是否存在
    await User.findOne({userName:userName}).exec().then(async (result)=>{
        if(result){
            let newUser=new User();
            console.log(result,password);
            await newUser.comparePassword(password,result.password).then(
                isMatch=>{
                    if(isMatch){
                      //  console.log(isMatch);
                        ctx.body={
                            code:200,
                            message:'登录成功',
                            userInfo:result,
                        }               
                    }
                    else{
                        ctx.body={
                            code:500,
                            message:'用户名与密码不匹配'
                        }
                    }
                }
            )
        }
        else{
            ctx.body={
                code:404,
                message:'用户名不存在'
            }
        }
    })

})

module.exports=router;

