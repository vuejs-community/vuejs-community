import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@hazejs/vite',
  description: 'Vite plugin for hazejs: hot-reloading backend, full-stack dev server and deployment presets',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'hazejs',
    'haze',
    'nodejs',
    'typescript',
    'vite',
    'vite-plugin',
    'fullstack',
    'ssr',
    'deploy',
    'cloudflare',
    'vercel',
    'netlify',
    'aws-lambda',
  ],
  links: {
    github: 'https://github.com/penna-org/haze',
    npm: 'https://www.npmjs.com/package/@hazejs/vite',
    website: 'https://github.com/penna-org/haze/tree/main/packages/vite#readme',
  },
  source: {
    github: 'penna-org/haze',
    npm: '@hazejs/vite',
  },
})
