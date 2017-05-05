import Vue from 'vue';
import MobileMenu  from '../src/components/MobileMenu.vue';

describe('MobileMenu.vue', function () {

  // asserting JavaScript options
  it('should have correct message', function () {
    expect(MobileMenu.data().msg).toBe('woohoo im a component');
  })

  // asserting rendered result by actually rendering the component
  it('should render correct message', function () {
    
    
    
    var vm = new Vue({
      template: '<div><test v-bind:itemList="menuItems" v-bind:menuOpen="menuOpen"></test></div>',
      data : {
            menuOpen : true,
            menuItems : [['login','logout'],['home']]
      },
      components: {
        'test': MobileMenu
      }
    }).$mount();


    expect(vm.$el.querySelector('.mobile-menu.mobile-menu-active ul li a').textContent).toBe('login');
  })
})