import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-router-to-json',
  description: 'Extract Vue Router routes from a router file and generate JSON without component fields',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'vue-router',
    'routes',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-router-to-json',
  },
  source: {
    npm: 'vite-plugin-router-to-json',
  },
})
