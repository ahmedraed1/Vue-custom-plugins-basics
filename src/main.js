import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { myFirstPlugin } from './myFirstPlugin/firstplugin.js';
import { trigger } from '@vue/reactivity';

// const myFirstOlugin = {
//   install(app, option) {
//     console.log('Working', option);
//   },
// };

createApp(App)
  .use(myFirstPlugin, {
    placement: 'right',
    trigger: 'click',
    hideOnClick: false,
  })
  .mount('#app');
