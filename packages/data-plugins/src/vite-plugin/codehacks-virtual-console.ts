import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@codehacks/virtual-console',
  description: 'DevTools-style console for the places that don\'t have DevTools — iOS WebViews, Android WebViews, any page where console.log goes nowhere.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  source: {
    github: 'codehacks-io/virtual-console',
    npm: '@codehacks/virtual-console',
  },
  links: {
    github: 'https://github.com/codehacks-io/virtual-console',
    npm: 'https://www.npmjs.com/package/@codehacks/virtual-console',
    website: 'https://github.com/codehacks-io/virtual-console#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 2919,
      weekly: 504,
    },
  },
})
