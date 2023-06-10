// Receive a card number and add 0's to fullfil it

export function formatCardNumber(card: number) {
  const FILLER = '0'
  const formattedCardNumber = String(card).padEnd(16, FILLER)
  const separatedCardNumber = formattedCardNumber.match(/.{1,4}/g)?.join(' ')
  return separatedCardNumber
}
