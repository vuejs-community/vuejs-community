import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'cloudflare-analytics',
  description: 'Cloudflare Web Analytics integration',
  icon: 'icon:cloudflare',
  category: 'nuxt',
  types: [
    'Analytics',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/hamlogic/nuxt-cloudflare-analytics',
    npm: 'https://npmjs.com/package/nuxt-cloudflare-analytics',
    website: 'https://github.com/hamlogic/nuxt-cloudflare-analytics',
  },
  source: {
    github: 'hamlogic/nuxt-cloudflare-analytics',
    npm: 'nuxt-cloudflare-analytics',
  },
})
