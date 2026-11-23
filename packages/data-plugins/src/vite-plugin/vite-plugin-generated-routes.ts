import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-generated-routes',
  description: 'Vite plugin that builds vue-router routes from <route> blocks in Vue SFCs, grouped by directory.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'vue',
    'vue-router',
    'routes',
    'route-block',
    'file-based-routing',
  ],
  links: {
    github: 'https://github.com/Max0897/vite-plugin-generated-routes',
    npm: 'https://www.npmjs.com/package/vite-plugin-generated-routes',
    website: 'https://github.com/Max0897/vite-plugin-generated-routes#readme',
  },
  source: {
    github: 'Max0897/vite-plugin-generated-routes',
    npm: 'vite-plugin-generated-routes',
  },
})
