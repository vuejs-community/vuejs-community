import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-njk-frontmatter',
  description: 'Powerful Nunjucks and Frontmatter integration for Vite with smart data merging',
  icon: 'logos:vite-icon',
  version: '1.0.2',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'nunjucks',
    'frontmatter',
    'template-engine',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'vinyardrip/vite-plugin-njk-frontmatter',
    npm: 'vite-plugin-njk-frontmatter',
  },
  links: {
    github: 'https://github.com/vinyardrip/vite-plugin-njk-frontmatter',
    npm: 'https://www.npmjs.com/package/vite-plugin-njk-frontmatter',
  },
  stats: {
    downloads: {
      monthly: 331,
      weekly: 11,
    },
  },
})
