import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@madenowhere/phaze-cloudflare',
  description: 'Greenfield Cloudflare Workers + Pages adapter for Phaze apps. File-system routing, default Worker entry, typed bindings, SSR via @madenowhere/phaze-render-to-string, no Astro layer.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'phaze',
    'cloudflare',
    'workers',
    'pages',
    'ssr',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/madenowhere/phaze',
    npm: 'https://www.npmjs.com/package/@madenowhere/phaze-cloudflare',
    website: 'https://phaze.build',
  },
  source: {
    github: 'madenowhere/phaze',
    npm: '@madenowhere/phaze-cloudflare',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 45,
      weekly: 2,
    },
  },
})
