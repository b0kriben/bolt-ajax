<template>
    <h1>Új termék rögzítése</h1>
    <form class="w-50 mx-auto" @submit.prevent="bolt.saveProduct(product)">
        <input class="form-control mb-2" type="text" v-model="product.name" placeholder="Termék neve">
        <input class="form-control mb-2" type="text" v-model="product.price" placeholder="Ár">
        <input class="form-control mb-2" type="text" v-model="product.unit" placeholder="Csomagolási egység">
        <input class="form-control mb-2" type="text" v-model="product.desc" placeholder="Termék leírása">
        <input class="form-control mb-2" type="text" v-model.number="product.store" placeholder="Raktárkészlet">
        <input class="btn btn-success" type="submit" value="Mentés">
    </form>
</template>

<script setup>
    import {ref} from 'vue'
    import { useBotStore } from '@/stores/bot';
    const bolt = useBotStore()
    const product = ref({           
            "name": "",
            "unit": "",
            "desc": "",
            "store": "",
            "price": ""})
    
</script>
<style></style>