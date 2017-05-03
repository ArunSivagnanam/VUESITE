import Vue from 'vue';
import Vuex from 'vuex';
import App from './components/App.vue';
import store from './store';

Vue.use(Vuex);

new Vue({
  el: '#app',

  store : new Vuex.Store(store),

  render : function(createElement){
    return createElement(App);
  }
})
