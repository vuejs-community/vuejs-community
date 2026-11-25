import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'sepal',
  description: 'Native Svelte apps, drawn by Blitz: a Svelte custom renderer for the Blitz HTML/CSS engine, its Vite preset and the sepal command',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'svelte',
    'blitz',
    'desktop',
    'native',
    'renderer',
    'gui',
    'vite',
    'vite-plugin',
    'svelte-blitz',
  ],
  links: {
    github: 'https://github.com/etherCorps/sepal',
    npm: 'https://www.npmjs.com/package/sepal',
    website: 'https://github.com/etherCorps/sepal#readme',
  },
  source: {
    github: 'etherCorps/sepal',
    npm: 'sepal',
  },
})
