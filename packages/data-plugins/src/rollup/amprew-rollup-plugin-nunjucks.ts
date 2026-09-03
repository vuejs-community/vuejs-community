import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@amprew/rollup-plugin-nunjucks',
  description: '[Nunjucks](https://github.com/mozilla/nunjucks#readme) is a templating library by [Mozilla](https://www.mozilla.org/). This Rollup plugin integrates these great features into an easy interface without having to set up all of your templates.',
  version: '0.1.1',
  category: 'plugin',
  tags: [
    'rollup',
    'nunjucks',
    'rollup-plugin',
    'html',
    'templating',
    'mozilla',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/amprew/rollup-plugin-nunjucks',
    npm: 'https://www.npmjs.com/package/@amprew/rollup-plugin-nunjucks',
  },
  stats: {
    downloads: {
      monthly: 36,
      weekly: 12,
    },
  },
})
