import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-carbon8r',
  description: 'Option/Alt-click any element in the browser to open its source in your editor. Works with React 19 (no reliance on _debugSource).',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'react',
    'react-19',
    'jump-to-source',
    'click-to-source',
    'open-in-editor',
    'devtools',
    'dx',
  ],
  source: {
    github: 'carboni-rob/carbon8r',
    npm: 'vite-plugin-carbon8r',
  },
  links: {
    github: 'https://github.com/carboni-rob/carbon8r',
    npm: 'https://www.npmjs.com/package/vite-plugin-carbon8r',
    website: 'https://github.com/carboni-rob/carbon8r#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 789,
      weekly: 5,
    },
  },
})
