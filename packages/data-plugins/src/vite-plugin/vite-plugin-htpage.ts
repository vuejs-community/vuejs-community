import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-htpage',
  description: 'Vite plugin for native in-process WebAssembly compilation of htpage markup',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'htpage',
    'vite',
    'vite-plugin',
    'compiler',
    'wasm',
    'markup',
  ],
  links: {
    github: 'https://github.com/mustafa-naeem-iq/htpage',
    npm: 'https://www.npmjs.com/package/vite-plugin-htpage',
    website: 'https://github.com/mustafa-naeem-iq/htpage#readme',
  },
  source: {
    github: 'mustafa-naeem-iq/htpage',
    npm: 'vite-plugin-htpage',
  },
})
