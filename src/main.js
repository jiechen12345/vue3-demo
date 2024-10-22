import { createApp } from 'vue';
import App from './App.vue';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-balham.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import router from './router/index.js';

createApp(App).use(router).mount('#app');
