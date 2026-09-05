import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-spfx',
  description: 'Turn any Vite project into a SharePoint Framework component — AMD bundle, manifest and .sppkg, without Heft or webpack.',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'amd',
    'microsoft-365',
    'sharepoint',
    'spfx',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/Ayax0/vite-plugin-spfx',
    npm: 'https://www.npmjs.com/package/vite-plugin-spfx',
  },
  stats: {
    downloads: {
      monthly: 46,
      weekly: 4,
    },
  },
})
