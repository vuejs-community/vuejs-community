import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@regresso/unplugin',
  description: 'Regresso build plugin: tags each component\'s outermost element with data-cwv, writes the build manifest and uploads it.',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'unplugin',
    'webpack',
    'vite',
    'web-vitals',
    'core-web-vitals',
  ],
  links: {
    github: 'https://github.com/RegressoOrg/regresso-sdk',
    npm: 'https://www.npmjs.com/package/@regresso/unplugin',
    website: 'https://github.com/RegressoOrg/regresso-sdk/tree/main/packages/unplugin#readme',
  },
  source: {
    github: 'RegressoOrg/regresso-sdk',
    npm: '@regresso/unplugin',
  },
})
