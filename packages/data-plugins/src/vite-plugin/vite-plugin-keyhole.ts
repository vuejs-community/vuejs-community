import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-keyhole',
  description: 'Encrypt a whole Vite build so it opens only with a link key or a password',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'encryption',
    'password-protect',
    'github-pages',
    'static-site',
  ],
  links: {
    github: 'https://github.com/StellaPolaris/vite-plugin-keyhole',
    npm: 'https://www.npmjs.com/package/vite-plugin-keyhole',
    website: 'https://github.com/StellaPolaris/vite-plugin-keyhole#readme',
  },
  source: {
    github: 'StellaPolaris/vite-plugin-keyhole',
    npm: 'vite-plugin-keyhole',
  },
})
