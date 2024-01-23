import { getDay } from '.'

describe('Utils: getDay', () => {
  const startDateMock = '2024-04-29T22:00:00.000Z'

  it('should convert Date to date number', () => {
    const value = getDay(startDateMock)
    expect(value).toBe('29')
  })
})
