import { getHourAndMinutes } from '.'

describe('Utils: getHourAndMinutes', () => {
  const startDateMock = '2024-04-29T22:00:00.000Z'

  it('should convert Date to two yeats digit', () => {
    const value = getHourAndMinutes(startDateMock)
    expect(value).toBe('19:00')
  })
})
