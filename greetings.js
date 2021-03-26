const getFlagsValue = require('./flags')

console.log(`Oi ${getFlagsValue('--name')}, ${getFlagsValue('--greeting')}`)

// node greetings --name "Samuel" --greeting "Tudo bem com voçê?"