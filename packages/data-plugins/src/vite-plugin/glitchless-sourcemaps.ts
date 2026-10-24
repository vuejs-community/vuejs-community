import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'glitchless-sourcemaps',
  description: 'Upload a web game\'s source maps to Glitchless, so errors from the minified build show the original function, file and line, and group the same in every build. A CLI for CI and a Vite plugin.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'source-maps',
    'sourcemaps',
    'game-observability',
    'error-tracking',
    'gamedev',
    'game-development',
    'web-games',
    'vite',
    'vite-plugin',
    'threejs',
    'phaser',
  ],
  links: {
    github: 'https://github.com/glitchless-gg/glitchless',
    npm: 'https://www.npmjs.com/package/glitchless-sourcemaps',
    website: 'https://www.glitchless.gg',
  },
  source: {
    github: 'glitchless-gg/glitchless',
    npm: 'glitchless-sourcemaps',
  },
})
