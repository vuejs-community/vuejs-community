import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-spfx',
  description: 'Turn any Vite project into a SharePoint Framework component — AMD bundle, manifest and .sppkg, without Heft or webpack.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'amd',
    'microsoft-365',
    'sharepoint',
    'spfx',
    'vite-plugin',
  ],
  source: {
    github: 'Ayax0/vite-plugin-spfx',
    npm: 'vite-plugin-spfx',
  },
  links: {
    github: 'https://github.com/Ayax0/vite-plugin-spfx',
    npm: 'https://www.npmjs.com/package/vite-plugin-spfx',
    website: 'https://github.com/Ayax0/vite-plugin-spfx#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 23,
      weekly: 3,
    },
  },
})
