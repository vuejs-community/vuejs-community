import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@fragmento/vite',
  description: 'Vite plugins and CLI of fragmento: host import map, fragment builds, provider dev server',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'fragmento',
    'microfrontends',
    'micro-frontends',
    'vue',
    'vite',
    'es-modules',
    'vite-plugin',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/@fragmento/vite',
    website: 'https://gitlab.com/bitaffair/public/fragmento/-/tree/main/docs/guide',
  },
  source: {
    npm: '@fragmento/vite',
  },
})
