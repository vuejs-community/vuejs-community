import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-scss-lit',
  description: 'Rollup plugin for importing Sass sources as constructable stylesheets to projects using lit (lit-html and lit-element) or fast-element.',
  icon: 'logos:rollupjs',
  version: '2.1.0',
  category: 'plugin',
  tags: [
    'rollup',
    'plugin',
    'rollup-plugin',
    'lit',
    'lit-css',
    'lit-scss',
    'lit-html',
    'lit-element',
    'fast-element',
    'css',
    'sass',
    'scss',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'prantlf/rollup-plugin-scss-lit',
    npm: 'rollup-plugin-scss-lit',
  },
  links: {
    github: 'https://github.com/prantlf/rollup-plugin-scss-lit',
    npm: 'https://www.npmjs.com/package/rollup-plugin-scss-lit',
  },
  stats: {
    downloads: {
      monthly: 3051,
      weekly: 707,
    },
  },
})
