import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@dylanlindgren/sn-next-ui-vite',
  description: 'Vite plugins that compile ServiceNow Next Experience UI Framework components: snabbdom JSX transform, SCSS-as-string, and instance-module externals. Shared by the dev (Storybook) and build pipelines.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'servicenow',
    'next-experience',
    'vite',
    'vite-plugin',
    'web-components',
  ],
  source: {
    github: 'dylanlindgren/sn-next-ui',
    npm: '@dylanlindgren/sn-next-ui-vite',
  },
  links: {
    github: 'https://github.com/dylanlindgren/sn-next-ui',
    npm: 'https://www.npmjs.com/package/@dylanlindgren/sn-next-ui-vite',
    website: 'https://github.com/dylanlindgren/sn-next-ui/tree/main/packages/core#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 18,
      weekly: 3,
    },
  },
})
