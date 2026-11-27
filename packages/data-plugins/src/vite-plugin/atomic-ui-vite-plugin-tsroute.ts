import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@atomic-ui/vite-plugin-tsroute',
  description: 'Regenerate your tsroute TypeScript client whenever your axum (Rust) code changes',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'rust',
    'axum',
    'typescript',
    'codegen',
    'tsroute',
  ],
  links: {
    github: 'https://github.com/matthill8286/tsroute',
    npm: 'https://www.npmjs.com/package/@atomic-ui/vite-plugin-tsroute',
    website: 'https://github.com/matthill8286/tsroute/tree/main/packages/vite-plugin-tsroute#readme',
  },
  source: {
    github: 'matthill8286/tsroute',
    npm: '@atomic-ui/vite-plugin-tsroute',
  },
})
