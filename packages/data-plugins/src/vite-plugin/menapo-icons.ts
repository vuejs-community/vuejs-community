import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@menapo/icons',
  description: 'Icons as one typed call: icon("lucide:x") compiles to attributes and per-module CSS, with zero runtime JavaScript, in every framework',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'css',
    'iconify',
    'icons',
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/menapo/kit',
    npm: 'https://www.npmjs.com/package/@menapo/icons',
    website: 'https://github.com/menapo/kit/blob/main/packages/icons/README.md',
  },
  source: {
    github: 'menapo/kit',
    npm: '@menapo/icons',
  },
})
