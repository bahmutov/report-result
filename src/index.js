'use strict'

const hr = require('hr').hr
const reportCrash = require('node-sentry-error-reporter')()
const R = require('ramda')

function reportSuccess (...details) {
  const line = hr.bind(null, '-')
  function report (result) {
    line()
    if (details.length) {
      console.log.apply(console, details)
    } else {
      console.log('SUCCESS')
    }
    if (result) {
      console.log(result)
    }
    line()
  }
  return R.tap(report)
}

function reportFailure (...details) {
  const line = hr.bind(null, 'x')
  function report (err) {
    line()
    if (details.length) {
      console.error.apply(console, details)
    } else {
      console.error('FAILURE')
    }
    if (!err) {
      console.error('Missing error ...')
    } else {
      console.error(err.stack)
      reportCrash(err)
    }
    line()
  }
  return R.tap(report)
}

module.exports = {
  success: reportSuccess,
  failure: reportFailure,
  error: reportFailure // alias
}
