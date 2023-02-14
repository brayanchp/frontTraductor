import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import GoogleSignInPlugin from "vue3-google-signin"
import VueSweetalert2 from 'vue-sweetalert2';
// import tinymce from 'vue-tinymce-editor'
import Editor from '@tinymce/tinymce-vue'
import SimpleTypeahead from 'vue3-simple-typeahead';


import 'vue3-simple-typeahead/dist/vue3-simple-typeahead.css';

import 'sweetalert2/dist/sweetalert2.min.css';


import './assets/css/style.css'
import './assets/vendor/bootstrap/css/bootstrap.min.css'
import './assets/vendor/tinymce/tinymce'
import './assets/js/plugins.js'
// import './assets/js/'
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueAxios, axios)
app.use(Editor)
app.use(VueSweetalert2);
app.use(GoogleSignInPlugin, {
  // clientId: '610752097977-rtlldpdc4rmqrhdi6hr36h665qqev31e.apps.googleusercontent.com',
  clientId:'112049544360-uoci5i6gb4qbdjhachlt4os80fdn2cib.apps.googleusercontent.com'
});
app.use(SimpleTypeahead)
//secrecliente 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
app.mount('#app')
