'use strict'

const is = require('check-more-types')
const la = require('lazy-ass')

/* global describe, it */
describe('report result', () => {
  const report = require('.')

  it('has success', () => {
    la(is.fn(report.success))
    report.success('info')('done')
  })

  it('has failure', () => {
    la(is.fn(report.failure))
  })

  it('has error as alias to failure', () => {
    la(is.fn(report.error))
  })

  it('is curried', () => {
    const f = report.success()
    la(is.fn(f))
  })

  it('is tapped', () => {
    const f = report.success()
    const result = f(42)
    la(result === 42)
  })

  it('prints multiple arguments', () => {
    report.success('it worked!', 'my action')(42)
  })
})
