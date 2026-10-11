import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-loca',
  description: 'Expose a Vite dev server through Loca\'s local HTTPS router',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'loca',
    'local-development',
  ],
  links: {
    github: 'https://github.com/toiglak/loca',
    npm: 'https://www.npmjs.com/package/vite-plugin-loca',
    website: 'https://github.com/toiglak/loca/tree/main/packages/vite-plugin-loca',
  },
  source: {
    github: 'toiglak/loca',
    npm: 'vite-plugin-loca',
  },
})
