export class Upgrade {
  constructor(data) {
    this.name = data.name
    this.price = data.price
    this.quantity = data.quantity
    this.bonus = data.bonus
    this.id = data.id
    this.amount = 1
    this.emoji = data.emoji
  }
}