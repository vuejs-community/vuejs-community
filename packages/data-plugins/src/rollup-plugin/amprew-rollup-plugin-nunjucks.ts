import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@amprew/rollup-plugin-nunjucks',
  description: '[Nunjucks](https://github.com/mozilla/nunjucks#readme) is a templating library by [Mozilla](https://www.mozilla.org/). This Rollup plugin integrates these great features into an easy interface without having to set up all of your templates.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'nunjucks',
    'rollup-plugin',
    'html',
    'templating',
    'mozilla',
  ],
  source: {
    github: 'amprew/rollup-plugin-nunjucks',
    npm: '@amprew/rollup-plugin-nunjucks',
  },
  links: {
    github: 'https://github.com/amprew/rollup-plugin-nunjucks',
    npm: 'https://www.npmjs.com/package/@amprew/rollup-plugin-nunjucks',
    website: 'https://github.com/amprew/rollup-plugin-nunjucks#readme',
  },
  stats: {
    stars: 3,
    downloads: {
      monthly: 36,
      weekly: 2,
    },
  },
})
