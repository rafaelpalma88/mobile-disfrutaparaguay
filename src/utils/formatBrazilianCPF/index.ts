export function formatBrazilianCPF(text: string) {
  // Remove todos os caracteres não numéricos do texto
  const cleanedText = text.replace(/\D/g, '')

  // Aplica a máscara de CPF (XXX.XXX.XXX-XX)
  const formattedText = cleanedText.replace(
    /(\d{0,3})(\d{0,3})(\d{0,3})(\d{0,2})/,
    (match, p1, p2, p3, p4) => {
      let result = ''
      if (p1) result += p1
      if (p2) result += `.${p2}`
      if (p3) result += `.${p3}`
      if (p4) result += `-${p4}`
      return result
    }
  )

  return formattedText
}
