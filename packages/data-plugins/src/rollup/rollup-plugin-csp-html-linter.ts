import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-csp-html-linter',
  description: 'A Rollup plugin to lint your HTML for Content Security Policy Violations.',
  icon: 'logos:rollupjs',
  version: '1.0.5',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'rollup',
    'lint',
    'csp-html-linter',
    'rollup-plugin-csp-html-linter',
    'content security policy html linting',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'mdownes/rollup-plugin-csp-html-linter',
    npm: 'rollup-plugin-csp-html-linter',
  },
  links: {
    github: 'https://github.com/mdownes/rollup-plugin-csp-html-linter',
    npm: 'https://www.npmjs.com/package/rollup-plugin-csp-html-linter',
  },
  stats: {
    downloads: {
      monthly: 11,
      weekly: 2,
    },
  },
})
