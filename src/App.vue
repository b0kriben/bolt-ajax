<script setup>
import {onMounted} from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import { useBotStore } from '@/stores/bot.js'

const botStore = useBotStore()

onMounted(() =>{
  botStore.loadAll()
})

</script>

<template>
      <div class="container">
        <nav class="text-center">
          <RouterLink class="btn btn-outline-success m-2" to="/">Termékek</RouterLink>
          <RouterLink class="btn btn-outline-success m-2" to="/new">Új termék</RouterLink>
          <RouterLink  class="btn btn-outline-success m-2" to="/cart">Kosár</RouterLink>
        </nav>
          <RouterView />
      </div>
</template>
