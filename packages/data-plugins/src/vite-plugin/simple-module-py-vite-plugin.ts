import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@simple-module-py/vite-plugin',
  description: 'Vite integration for SimpleModule assets, module imports and generated i18n',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'simple-module',
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/antosubash/simple_module_python',
    npm: 'https://www.npmjs.com/package/@simple-module-py/vite-plugin',
    website: 'https://github.com/antosubash/simple_module_python#readme',
  },
  source: {
    github: 'antosubash/simple_module_python',
    npm: '@simple-module-py/vite-plugin',
  },
})
