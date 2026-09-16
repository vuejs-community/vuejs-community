import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-cooked',
  description: 'Vite\'s ?raw gives you uncooked source. This gives you the cooked version — compiled, bundled, and tree-shaken.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'bundle',
    'compile',
    'raw',
    'string',
    'web-worker',
    'inline-worker',
    'iframe',
    'sandbox',
    'code-string',
    'tree-shaking',
    'typescript',
    'esbuild',
    'rollup',
    'script-injection',
  ],
  source: {
    github: 'JaydenV8/vite-plugin-cooked',
    npm: 'vite-plugin-cooked',
  },
  links: {
    github: 'https://github.com/JaydenV8/vite-plugin-cooked',
    npm: 'https://www.npmjs.com/package/vite-plugin-cooked',
    website: 'https://github.com/JaydenV8/vite-plugin-cooked#readme',
  },
  stats: {
    stars: 3,
    downloads: {
      monthly: 185,
      weekly: 22,
    },
  },
})
