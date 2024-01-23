import { limitLetters } from '.'

describe('Utils: limitLetters', () => {
  const text = 'Example text'

  it('should convert Date to two yeats digit', () => {
    const value = limitLetters(text, 5)
    expect(value).toBe('Examp...')
  })
})
