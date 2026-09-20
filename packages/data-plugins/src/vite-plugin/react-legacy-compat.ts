import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'react-legacy-compat',
  description: 'Vite and webpack 5 plugin restoring findDOMNode for legacy React dependencies (react-transition-group, react-quill, ...) under React 19+, without modifying their source.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'react',
    'react19',
    'vite',
    'vite-plugin',
    'webpack',
    'webpack-plugin',
    'finddomnode',
    'find-dom-node',
    'compatibility',
    'migration',
    'react-transition-group',
    'react-quill',
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
