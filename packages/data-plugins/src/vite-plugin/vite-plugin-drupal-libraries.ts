import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-drupal-libraries',
  description: 'Builds Vite entries from Drupal *.libraries.yml and *.component.yml files.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'drupal',
    'libraries',
    'sdc',
    'components',
  ],
  links: {
    github: 'https://github.com/heydon-consulting/vite-plugin-drupal',
    npm: 'https://www.npmjs.com/package/vite-plugin-drupal-libraries',
    website: 'https://github.com/heydon-consulting/vite-plugin-drupal/tree/main/packages/libraries#readme',
  },
  source: {
    github: 'heydon-consulting/vite-plugin-drupal',
    npm: 'vite-plugin-drupal-libraries',
  },
})
