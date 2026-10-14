import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@nco-studio/web-editor-plugin',
  description: 'Vite and Babel plugin for AI Agent Visual Editor — injects source location metadata for in-browser editing',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'babel-plugin',
    'visual-editing',
    'source-maps',
    'nco-studio',
  ],
  links: {
    github: 'https://github.com/n-co-studio/web-editor',
    npm: 'https://www.npmjs.com/package/@nco-studio/web-editor-plugin',
    website: 'https://github.com/n-co-studio/web-editor/tree/main/packages/dev-plugin#readme',
  },
  source: {
    github: 'n-co-studio/web-editor',
    npm: '@nco-studio/web-editor-plugin',
  },
})
