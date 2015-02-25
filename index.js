var emojis = require('./lib/emojis');
var names = require('./lib/names');
var age = require('./lib/age').today;

function Lun(options) {

  this.age = age,
  this.emojis = emojis,
  this.names = names,

  this.whichPhase = function() {
		if (this.age < 1 )                    { return 0 }
		if (this.age >= 1 && this.age < 5)    { return 1 }
		if (this.age >= 5 && this.age < 9)    { return 2 }
		if (this.age >= 9 && this.age < 13)   { return 3 }
		if (this.age >= 13 && this.age < 16)  { return 4 }
  	if (this.age >= 16 && this.age < 20)  { return 5 }
		if (this.age >= 20 && this.age < 22)  { return 6 }
		if (this.age >= 22 && this.age < 25)  { return 7 }
		if (this.age >= 25 && this.age < 29)  { return 8 }
		if (this.age >= 29 && this.age < 30)  { return 0 }
  },

  this.now = function() {
    var phase = this.whichPhase();

    return {
      age: this.age,
      phase: phase,
      emoji: this.emojis[phase],
      name: this.names[phase]
    }
  }
}

module.exports = Lun;
