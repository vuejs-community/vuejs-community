import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@madenowhere/phaze-cloudflare',
  description: 'Greenfield Cloudflare Workers + Pages adapter for Phaze apps. File-system routing, default Worker entry, typed bindings, SSR via @madenowhere/phaze-render-to-string, no Astro layer.',
  version: '0.0.7',
  category: 'plugin',
  tags: [
    'phaze',
    'cloudflare',
    'workers',
    'pages',
    'ssr',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/madenowhere/phaze',
    npm: 'https://www.npmjs.com/package/@madenowhere/phaze-cloudflare',
  },
  stats: {
    downloads: {
      monthly: 40,
      weekly: 19,
    },
  },
})
