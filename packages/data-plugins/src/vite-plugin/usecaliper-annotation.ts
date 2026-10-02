import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@usecaliper/annotation',
  description: 'Build-time annotation plugins for the Inline Edit Tool — stamp source locations onto the DOM so rendered text can be traced back to the file it came from (React, Vue, Svelte, Angular)',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'inline-edit',
    'babel-plugin',
    'vite-plugin',
    'webpack-loader',
    'source-map',
    'cms',
    'preview-deploy',
  ],
  links: {
    github: 'https://github.com/Wisdom132/Pm-tool',
    npm: 'https://www.npmjs.com/package/@usecaliper/annotation',
    website: 'https://github.com/Wisdom132/Pm-tool#readme',
  },
  source: {
    github: 'Wisdom132/Pm-tool',
    npm: '@usecaliper/annotation',
  },
})
