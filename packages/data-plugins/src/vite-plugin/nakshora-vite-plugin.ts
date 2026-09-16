import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@nakshora/vite-plugin',
  description: 'Nakshora plugin for Vite — virtual CSS module, PostCSS at-rules and HMR',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'css',
    'jit',
    'nakshora',
    'utility-first',
    'hmr',
  ],
  source: {
    github: 'nakshora/nakshora',
    npm: '@nakshora/vite-plugin',
  },
  links: {
    github: 'https://github.com/nakshora/nakshora',
    npm: 'https://www.npmjs.com/package/@nakshora/vite-plugin',
    website: 'https://nakshora.bsdc.info.bd',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 0,
      weekly: 0,
    },
  },
})
