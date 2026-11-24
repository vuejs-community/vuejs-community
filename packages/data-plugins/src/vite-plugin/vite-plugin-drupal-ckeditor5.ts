import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@vite-plugin-drupal/ckeditor5',
  description: 'Builds Drupal CKEditor 5 plugins with Vite instead of webpack.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'drupal',
    'ckeditor5',
    'ckeditor',
  ],
  links: {
    github: 'https://github.com/heydon-consulting/vite-plugin-drupal',
    npm: 'https://www.npmjs.com/package/@vite-plugin-drupal/ckeditor5',
    website: 'https://github.com/heydon-consulting/vite-plugin-drupal/tree/main/packages/ckeditor5#readme',
  },
  source: {
    github: 'heydon-consulting/vite-plugin-drupal',
    npm: '@vite-plugin-drupal/ckeditor5',
  },
})
