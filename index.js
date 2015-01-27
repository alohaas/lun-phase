var emoji = require('node-emoji');

// prep emojis
var emojis = [
  emoji.get('new_moon'),
  emoji.get('waxing_crescent_moon'),
  emoji.get('first_quarter_moon'),
  emoji.get('moon'),
  emoji.get('full_moon'),
  emoji.get('last_quarter_moon'),
  emoji.get('waning_gibbous_moon'),
  emoji.get('waning_crescent_moon')
];

// prep unicode
var chars = [
  '\u25CF',
  '\u263D',
  '\u263E'
];

// prep names
var names = [
  'New Moon',
  'Waxing Crescent Moon',
  'First Quarter Moon',
  'Waxing Gibbous Moon',
  'Full Moon',
  'Last Quarter Moon',
  'Waning Gibbous Moon',
  'Waning Crescent Moon'
];

module.exports.emojis = emojis;
module.exports.names = names;
module.exports.chars = chars;
