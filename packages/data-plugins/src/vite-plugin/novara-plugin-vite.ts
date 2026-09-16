import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@novara/plugin-vite',
  description: 'Novara with SWC',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'poprize',
    'react',
    'swc',
    'react-refresh',
    'fast refresh',
  ],
  source: {
    github: 'jonataslaw/novara-vite-plugin',
    npm: '@novara/plugin-vite',
  },
  links: {
    github: 'https://github.com/jonataslaw/novara-vite-plugin',
    npm: 'https://www.npmjs.com/package/@novara/plugin-vite',
    website: 'https://github.com/jonataslaw/novara-vite-plugin#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 20,
      weekly: 2,
    },
  },
})
