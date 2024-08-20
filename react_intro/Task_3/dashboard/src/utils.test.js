import { getFooterCopy, getFullYear, getLatestNotifications } from './utils'

test('getFullYear returns the current year', () => {
  expect(getFullYear()).toBe(new Date().getFullYear())
})

test('getFooterCopy returns correct string for true argument', () => {
  expect(getFooterCopy(true)).toBe('Holberton School')
})

test('getFooterCopy returns correct string for false argument', () => {
  expect(getFooterCopy(false)).toBe('Holberton School Main Dashboard')
})

test('getLatestNotifications returns the correct string', () => {
  expect(getLatestNotifications()).toBe(
    '<strong>Urgent requirement</strong> - complete by EOD'
  )
})
