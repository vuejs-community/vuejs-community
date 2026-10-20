import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-static-magic-link',
  description: 'Encrypt a static Vite site so it only runs for people with the link.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'encryption',
    'magic-link',
    'static-site',
  ],
  links: {
    github: 'https://github.com/StellaPolaris/vite-plugin-static-magic-link',
    npm: 'https://www.npmjs.com/package/vite-plugin-static-magic-link',
    website: 'https://github.com/StellaPolaris/vite-plugin-static-magic-link#readme',
  },
  source: {
    github: 'StellaPolaris/vite-plugin-static-magic-link',
    npm: 'vite-plugin-static-magic-link',
  },
})
