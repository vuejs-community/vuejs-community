import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@dylanlindgren/sn-next-ui-vite',
  description: 'Vite plugins that compile ServiceNow Next Experience UI Framework components: snabbdom JSX transform, SCSS-as-string, and instance-module externals. Shared by the dev (Storybook) and build pipelines.',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'servicenow',
    'next-experience',
    'vite',
    'vite-plugin',
    'web-components',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/dylanlindgren/sn-next-ui',
    npm: 'https://www.npmjs.com/package/@dylanlindgren/sn-next-ui-vite',
  },
  stats: {
    downloads: {
      monthly: 16,
      weekly: 3,
    },
  },
})
