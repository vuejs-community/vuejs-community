import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@sysml2renderer/vite-plugin',
  description: 'SysML v2 to diagram renderer - Vite plugin for VitePress and other Vite projects',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'sysml',
    'sysml2',
    'vite',
    'vite-plugin',
    'vitepress',
    'diagram',
  ],
  source: {
    github: 'enthali/sysml2renderer',
    npm: '@sysml2renderer/vite-plugin',
  },
  links: {
    github: 'https://github.com/enthali/sysml2renderer',
    npm: 'https://www.npmjs.com/package/@sysml2renderer/vite-plugin',
    website: 'https://github.com/enthali/sysml2renderer#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 48,
      weekly: 3,
    },
  },
})
