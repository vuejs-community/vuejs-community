import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@anterra/scss-dts',
  description: 'TypeScript declaration generator for SCSS/CSS modules on a native-speed toolchain (Dart Sass via sass-embedded + Lightning CSS in Rust). Programmatic API, CLI, and Vite plugin; ESM output with declaration source maps.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  source: {
    github: 'AnterraGG/scss-dts',
    npm: '@anterra/scss-dts',
  },
  links: {
    github: 'https://github.com/AnterraGG/scss-dts',
    npm: 'https://www.npmjs.com/package/@anterra/scss-dts',
    website: 'https://github.com/AnterraGG/scss-dts/tree/main/packages/scss-dts#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 21,
      weekly: 5,
    },
  },
})
