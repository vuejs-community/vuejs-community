import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@astrojs/vite-plugin-astro',
  description: 'Vite plugin for the Astro component language.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'astro',
    'withastro',
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/withastro/astro',
    npm: 'https://www.npmjs.com/package/@astrojs/vite-plugin-astro',
    website: 'https://astro.build',
  },
  source: {
    github: 'withastro/astro',
    npm: '@astrojs/vite-plugin-astro',
  },
})
