<template>
  <h1 class="text-center">Kosár</h1>
    <p v-if="Object.entries(botStore.cart).length < 1"> Üres a kosár!</p>
    <table v-else>
      <tr v-for="p in botStore.cart"> 
        <td>{{ p.key }}</td>
      </tr>
    </table>
</template>

<script setup>
  import {useBotStore} from '@/stores/bot.js'
  const botStore = useBotStore()

</script>