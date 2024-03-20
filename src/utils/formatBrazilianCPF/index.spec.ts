import { formatBrazilianCPF } from '.'

describe('formatCPF', () => {
  it('should format a string to CPF pattern', () => {
    const input = '12345678901'
    const output = formatBrazilianCPF(input)
    expect(output).toEqual('123.456.789-01')
  })

  it('should handle empty string', () => {
    const input = ''
    const output = formatBrazilianCPF(input)
    expect(output).toEqual('')
  })

  it('should handle short string', () => {
    const input = '12345'
    const output = formatBrazilianCPF(input)
    expect(output).toEqual('123.45')
  })
})
