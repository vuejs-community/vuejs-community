import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'tradingview',
  description: 'Use TradingView widgets',
  icon: 'icon:tradingview',
  category: 'nuxt',
  types: [
    'Charts & Maps',
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
})
