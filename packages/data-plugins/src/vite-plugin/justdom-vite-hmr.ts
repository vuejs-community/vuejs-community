import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'justdom-vite-hmr',
  description: 'A Vite plugin that preserves justdom-signal component state across hot module reloads',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'hmr',
    'hot-reload',
    'signals',
  ],
  links: {
    github: 'https://github.com/apendua/justdom',
    npm: 'https://www.npmjs.com/package/justdom-vite-hmr',
    website: 'https://github.com/apendua/justdom#readme',
  },
  source: {
    github: 'apendua/justdom',
    npm: 'justdom-vite-hmr',
  },
})
