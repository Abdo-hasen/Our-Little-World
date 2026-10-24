import assert from 'node:assert/strict'
import { isEngagementDateValid, normalizeDigits } from '../src/features/journey/scenes/scene1Validation.ts'

// Check 1: Normalization of Eastern Arabic numerals
assert.equal(normalizeDigits('١٣'), '13')
assert.equal(normalizeDigits('٠٣'), '03')
assert.equal(normalizeDigits('٢٠٢٦'), '2026')

// Check 2: Valid engagement date (13/03/2026) with ASCII digits
assert.equal(isEngagementDateValid('13', '03', '2026'), true)
assert.equal(isEngagementDateValid('13', '3', '2026'), true)
assert.equal(isEngagementDateValid(' 13 ', ' 3 ', ' 2026 '), true)

// Check 3: Valid engagement date with Arabic digits
assert.equal(isEngagementDateValid('١٣', '٠٣', '٢٠٢٦'), true)
assert.equal(isEngagementDateValid('١٣', '٣', '٢٠٢٦'), true)

// Check 4: Invalid dates
assert.equal(isEngagementDateValid('14', '03', '2026'), false)
assert.equal(isEngagementDateValid('13', '04', '2026'), false)
assert.equal(isEngagementDateValid('13', '03', '2025'), false)
assert.equal(isEngagementDateValid('', '', ''), false)
assert.equal(isEngagementDateValid('abc', 'def', 'xyz'), false)

console.log('✔ All scene1Validation checks passed successfully.')
