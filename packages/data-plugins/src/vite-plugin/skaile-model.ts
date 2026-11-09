import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@skaile/model',
  description: 'The data model of a skaileup project as two YAML files: loader, checks, CLI and a Vite plugin for Storybook',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'data-model',
    'yaml',
    'schema',
    'seed',
    'storybook',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/skaile-ai/skaile-model',
    npm: 'https://www.npmjs.com/package/@skaile/model',
    website: 'https://github.com/skaile-ai/skaile-model#readme',
  },
  source: {
    github: 'skaile-ai/skaile-model',
    npm: '@skaile/model',
  },
})
