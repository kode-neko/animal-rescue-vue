import { createApp } from 'vue'
import { createPinia } from 'pinia'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    iconfont: 'mdi', // default - only for display purposes
  },
})

// I18next
import i18n from './i18n'
import I18NextVue from 'i18next-vue'

// Router - App - css
import router from './router'
import App from './App.vue'
import './assets/main.css'


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vuetify)
app.use(I18NextVue, {i18next: i18n})
app.mount("#app");