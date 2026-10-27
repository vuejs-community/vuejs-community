import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-hmr-toast',
  description: 'Shows a small toast in the browser for every Vite hot update, CSS update and full reload.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'vite',
    'hmr',
    'toast',
    'devtools',
  ],
  links: {
    github: 'https://github.com/harukikuri/vite-plugin-hmr-toast',
    npm: 'https://www.npmjs.com/package/vite-plugin-hmr-toast',
    website: 'https://github.com/harukikuri/vite-plugin-hmr-toast#readme',
  },
  source: {
    github: 'harukikuri/vite-plugin-hmr-toast',
    npm: 'vite-plugin-hmr-toast',
  },
})
