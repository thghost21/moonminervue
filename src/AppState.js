import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  /**@type {import('@bcwdev/auth0provider-client').Identity} */
  identity: null,
  /** @type {import('./models/Account.js').Account} user info from the database*/
  account: null,
  cheese: 0,
  clickUpgradeBonus: 1,
  autoUpgradeBonus: 0,
  clickUpgrades: [
    {
      name: 'pickaxe',
      price: 5,
      quantity: 1,
      bonus: 1,
      id: 1,
      amount: 1,
      emoji: '⛏️',
    },
    {
      name: 'drill',
      price: 20,
      quantity: 0,
      bonus: 5,
      id: 2,
      amount: 0,
      emoji: '🪛',


    },
  ],
  autoUpgrades: [
    {
      name: 'astronaut',
      price: 1000,
      quantity: 0,
      bonus: 50,
      id: 3,
      amount: 0,
      emoji: '🧑‍🚀',


    },
    {
      name: 'spaceStation',
      price: 10000,
      quantity: 0,
      bonus: 100,
      id: 4,
      amount: 0,
      emoji: '🛰️',

    },
  ]
})

