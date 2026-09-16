import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-euis',
  description: 'Vite plugin for Euis (Euis) with Tailwind CSS compatibility - compile Euis to CSS with WebAssembly. Works in cloud environments like Lovable, StackBlitz, and CodeSandbox.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'euis',
    'css',
    'compiler',
    'vite',
    'vite-plugin',
    'wasm',
    'webassembly',
    'build-tool',
    'lovable',
    'stackblitz',
    'codesandbox',
    'cloud-ide',
  ],
  source: {
    github: 'huxeinsatoru/Euis',
    npm: 'vite-plugin-euis',
  },
  links: {
    github: 'https://github.com/huxeinsatoru/Euis',
    npm: 'https://www.npmjs.com/package/vite-plugin-euis',
    website: 'https://github.com/huxeinsatoru/Euis#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 12,
      weekly: 3,
    },
  },
})
