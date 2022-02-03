import Vue from 'vue'
import App from './App.vue'
import Notifications from 'vue-notification'
// Bootstrap Import
import {
  BootstrapVue
} from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// Router
import router from './router'
import store from './store'

Vue.component("navbar-grab", require('./components/NavbarGrab.vue').default);
Vue.component("restaurant-profile", require('./components/Restaurant.vue').default);
Vue.component("product-list", require("./components/ProductList.vue").default);
Vue.component("footer-grab", require("./components/footerGrab.vue").default);

Vue.use(BootstrapVue)
Vue.use(Notifications)
Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')