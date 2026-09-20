import assert from 'node:assert/strict'
import test from 'node:test'
import { projectCategories } from '../packages/schema/src/types.ts'
import { projectCategoryMetadata } from '../shared/constants/category.ts'

test('category metadata is complete and unique', () => {
  const categoryIds = projectCategoryMetadata.map(category => category.id)

  assert.deepEqual(new Set(categoryIds).size, categoryIds.length)
  assert.deepEqual([...categoryIds].sort(), [...projectCategories].sort())
  assert.ok(projectCategoryMetadata.every(category => category.label && category.description))
})
