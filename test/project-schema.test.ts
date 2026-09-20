import assert from 'node:assert/strict'
import { communityProjectSchema } from '../packages/schema/src/types.ts'

const baseProject = {
  name: 'example',
  description: 'Example project',
  icon: '',
  category: 'plugin' as const,
  types: ['vite-plugin'],
  source: {
    github: 'owner/repository',
    npm: 'example',
  },
}

const project = communityProjectSchema.parse({
  ...baseProject,
  links: {
    github: 'https://github.com/owner/repository',
    website: 'hhttps://github.com/owner/repository',
  },
})

assert.equal(project.links?.github, 'https://github.com/owner/repository')
assert.equal(project.links?.website, undefined)

assert.throws(() => communityProjectSchema.parse({
  ...baseProject,
  source: {
    ...baseProject.source,
    github: 'owner/repository#main/packages/plugin',
  },
}))
