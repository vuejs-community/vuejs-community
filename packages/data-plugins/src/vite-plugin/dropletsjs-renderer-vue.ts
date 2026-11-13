import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@dropletsjs/renderer-vue',
  description: 'Vue 3 renderer for Droplets: +droplet.vue and +error.vue single-file components, rendered on the server and hydrated in the browser.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'droplets',
    'vue',
    'renderer',
    'micro-frontends',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/dropletsjs/droplets',
    npm: 'https://www.npmjs.com/package/@dropletsjs/renderer-vue',
    website: 'https://dropletsjs.dev',
  },
  source: {
    github: 'dropletsjs/droplets',
    npm: '@dropletsjs/renderer-vue',
  },
})
