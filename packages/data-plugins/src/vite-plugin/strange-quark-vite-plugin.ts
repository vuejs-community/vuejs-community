import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@strange-quark/vite-plugin',
  description: 'Vite dev-server plugin and live-reload launcher for Strange Quark.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'react',
    'hmr',
    'desktop',
    'strange-quark',
  ],
  links: {
    github: 'https://github.com/project-strange-quark/strange-quark',
    npm: 'https://www.npmjs.com/package/@strange-quark/vite-plugin',
    website: 'https://github.com/project-strange-quark/strange-quark#readme',
  },
  source: {
    github: 'project-strange-quark/strange-quark',
    npm: '@strange-quark/vite-plugin',
  },
})
