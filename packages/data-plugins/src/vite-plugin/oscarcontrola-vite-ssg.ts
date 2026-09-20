import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@oscarcontrola/vite-ssg',
  description: 'Server-side generation for Vite',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'ssg',
    'ssr',
  ],
  links: {
    github: 'https://github.com/antfu-collective/vite-ssg',
    npm: 'https://www.npmjs.com/package/@oscarcontrola/vite-ssg',
    website: 'https://github.com/antfu-collective/vite-ssg',
  },
  source: {
    github: 'antfu-collective/vite-ssg',
    npm: '@oscarcontrola/vite-ssg',
  },
})
