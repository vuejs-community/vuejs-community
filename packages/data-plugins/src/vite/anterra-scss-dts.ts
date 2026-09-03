import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@anterra/scss-dts',
  description: 'TypeScript declaration generator for SCSS/CSS modules on a native-speed toolchain (Dart Sass via sass-embedded + Lightning CSS in Rust). Programmatic API, CLI, and Vite plugin; ESM output with declaration source maps.',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'scss',
    'sass',
    'css-modules',
    'typescript',
    'dts',
    'lightningcss',
    'sass-embedded',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/AnterraGG/scss-dts',
    npm: 'https://www.npmjs.com/package/@anterra/scss-dts',
  },
  stats: {
    downloads: {
      monthly: 66,
      weekly: 2,
    },
  },
})
