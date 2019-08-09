const Koa =require('koa');
const app =new Koa();

//解决跨域
const cors=require('koa2-cors');
app.use(cors({
    origin:['http://localhost:8080'],      //允许访问的IP
    credentials:true  //需要带证书
}))

//接受前端请求
const bodyParser=require('koa-bodyparser');
app.use(bodyParser())


//加载路由
const Router=require('koa-router');
const user =require('./controller/user.js');

let router =new Router();
router.use('/user',user.routes());
app.use(router.routes());
app.use(router.allowedMethods())  
//只允许特定的请求方法进入

const {connect, initSchemas} =require('./init.js');
( async ()=>{
        await connect();
        initSchemas();
    }
)()

app.use( async (ctx) =>{
    ctx.body ="hello world";
})

app.listen(3000, ()=>{
    console.log('start shop server');
})

