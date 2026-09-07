import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'turnstile',
  description: 'Privacy-focused alternative to CAPTCHA from Cloudflare',
  icon: 'icon:cloudflare',
  category: 'nuxt',
  types: [
    'Security',
  ],
  filter: [
    'community',
  ],
  links: {
    github: 'https://github.com/nuxt-modules/turnstile',
    npm: 'https://npmjs.com/package/@nuxtjs/turnstile',
    website: 'https://github.com/nuxt-modules/turnstile',
  },
  source: {
    github: 'nuxt-modules/turnstile',
    npm: '@nuxtjs/turnstile',
  },
  stats: {
    stars: 297,
    downloads: {
      monthly: 104192,
      weekly: 26724,
    },
  },
})
