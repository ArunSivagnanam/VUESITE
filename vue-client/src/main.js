import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import App from './components/App.vue';
import store from './store';

Vue.use(Vuex);
//Vue.use(VueRouter);



new Vue({
  el: '#app',

  store : new Vuex.Store(store),

  render : function(createElement){
    return createElement(App);
  }
})
