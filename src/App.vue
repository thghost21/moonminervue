// JS
<script setup>
import { computed,  } from 'vue'
import { AppState } from './AppState.js'
import { miningService } from './services/MiningService.js';
import { Upgrade } from './models/Upgrade.js';

function mineCheese() {
  miningService.mine()
}
function buyClickUpgrade(upgrade) {
  miningService.buyClickUpgrade(upgrade)
  
}
function buyAutoUpgrade(upgrade) {
  miningService.buyAutoUpgrade(upgrade)
}
setInterval(miningService.autoCheese, 3000)

 const cheese = computed(()=> AppState.cheese)
 const clickUpgrades = computed(()=> AppState.clickUpgrades)
 const autoUpgrades = computed(()=> AppState.autoUpgrades)
 const testComp = computed(()=>{
  
  return AppState.cheese 
 })
 

)

</script>


// HTML
<template>
  <section class="container">
    <div class="row justify-content-center">
      <div class="col-12 d-flex justify-content-center">
        <img type="button" @click="mineCheese()" src="https://png.pngtree.com/png-clipart/20220124/ourmid/pngtree-hand-painted-moon-png-elements-png-image_4273643.png" alt="cheesy moon">
      </div>
      <div class="col-12 d-flex justify-content-center">
        <div class=" bg-dark text-light rounded p-2 my-3 ">
          <span>{{ cheese }}</span>
          <span>{{ testComp }}</span>

        </div>
      </div>
    </div>
  </section>
  <section class="container">
    <div class="row justify-content-center">
      <div class="col-12 ">
        <div class="d-flex  justify-content-between">
          <div v-for="upgrade in clickUpgrades" :key="upgrade.name" class="text-center bg-primary rounded m-2 p-3">
            <h2>{{ upgrade.emoji }}</h2>
            <div class="fw-bold py-4">{{ upgrade.name }}</div>
            <div>Price: ${{ upgrade.price }} </div>
            <div>QTY: {{ upgrade.quantity }} </div>
            <div>Amount mined per click: {{ cheesePerClick }}</div>
            <button v-if="AppState.cheese >= upgrade.price" @click="buyClickUpgrade(upgrade)" class="btn mt-3 btn-warning">Purchase {{ upgrade.name}}</button>
          </div>
          <div v-for="upgrade in autoUpgrades" :key="upgrade.name" class="text-center bg-success rounded m-2 p-3">
            <h2>{{ upgrade.emoji }}</h2>
            <div class="fw-bold py-4">{{ upgrade.name }}</div>
            <div>Price: ${{ upgrade.price }} </div>
            <div>QTY: {{ upgrade.quantity }} </div>
            <div>Amount mined per cycle: {{ upgrade.amount }}</div>
            <button v-if="AppState.cheese >= upgrade.price" @click="buyAutoUpgrade(upgrade)" class="btn mt-3 btn-warning">Purchase {{ upgrade.name}}</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


// styles
<style lang="scss">
@import "./assets/scss/main.scss";
img {
  max-height: 30dvh;
  aspect-ratio: 1/1;
  max-width: 30dvh;
}
</style>