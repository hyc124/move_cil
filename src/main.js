import 'lib-flexible';
import "./assets/style/reset.css"
import Vue from 'vue'
import App from './App.vue'
import less from 'less'
import router from './router/index'

// import './libs/rem'
// import 'amfe-flexible';


import { Button, Grid, GridItem } from "vant";
Vue.use(Button)
    .use(Grid)
    .use(GridItem)

Vue.config.productionTip = false
Vue.use(less)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
