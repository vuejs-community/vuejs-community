import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'mobx-react-plugin',
  description: 'Wraps React components in `observer`, marks them "use no memo" so React Compiler leaves them to MobX, and turns async methods of observable classes into flows.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'mobx',
    'babel-plugin',
    'vite-plugin',
    'observer',
    'react-compiler',
    'flow',
    'react-native',
    'metro',
  ],
  links: {
    github: 'https://github.com/mobxjs/mobx',
    npm: 'https://www.npmjs.com/package/mobx-react-plugin',
    website: 'https://mobx.js.org/',
  },
  source: {
    github: 'mobxjs/mobx',
    npm: 'mobx-react-plugin',
  },
})
