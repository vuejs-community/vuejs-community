import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-css-lit',
  description: 'Rollup plugin for importing CSS sources as constructable stylesheets to projects using lit (lit-html and lit-element) or fast-element.',
  icon: 'logos:rollupjs',
  version: '2.1.0',
  category: 'plugin',
  tags: [
    'rollup',
    'plugin',
    'rollup-plugin',
    'lit',
    'lit-css',
    'lit-html',
    'lit-element',
    'fast-element',
    'css',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'prantlf/rollup-plugin-css-lit',
    npm: 'rollup-plugin-css-lit',
  },
  links: {
    github: 'https://github.com/prantlf/rollup-plugin-css-lit',
    npm: 'https://www.npmjs.com/package/rollup-plugin-css-lit',
  },
  stats: {
    downloads: {
      monthly: 136,
      weekly: 24,
    },
  },
})
