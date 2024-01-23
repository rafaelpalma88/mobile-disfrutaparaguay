import { getMonth } from '.'

describe('Utils: getMonth', () => {
  const startDateMock = '2024-04-29T22:00:00.000Z'

  it('should convert Date to two yeats digit', () => {
    const value = getMonth(startDateMock)
    expect(value).toBe('abr')
  })
})
