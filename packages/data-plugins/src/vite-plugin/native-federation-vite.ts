import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'native-federation-vite',
  description: 'Vite plugin that generates a remoteEntry.json compatible with @angular-architects/native-federation, letting Vite remotes (Vue/React/Svelte/Solid) be federated by an Angular shell.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'native-federation',
    'module-federation',
    'microfrontend',
    'micro-frontend',
    'mfe',
    'angular',
    'vue',
    'react',
    'remoteEntry',
  ],
  links: {
    github: 'https://github.com/jonmferreira/native-federation-vite',
    npm: 'https://www.npmjs.com/package/native-federation-vite',
    website: 'https://github.com/jonmferreira/native-federation-vite#readme',
  },
  source: {
    github: 'jonmferreira/native-federation-vite',
    npm: 'native-federation-vite',
  },
})
