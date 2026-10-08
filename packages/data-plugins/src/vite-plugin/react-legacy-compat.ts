import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'react-legacy-compat',
  description: 'Restore ReactDOM.findDOMNode under React 19 for legacy dependencies (react-transition-group, react-quill, react-draggable, ...) without patching node_modules. Works with Next.js (Turbopack + webpack), Vite and webpack 5.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'react',
    'react19',
    'react-19',
    'findDOMNode',
    'finddomnode',
    'find-dom-node',
    'nextjs',
    'next',
    'turbopack',
    'vite',
    'vite-plugin',
    'webpack',
    'webpack-plugin',
    'compatibility',
    'migration',
    'react-transition-group',
    'react-quill',
    'react-draggable',
  ],
  links: {
    github: 'https://github.com/infinitybuddha29/react-legacy-compat',
    npm: 'https://www.npmjs.com/package/react-legacy-compat',
    website: 'https://github.com/infinitybuddha29/react-legacy-compat#readme',
  },
  source: {
    github: 'infinitybuddha29/react-legacy-compat',
    npm: 'react-legacy-compat',
  },
})
