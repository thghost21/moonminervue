import { AppState } from "@/AppState.js";

class MiningService {
  mine() {
    console.log('mining cheese');
    AppState.cheese += AppState.clickUpgradeBonus
  }
  buyClickUpgrade(upgrade) {
    if (AppState.cheese >= upgrade.price) {
      upgrade.quantity++
      AppState.cheese -= upgrade.price
      AppState.clickUpgradeBonus += upgrade.bonus
      upgrade.amount += upgrade.bonus

    }
  }
  buyAutoUpgrade(upgrade) {
    if (AppState.cheese >= upgrade.price) {
      upgrade.quantity++
      AppState.cheese -= upgrade.price
      AppState.autoUpgradeBonus += upgrade.bonus
      upgrade.amount += upgrade.bonus

    }
  }
  autoCheese() {
    AppState.cheese += AppState.autoUpgradeBonus
  }

}


export const miningService = new MiningService()