import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vibelang-unplugin',
  description: 'Compile VibeLang source modules with vibelang in webpack, Rollup, Rolldown, esbuild, Rspack, and Bun',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'vibelang',
    'effect',
    'unplugin',
    'webpack-plugin',
    'rollup-plugin',
    'rolldown-plugin',
    'esbuild-plugin',
    'rspack-plugin',
    'bun-plugin',
  ],
  links: {
    github: 'https://github.com/smithersai/vibelang',
    npm: 'https://www.npmjs.com/package/vibelang-unplugin',
    website: 'https://vibelang.sh',
  },
  source: {
    github: 'smithersai/vibelang',
    npm: 'vibelang-unplugin',
  },
})
