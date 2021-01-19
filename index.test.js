import * as Lib from './lib'

test('spyOn export from', () => {
  const log = jest.spyOn(Lib, 'log')
  console.log('uncalled')
})
