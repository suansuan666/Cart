import Mock from 'mockjs'
import URL from '@/service.config.js'
let Random = Mock.Random;
let productData=()=>{
    let productList=[];
    for(let i=0;i<10;i++){
        let product ={
            name:Random.ctitle(5,10),
            img:Random.image(),
            price:Random.integer(100,10000)
        };
        productList.push(product);
    }
    return productList;
}
Mock.mock(URL.getProduct,productData);