import Vue from 'vue'
import App from './App.vue'
import router from './router'

import { Tabbar, TabbarItem ,Icon, Tab, Tabs,Field,Button,CellGroup ,Toast } from 'vant';

Vue.use(Tabbar).use(TabbarItem).use(Icon).use(Tab).use(Tabs).use(Field ).use(Button).use(CellGroup).use(Toast);
Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
