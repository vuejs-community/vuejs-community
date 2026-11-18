import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@scarlab-icons/unplugin',
  description: 'Build-time plugin for Scarlab Icons: bundles only the icons your project uses and inlines static ones into HTML.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'icons',
    'svg',
    'unplugin',
    'vite-plugin',
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/la-moore/scarlab-icons',
    npm: 'https://www.npmjs.com/package/@scarlab-icons/unplugin',
    website: 'https://scarlab-icons.la-moore.ru',
  },
  source: {
    github: 'la-moore/scarlab-icons',
    npm: '@scarlab-icons/unplugin',
  },
})
