'use strict'

/* global describe, it */
describe('report result', () => {
  const report = require('.')
  it('has success', () => {
    report.success('info')('done')
  })
})
