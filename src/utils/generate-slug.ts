export function generateSlug(text: string): string {
  return text
      .toLowerCase() // Converte para minúsculas
      .normalize('NFD') // Remove acentos
      .replace(/[\u0300-\u036f]/g, '') // Remove caracteres especiais (acentos)
      .replace(/[^\w\s]/g, '') // Remove símbolos
      .replace(/\s+/g, '-') // Substitui espaços por hífens
      .replace(/-{2,}/g, '-') // Remove múltiplos hífens seguidos
      .trim(); // Remove espaços no início e no final
}