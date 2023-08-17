import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, md } from 'vuetify/iconsets/md'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          primary: '#2196F3',
          secondary: '#CE93D8',
        },
      },
      dark: {
        colors: {
          primary: '#2196F3',
          secondary: '#CE93D8',
        },
      },
    }
  },
  icons: {
    defaultSet: 'md',
    aliases,
    sets: {
      md,
    },
  },
})

const app = createApp(App)

app.use(createPinia())
app.use(vuetify)

app.mount('#app')
