<script setup>
import {useBotStore} from '@/stores/bot.js'

const botStore = useBotStore()
</script>

<template>
  <h1 class="text-center">Termékek</h1>
  <div class="row">
    <div v-for="p in botStore.products" :key="p.id" class="card col-12 col-md-4 col-lg-3">
      <p class="card-title text-center"> {{p.name}}</p>
      <div class="card-body">
        <p class="card-text">{{ p.price }}</p>
      </div>
      <div class="card-footer text-center">
        <button @click="botStore.addToCart(p.id)" class="btn btn-outline-primary w-50">&#128722;</button>
      </div>
    </div>
  </div>
</template>
