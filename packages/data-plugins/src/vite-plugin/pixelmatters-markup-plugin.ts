import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@pixelmatters/markup-plugin',
  description: 'Markup\'s build plugin. Today it stamps data-markup-source on rendered JSX elements, so Markup feedback reaches agents with the file, line and column that rendered it.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'feedback',
    'jsx',
    'markup',
    'pixelmatters',
    'react',
    'rspack',
    'rspack-plugin',
    'unplugin',
    'vite',
    'vite-plugin',
    'webpack',
    'webpack-plugin',
  ],
  links: {
    github: 'https://github.com/Pixelmatters/devtools',
    npm: 'https://www.npmjs.com/package/@pixelmatters/markup-plugin',
    website: 'https://github.com/Pixelmatters/devtools/tree/main/packages/markup-plugin#readme',
  },
  source: {
    github: 'Pixelmatters/devtools',
    npm: '@pixelmatters/markup-plugin',
  },
})
