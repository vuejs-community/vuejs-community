import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@codehacks/virtual-console',
  description: 'DevTools-style console for the places that don\'t have DevTools — iOS WebViews, Android WebViews, any page where console.log goes nowhere.',
  version: '0.7.6',
  category: 'plugin',
  tags: [
    'webview',
    'wkwebview',
    'ios',
    'devtools',
    'console',
    'debug',
    'debugging',
    'remote-debugging',
    'repl',
    'object-inspector',
    'mobile',
    'vite',
    'vite-plugin',
    'eruda',
    'vconsole',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/codehacks-io/virtual-console',
    npm: 'https://www.npmjs.com/package/@codehacks/virtual-console',
  },
  stats: {
    downloads: {
      monthly: 2031,
      weekly: 1979,
    },
  },
})
