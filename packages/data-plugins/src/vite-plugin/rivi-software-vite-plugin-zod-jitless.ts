import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@rivi-software/vite-plugin-zod-jitless',
  description: 'Vite plugin that sets Zod\'s jitless mode before any browser module builds a schema, so a strict Content-Security-Policy never sees Zod\'s eval probe',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'zod',
    'csp',
    'content-security-policy',
    'unsafe-eval',
  ],
  links: {
    github: 'https://github.com/rivi-software/tools',
    npm: 'https://www.npmjs.com/package/@rivi-software/vite-plugin-zod-jitless',
    website: 'https://github.com/rivi-software/tools/tree/main/packages/vite-plugin-zod-jitless#readme',
  },
  source: {
    github: 'rivi-software/tools',
    npm: '@rivi-software/vite-plugin-zod-jitless',
  },
})
