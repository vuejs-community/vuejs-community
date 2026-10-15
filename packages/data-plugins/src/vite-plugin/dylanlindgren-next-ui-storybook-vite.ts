import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@dylanlindgren/next-ui-storybook-vite',
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
  links: {
    github: 'https://github.com/dylanlindgren/next-ui-storybook',
    npm: 'https://www.npmjs.com/package/@dylanlindgren/next-ui-storybook-vite',
    website: 'https://github.com/dylanlindgren/next-ui-storybook/tree/main/packages/vite#readme',
  },
  source: {
    github: 'dylanlindgren/next-ui-storybook',
    npm: '@dylanlindgren/next-ui-storybook-vite',
  },
})
