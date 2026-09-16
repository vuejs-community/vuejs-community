import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'pageflare',
  description: 'Framework integrations for Pageflare static site optimization',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'pageflare',
    'pagespeed',
    'performance',
    'optimization',
    'vite-plugin',
    'nuxt-module',
    'astro-integration',
    'nextjs',
    'static-site',
  ],
  source: {
    github: 'getappz/pageflare-js',
    npm: 'pageflare',
  },
  links: {
    github: 'https://github.com/getappz/pageflare-js',
    npm: 'https://www.npmjs.com/package/pageflare',
    website: 'https://pageflare.dev',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 13,
      weekly: 3,
    },
  },
})
