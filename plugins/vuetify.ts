import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      defaultTheme: 'light',
      themes: {
        light: {
          colors: {
            primary: '#2268b2',
            'primary-darken-1': '#1a4f8a',
            secondary: '#3b8fd4',
            background: '#ffffff',
            surface: '#ffffff',
            'surface-variant': '#f4f8fc',
            error: '#B00020',
            info: '#2196F3',
            success: '#4CAF50',
            warning: '#FB8C00',
          },
        },
      },
    },
    defaults: {
      VBtn: {
        rounded: 'lg',
      },
      VCard: {
        rounded: 'lg',
      },
    },
  })
  app.vueApp.use(vuetify)
})
