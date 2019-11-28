import Vue from 'vue'
import App from './App.vue'

import 'semantic-ui-css/semantic.css';
import router from './router'


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
