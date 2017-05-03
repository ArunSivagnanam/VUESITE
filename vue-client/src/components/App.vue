<template>
  <div id="app">
    <img src="./../assets/logo.png">
    <h1></h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
    </ul>
    <h2>{{msg + localCount}}</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>

    <button v-on:click="doSomthing()">Vue state test</button>

  </div>
</template>

<script>


export default {
  name: 'app',
  data : function() {
    return {
      msg: 'Welcome to Your Vue.js App on the fly wooohp you yeeaper',
    }
  },
  computed : {

      localCount: function(){
        return this.$store.getters.getCountPlusTen;
      },
      localCountX: function(){
        return this.$store.getters.getCountPlusX(50);
      }
  },
  methods : {
      doSomthing : function(){
        console.log('what up with you?');
        this.$store.dispatch('addNumberFromBackEnd',20).then(function(){
            console.log('getting task from backend completed');
        });
      }
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
