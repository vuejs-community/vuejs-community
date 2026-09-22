import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'motion-studio',
  description: 'Motion Studio: a timeline editor for Motion animations in your running app. Free to install, inspect and edit. Saving to source and agent edits need a Motion Studio subscription.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'motion',
    'animation',
    'editor',
    'studio',
    'timeline',
    'vite-plugin',
    'nextjs',
    'webpack',
  ],
  links: {
    github: 'https://github.com/motiondivision/motion',
    npm: 'https://www.npmjs.com/package/motion-studio',
    website: 'https://motion.dev/studio',
  },
  source: {
    github: 'motiondivision/motion',
    npm: 'motion-studio',
  },
})
