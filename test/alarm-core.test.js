var mm = require('@yodaos/mm')
var AlarmCore = require('../alarm-core.js')

var test = mm.test

test('test alarm-core: getRepeatOption', (t) => {
  t.plan(1)
  var mockAlarmData = {
    repeat: '5',
    dayofyear_on: '08-08'
  }
  var option = AlarmCore.prototype.getRepeatOption(mockAlarmData)
  t.strictEqual(option, '08 08', 'option should be: 08 08.')
})
