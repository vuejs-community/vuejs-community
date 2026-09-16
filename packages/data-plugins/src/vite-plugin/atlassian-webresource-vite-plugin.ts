import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@atlassian/webresource-vite-plugin',
  description: 'Auto-generates web-resource definitions from your vite-built code, for usage in an Atlassian product or plugin.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  source: {
    npm: '@atlassian/webresource-vite-plugin',
  },
  links: {
    npm: 'https://www.npmjs.com/package/@atlassian/webresource-vite-plugin',
    website: 'https://bitbucket.org/atlassianlabs/fe-server',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 106,
      weekly: 10,
    },
  },
})
