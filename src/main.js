import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mockjs from '@/mock/mock.js'     //@表示src
import '@/assets/css/reset.css'
import '@/assets/js/rem.js'
import { Tabbar, TabbarItem ,Icon, Tab, Tabs,Field,Button,CellGroup ,Toast ,Row, Col,NavBar,Swipe, SwipeItem
,Lazyload} from 'vant';

Vue.use(Tabbar).use(TabbarItem).use(Icon).use(Tab).use(Tabs).use(Field ).use(Button).use(CellGroup).use(Toast)
.use(Row).use(Col).use(NavBar).use(Swipe).use(SwipeItem).use(Lazyload);
Vue.config.productionTip = false


new Vue({
  router,
  store,
  mockjs,
  render: h => h(App),
}).$mount('#app')
