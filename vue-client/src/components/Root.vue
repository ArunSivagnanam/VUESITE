<template>
  <div id="root">
      <mobile-menu v-bind:itemlList="menuItems" v-bind:menuOpen="menuOpen" v-on:on-item-clicked="itemUpdated($event)" v-on:on-menu-close="closeMenu()"> </mobile-menu>
      <main-header v-on:on-menu-clicked="toggleMenu()" ></main-header>
      <site-container></site-container>
    <!-- site-container -->
      <p v-on:click="openMenu()">TEST SPACE </p>
      <h2>{{msg + localCount}}</h2>
      <button v-on:click="doSomthing()">Vue state test</button>
  </div>
</template>

<script>

import MobileMenu from './MobileMenu.vue'
import MainHeader from './MainHeader.vue'
import SiteContainer from './SiteContainer.vue'

export default {
  name: 'root',
  data : function() {
    return {
      msg: 'Welcome to Your Vue.js App on the fly wooohp you yeeaper',
      menuItems : [['Home','About'],['Log out']],
      menuOpen : false
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
           
        });
      },
      itemUpdated : function(payload){
          console.log(payload);
      },
      closeMenu : function(){
        this.menuOpen = false;
      },
      openMenu : function(){
         this.menuOpen = true;
      },
      toggleMenu : function(){
          
          if(!this.menuOpen){
            this.openMenu();
          }else{
            this.closeMenu();
          }
      }
  },
  components : {
      'mobile-menu' : MobileMenu,
      'main-header' : MainHeader,
      'site-container' : SiteContainer
  }

}
</script>
 


<!-- Shared style guide -->
<style>

  body {
    background-color: #fefdfb;
    overflow-x: hidden;
  }

  body, div, table, tbody, thead, tfoot, td, th, span, ul, ul li, ol, ol li, em, header, hgroup, nav, footer, aside, article, section, video, audio, strong, b, i, fieldset, form, label, legend, input, button, select, textarea, dt, dl, dd, blockquote, small, code, object, iframe, address, small, caption, img, hr, h1, h2, h3, h4, h5, h6, p {
      margin: 0px;
      padding: 0px;
      vertical-align: top;
      list-style-type: none;
      border: 0px solid #ffffff;
      border-collapse: collapse;
      border-spacing: 0;
      font-family: Arial;
      font-size: 15px;
      line-height: 20px;
      color: #5f306a;
      text-align: left;
  }

a {
    color: #5f306a;
    text-decoration: underline;
    outline: none;
}

div, header, footer, .box, input, textarea {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}
  
</style>