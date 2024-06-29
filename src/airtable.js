// src/airtable.js
const AIRTABLE_API_KEY =
  'patWQdDsaJ0uE5U4C.de473acdff28b5f1f8b2475f3b1da16b1fc01cdd5b47e335c4bd3ae9f62ae39c'

var Airtable = require('airtable')
Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: AIRTABLE_API_KEY
})
var base = Airtable.base('appMKHjiu42kizaG5')

module.exports = base
