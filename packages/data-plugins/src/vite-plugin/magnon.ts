import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'magnon',
  description: 'Ultra-high performance Rust-powered TypeScript/JSX compiler, batch transformer and Vite plugin',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'compiler',
    'typescript',
    'jsx',
    'react',
    'vite',
    'vite-plugin',
    'rust',
    'swc',
    'oxc',
    'turbopack',
    'rspack',
  ],
  links: {
    github: 'https://github.com/aminfathullah/magnon',
    npm: 'https://www.npmjs.com/package/magnon',
    website: 'https://github.com/aminfathullah/magnon#readme',
  },
  source: {
    github: 'aminfathullah/magnon',
    npm: 'magnon',
  },
})
