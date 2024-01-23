import { firstLetterUppercase } from '.'

describe('Utils: firstLetterUppercase', () => {
  it('should convert first letter to Uppercase', () => {
    const value = firstLetterUppercase('teste')
    expect(value).toBe('Teste')
  })

  it('should return text if a string is null', () => {
    const value = firstLetterUppercase(null)
    expect(value).toBe(null)
  })

  it('should return text if a string is empty', () => {
    const value = firstLetterUppercase('')
    expect(value).toBe('')
  })
})
