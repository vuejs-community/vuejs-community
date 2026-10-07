import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@furo/vite-pico-mock',
  description: 'A fixture server for vite projects: typed .ts fixtures mapped from the url, middleware, case sequences, a mock login gateway with users and api keys, push notifications and ndjson streams.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'mock',
    'mock-server',
    'fixtures',
  ],
  links: {
    github: 'https://github.com/eclipse/eclipsefuro-web',
    npm: 'https://www.npmjs.com/package/@furo/vite-pico-mock',
    website: 'https://github.com/eclipse/eclipsefuro-web/tree/main/packages/furo-vite-pico-mock',
  },
  source: {
    github: 'eclipse/eclipsefuro-web',
    npm: '@furo/vite-pico-mock',
  },
})
