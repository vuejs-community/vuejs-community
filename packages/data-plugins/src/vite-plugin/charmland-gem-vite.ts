import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@charmland/gem-vite',
  description: 'The Vite plugin that turns a markdown directory into a prerendered docs site.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'gem',
    'vite',
    'vite-plugin',
    'documentation',
    'prerender',
  ],
  links: {
    github: 'https://github.com/charmbracelet/gem',
    npm: 'https://www.npmjs.com/package/@charmland/gem-vite',
    website: 'https://github.com/charmbracelet/gem/tree/main/packages/vite',
  },
  source: {
    github: 'charmbracelet/gem',
    npm: '@charmland/gem-vite',
  },
})
