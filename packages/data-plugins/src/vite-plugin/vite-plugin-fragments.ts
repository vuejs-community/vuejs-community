import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-fragments',
  description: 'Write your HTML in pieces, ship it whole. Build-time and dev-time HTML partials for Vite.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'html',
    'html-include',
    'html-partials',
    'fragments',
    'partials',
    'include',
    'template',
    'loader',
  ],
  links: {
    github: 'https://github.com/diogotl/vite-plugin-fragments',
    npm: 'https://www.npmjs.com/package/vite-plugin-fragments',
    website: 'https://github.com/diogotl/vite-plugin-fragments#readme',
  },
  source: {
    github: 'diogotl/vite-plugin-fragments',
    npm: 'vite-plugin-fragments',
  },
})
