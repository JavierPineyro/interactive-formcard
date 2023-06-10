// Recieve a String date and format it to MM/YY

export function formatDate(dateValue: string): string {
  if (dateValue == null) return '00/00'

  const separatedValue = dateValue.split('-')
  const year = separatedValue[0].substring(2)
  const month = separatedValue[1]

  return `${month}/${year}`
}
