import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@ui0/theme',
  description: 'Generates themeable CSS custom properties from a theme config (library + Vite plugin + CLI)',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'css-variables',
    'design-tokens',
    'theme',
    'ui0',
    'vite',
    'vite-plugin',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/@ui0/theme',
  },
  source: {
    npm: '@ui0/theme',
  },
})
