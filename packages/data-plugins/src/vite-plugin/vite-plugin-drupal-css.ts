import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-drupal-css',
  description: 'Load paths and Tailwind @reference preloads from .info.yml for Drupal CSS built with Vite.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'drupal',
    'css',
    'tailwindcss',
  ],
  links: {
    github: 'https://github.com/heydon-consulting/vite-plugin-drupal',
    npm: 'https://www.npmjs.com/package/vite-plugin-drupal-css',
    website: 'https://github.com/heydon-consulting/vite-plugin-drupal/tree/main/packages/css#readme',
  },
  source: {
    github: 'heydon-consulting/vite-plugin-drupal',
    npm: 'vite-plugin-drupal-css',
  },
})
