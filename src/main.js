import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import { Tabbar, TabbarItem ,Icon, Tab, Tabs,Field,Button,CellGroup ,Toast ,Row, Col,NavBar } from 'vant';

Vue.use(Tabbar).use(TabbarItem).use(Icon).use(Tab).use(Tabs).use(Field ).use(Button).use(CellGroup).use(Toast)
.use(Row).use(Col).use(NavBar );
Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
