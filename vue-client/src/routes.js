
import Root from './components/Root.vue';
import AComp from './components/AComp.vue';
import BComp from './components/BComp.vue';

const routes = [
  { path: '/', 
    component: Root,
    children : [
        {
          path : 'a',
          component : AComp
        },
        {
          path : 'b',
          component : BComp
        }
        
    ] 
  }
]


export default routes;