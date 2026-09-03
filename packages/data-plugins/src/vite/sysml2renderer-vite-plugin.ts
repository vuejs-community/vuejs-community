import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@sysml2renderer/vite-plugin',
  description: 'SysML v2 to diagram renderer - Vite plugin for VitePress and other Vite projects',
  version: '0.3.0',
  category: 'plugin',
  tags: [
    'sysml',
    'sysml2',
    'vite',
    'vite-plugin',
    'vitepress',
    'diagram',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/enthali/sysml2renderer',
    npm: 'https://www.npmjs.com/package/@sysml2renderer/vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 81,
      weekly: 12,
    },
  },
})
