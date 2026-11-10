import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'react-memory-leak-detector',
  description: 'Dev-only React memory-leak detector. A Vite, Next.js or Babel plugin tags each component and hook with a named marker; a small runtime uses WeakRef + FinalizationRegistry to warn in the console, and emit events, when an unmounted component is still held i',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'react',
    'memory-leak',
    'leak-detection',
    'heap-snapshot',
    'nextjs',
    'vite',
    'vite-plugin',
    'babel-plugin',
    'devtools',
    'weakref',
    'finalizationregistry',
    'debugging',
  ],
  links: {
    github: 'https://github.com/mvladm14/react-memory-leak-detector',
    npm: 'https://www.npmjs.com/package/react-memory-leak-detector',
    website: 'https://github.com/mvladm14/react-memory-leak-detector#readme',
  },
  source: {
    github: 'mvladm14/react-memory-leak-detector',
    npm: 'react-memory-leak-detector',
  },
})
