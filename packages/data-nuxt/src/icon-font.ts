import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'icon-font',
  description: 'Automatically generates fonts and custom properties (variables) from a specified folder containing SVG icons, injecting them into pages with live monitoring.',
  category: 'nuxt',
  types: [
    'UI',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/coremyslo/nuxt-icon-font',
    npm: 'https://npmjs.com/package/@coremyslo/nuxt-icon-font',
    website: 'https://github.com/coremyslo/nuxt-icon-font',
  },
  source: {
    github: 'coremyslo/nuxt-icon-font',
    npm: '@coremyslo/nuxt-icon-font',
  },
  stats: {
    stars: 12,
    downloads: {
      monthly: 660,
      weekly: 185,
    },
  },
})
