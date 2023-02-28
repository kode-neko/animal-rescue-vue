import { createApp } from 'vue'
import { createPinia } from 'pinia'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'
import colors from 'vuetify/lib/util/colors'

const vuetify = createVuetify({
  theme: {
    defaultTheme: 'dark',
    themes: {
      dark: {
        dark: false,
        colors: {
          primary: colors.purple.base,
        }
      },
    },
  },
  components,
  directives,
  icons: {
    iconfont: 'mdi',
  }
})

// Router - App - css
import router from './router'
import App from './App.vue'
import './assets/main.scss'

// Notifications
import Notifications from '@kyvg/vue3-notification'

// I18next
import i18n from './i18n'
import I18NextVue from 'i18next-vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vuetify)
app.use(Notifications)
app.use(I18NextVue, {i18next: i18n})
app.mount("#app");