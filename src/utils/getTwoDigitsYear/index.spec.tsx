import { getTwoDigitsYear } from '.'

describe('Utils: getTwoDigitsYear', () => {
  const startDateMock = '2024-04-29T22:00:00.000Z'

  it('should convert Date to two yeats digit', () => {
    const value = getTwoDigitsYear(startDateMock)
    expect(value).toBe('24')
  })
})
