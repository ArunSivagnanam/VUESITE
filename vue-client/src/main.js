import Vue from 'vue';
import Vuex from 'vuex';
import App from './components/App.vue';
import store from './store';
import routes from './routes';
import VueRouter from 'vue-router';

Vue.use(Vuex);
Vue.use(VueRouter);


new Vue({
  el: '#app',
  router :  new VueRouter({routes : routes}),

  store : new Vuex.Store(store),

  render : function(createElement){
    return createElement(App);
  }
})
