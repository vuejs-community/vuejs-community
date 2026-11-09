import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-veloz',
  description: 'Vite plugin for Veloz: JSX setup and SSR module resolution.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'veloz',
    'velozjs',
    'jsx',
    'ssr',
  ],
  links: {
    github: 'https://github.com/juliocarneiro/veloz',
    npm: 'https://www.npmjs.com/package/vite-plugin-veloz',
    website: 'https://github.com/juliocarneiro/veloz#readme',
  },
  source: {
    github: 'juliocarneiro/veloz',
    npm: 'vite-plugin-veloz',
  },
})
