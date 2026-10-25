import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-compelem-sfc',
  description: 'Vite plugin for compelem Single File Components (.ce files) with template, script, style, and cssvar sections.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'compelem',
    'sfc',
    'single-file-component',
    'web-components',
    'custom-elements',
  ],
  links: {
    github: 'https://github.com/holyhigh2/compelem-extension',
    npm: 'https://www.npmjs.com/package/vite-plugin-compelem-sfc',
    website: 'https://github.com/holyhigh2/compelem-extension#readme',
  },
  source: {
    github: 'holyhigh2/compelem-extension',
    npm: 'vite-plugin-compelem-sfc',
  },
})
