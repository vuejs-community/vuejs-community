import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-drupal-npm-libraries',
  description: 'Copies prebuilt files from npm packages into the Vite build for Drupal libraries.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'drupal',
    'npm',
    'libraries',
  ],
  links: {
    github: 'https://github.com/heydon-consulting/vite-plugin-drupal',
    npm: 'https://www.npmjs.com/package/vite-plugin-drupal-npm-libraries',
    website: 'https://github.com/heydon-consulting/vite-plugin-drupal/tree/main/packages/vite-plugin-drupal-npm-libraries#readme',
  },
  source: {
    github: 'heydon-consulting/vite-plugin-drupal',
    npm: 'vite-plugin-drupal-npm-libraries',
  },
})
