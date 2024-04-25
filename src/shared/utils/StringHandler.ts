export const priceSerializer = (price: string | number) => {
  if (!Number.isNaN(price)) {
    return Number(price)?.toLocaleString('ru-RU', {style: 'currency', currency: 'rub', maximumSignificantDigits: 6})
  }
}