import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'pi-ele-picker',
  description: 'Pick an element in your running page, describe the change, and send it to a pi session. Ships a Vite dev plugin (browser picker + discovery endpoint) and the matching pi bridge extension.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'pi',
    'pi-package',
    'element-picker',
    'inspector',
    'devtools',
    'ai',
  ],
  links: {
    github: 'https://github.com/Himangguo/pi-ele-picker',
    npm: 'https://www.npmjs.com/package/pi-ele-picker',
    website: 'https://github.com/Himangguo/pi-ele-picker#readme',
  },
  source: {
    github: 'Himangguo/pi-ele-picker',
    npm: 'pi-ele-picker',
  },
})
