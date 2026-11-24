import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@vite-plugin-drupal/bootstrap-breakpoints',
  description: 'Writes a Drupal theme\'s breakpoints.yml from Bootstrap\'s grid breakpoints.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'drupal',
    'bootstrap',
    'breakpoints',
  ],
  links: {
    github: 'https://github.com/heydon-consulting/vite-plugin-drupal',
    npm: 'https://www.npmjs.com/package/@vite-plugin-drupal/bootstrap-breakpoints',
    website: 'https://github.com/heydon-consulting/vite-plugin-drupal/tree/main/packages/bootstrap-breakpoints#readme',
  },
  source: {
    github: 'heydon-consulting/vite-plugin-drupal',
    npm: '@vite-plugin-drupal/bootstrap-breakpoints',
  },
})
