import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store, { key } from './store';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faPlayCircle,
  faPauseCircle,
  faPlusCircle,
  faStopCircle
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faPlayCircle, faPauseCircle, faPlusCircle, faStopCircle);

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  //key allows you to use the typed state in the useState hook from vuex
  .use(store, key)
  .use(router)
  .mount('#app');
