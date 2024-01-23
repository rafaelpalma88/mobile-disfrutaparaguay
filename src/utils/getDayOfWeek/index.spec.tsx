import { getDayOfWeek } from '.'

describe('Utils: getDayOfWeek', () => {
  const startDateMock = '2024-04-29T22:00:00.000Z'

  it('should convert Date to day of the week', () => {
    const value = getDayOfWeek(startDateMock)
    expect(value).toBe('segunda-feira')
  })
})
