# lun-phase

You may receive:
1. A numerical value representing the moon's age in the current lunation
2. A numerical value representing the moon's phase
3. An emoji representing the moon's phase
4. The name of the current phase as a string


## Usage

```
  var Lun = require("lun-phase");
  var lun = new Lun();

  console.log(lun.now());
```
will return an object that looks something like this
Your values will likely be different based on what day it is.

```
  {
    age: 6,
    phase: 2,
    emoji: ':first_quarter_moon:',
    name: 'First Quarter Moon'
  }
```

## Notes

We deal in whole numbers because this is a wholly unscientific endeavor.

Thank you Ben Daglish for providing moon phase calculation methods.
- http://www.ben-daglish.net/moon.shtml
