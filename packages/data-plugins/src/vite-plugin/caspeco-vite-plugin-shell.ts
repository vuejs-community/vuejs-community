import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@caspeco/vite-plugin-shell',
  description: 'Vite plugin that adds the shared RMS HTML (navigation, title, favicons) to index.html',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/Caspeco/VitePlugins',
    npm: 'https://www.npmjs.com/package/@caspeco/vite-plugin-shell',
    website: 'https://github.com/Caspeco/VitePlugins/tree/main/packages/vite-plugin-shell',
  },
  source: {
    github: 'Caspeco/VitePlugins',
    npm: '@caspeco/vite-plugin-shell',
  },
})
