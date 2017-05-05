
import Root from './components/Root.vue';
import BuketterContainer from './components/BuketterContainer.vue';

// Lazy (asynch) loaded modules, to minimize first load bundle size
const AnledningerContainer = function(resolve) { require(['./components/AnledningerContainer.vue'], resolve); } 
const HvadErFlowrContainer = function(resolve){ require(['./components/HvadErFlowrContainer.vue'], resolve); }
const TipsTricksContainer = function(resolve){ require(['./components/TipsTricksContainer.vue'], resolve); }
const MitFlowrContainer = function(resolve){ require(['./components/MitFlowrContainer.vue'], resolve); }
const KundeServiceContainer = function(resolve){ require(['./components/KundeServiceContainer.vue'], resolve); }

const routes = [
  { path: '/', 
    component: Root,
    children : [
        {
          path : '/',
          component : BuketterContainer,
          name : 'Buketter'

        },
        {
          path : 'anledninger',
          component : AnledningerContainer,
          name : 'Anledninger'

        },
        {
          path : 'hvad-er-flowr',
          component : HvadErFlowrContainer,
          name : 'Hvad er flowr?'

        },
        {
          path : 'tips-tricks',
          component : TipsTricksContainer,
          name : 'Tips & Tricks'
        },
        {
          path : 'kundeservice',
          component : KundeServiceContainer,
          name : 'Kundeservice'
        }
        
    ] 
  }
]


export default routes;