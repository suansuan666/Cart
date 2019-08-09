# shoppingcart

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

这是一个小商城的项目，麻雀虽小，但是五脏俱全，项目里涉及到了很多实用的功能



Profile.vue是登录注册界面，里面用到了两次加密的方法，前端用了MD5加密，后端采用bcrypt做加盐加密处理，具体方法见shop_server里的user.js方法
