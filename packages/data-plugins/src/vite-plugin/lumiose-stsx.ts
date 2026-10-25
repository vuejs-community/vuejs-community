import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@lumiose/stsx',
  description: 'A Vite plugin for .stsx files (TSX plus raw-CSS <style> blocks, scoped by placement) in React, Solid and other JSX frameworks.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'jsx',
    'react',
    'scoped-css',
    'solid',
    'stsx',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/itsjavi/lumiose',
    npm: 'https://www.npmjs.com/package/@lumiose/stsx',
    website: 'https://github.com/itsjavi/lumiose#readme',
  },
  source: {
    github: 'itsjavi/lumiose',
    npm: '@lumiose/stsx',
  },
})
