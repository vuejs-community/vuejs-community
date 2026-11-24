import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@vite-plugin-drupal/sass',
  description: 'Compiles existing Drupal SCSS with Vite the way the Sass CLI did, with partials preloaded from .info.yml.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'drupal',
    'sass',
    'scss',
  ],
  links: {
    github: 'https://github.com/heydon-consulting/vite-plugin-drupal',
    npm: 'https://www.npmjs.com/package/@vite-plugin-drupal/sass',
    website: 'https://github.com/heydon-consulting/vite-plugin-drupal/tree/main/packages/sass#readme',
  },
  source: {
    github: 'heydon-consulting/vite-plugin-drupal',
    npm: '@vite-plugin-drupal/sass',
  },
})
