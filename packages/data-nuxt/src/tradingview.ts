import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'tradingview',
  description: 'Use the TradingView Widgets in your Nuxt Application',
  category: 'nuxt',
  types: [
    'Extensions',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/volkanakkus/nuxt-tradingview',
    npm: 'https://npmjs.com/package/nuxt-tradingview',
    website: 'https://nuxt-tradingview.volkanakkus.com',
  },
  source: {
    github: 'volkanakkus/nuxt-tradingview',
    npm: 'nuxt-tradingview',
  },
  stats: {
    stars: 35,
    downloads: {
      monthly: 512,
      weekly: 99,
    },
  },
})
