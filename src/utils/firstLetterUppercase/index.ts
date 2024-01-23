export function firstLetterUppercase(text: string | null) {
  // Verifica se o texto é uma string vazia ou nulo
  if (!text) return text

  // Converte a primeira letra para maiúscula e mantém o restante do texto em minúscula
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()
}
