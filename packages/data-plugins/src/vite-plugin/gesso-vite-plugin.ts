import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'gesso-vite-plugin',
  description: 'Finds a Gesso application\'s worker entries, writes the constructions and the hot-replacement wiring, and says when a save will reload the page.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'gesso',
    'canvas',
    'ui',
    'typescript',
    'vite',
    'vite-plugin',
    'hmr',
    'web-worker',
    'build-tool',
  ],
  links: {
    github: 'https://github.com/kevinpbaker/gesso',
    npm: 'https://www.npmjs.com/package/gesso-vite-plugin',
    website: 'https://gesso-docs.vercel.app',
  },
  source: {
    github: 'kevinpbaker/gesso',
    npm: 'gesso-vite-plugin',
  },
})
