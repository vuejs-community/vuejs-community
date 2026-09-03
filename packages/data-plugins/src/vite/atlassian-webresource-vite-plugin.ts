import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@atlassian/webresource-vite-plugin',
  description: 'Auto-generates web-resource definitions from your vite-built code, for usage in an Atlassian product or plugin.',
  version: '0.2.5',
  category: 'plugin',
  tags: [
    'atlassian',
    'vite',
    'vite-plugin',
    'wrm',
    'server',
    'web',
    'webresource',
    'resource',
    'manager',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/@atlassian/webresource-vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 403,
      weekly: 22,
    },
  },
})
