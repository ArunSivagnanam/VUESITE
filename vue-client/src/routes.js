
import Root from './components/Root.vue';
import BuketterContainer from './components/BuketterContainer.vue';
import AnledningerContainer from './components/AnledningerContainer.vue';
import HvadErFlowrContainer from './components/HvadErFlowrContainer.vue';
import TipsTricksContainer from './components/TipsTricksContainer.vue';
import KundeServiceContainer from './components/KundeServiceContainer.vue';
import MitFlowrContainer from './components/MitFlowrContainer.vue';

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