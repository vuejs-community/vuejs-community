import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@vuefn/core',
  description: 'One .vue file per route for TanStack Vue Start on Cloudflare Workers',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'cloudflare-workers',
    'tanstack-start',
    'vite-plugin',
    'vue',
  ],
  links: {
    github: 'https://github.com/pyyupsk/vuefn',
    npm: 'https://www.npmjs.com/package/@vuefn/core',
    website: 'https://github.com/pyyupsk/vuefn#readme',
  },
  source: {
    github: 'pyyupsk/vuefn',
    npm: '@vuefn/core',
  },
})
