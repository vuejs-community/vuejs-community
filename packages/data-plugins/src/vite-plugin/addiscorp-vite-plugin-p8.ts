import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@addiscorp/vite-plugin-p8',
  description: 'Vite plugin for P8: PHP components rendered by the P8 runtime (WebAssembly). Coming soon.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'php',
    'p8',
    'wasm',
    'hono',
  ],
  links: {
    github: 'https://github.com/addiscorp/vite-plugin-p8',
    npm: 'https://www.npmjs.com/package/@addiscorp/vite-plugin-p8',
    website: 'https://p8.addis.gg',
  },
  source: {
    github: 'addiscorp/vite-plugin-p8',
    npm: '@addiscorp/vite-plugin-p8',
  },
})
