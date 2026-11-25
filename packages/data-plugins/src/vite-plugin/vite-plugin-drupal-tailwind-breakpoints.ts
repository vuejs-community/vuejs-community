import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-drupal-tailwind-breakpoints',
  description: 'Writes a Drupal theme\'s breakpoints.yml from Tailwind\'s breakpoints.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'drupal',
    'tailwindcss',
    'breakpoints',
  ],
  links: {
    github: 'https://github.com/heydon-consulting/vite-plugin-drupal',
    npm: 'https://www.npmjs.com/package/vite-plugin-drupal-tailwind-breakpoints',
    website: 'https://github.com/heydon-consulting/vite-plugin-drupal/tree/main/packages/tailwind-breakpoints#readme',
  },
  source: {
    github: 'heydon-consulting/vite-plugin-drupal',
    npm: 'vite-plugin-drupal-tailwind-breakpoints',
  },
})
