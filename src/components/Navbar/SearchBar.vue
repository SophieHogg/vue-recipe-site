<script setup lang="ts">
import { ref } from "vue";
import InputText from "primevue/inputtext";

const value = ref("");
</script>

<template lang="pug">
InputText(type="text" v-model="value" placeholder="Search...")
</template>

<style scoped lang="scss">
.p-inputtext.p-component {
    padding: 8px;
    margin-right: 10px;
    @media only screen and (min-width: 300px) and (max-width: 399px) {
        width: 150px;
    }
    @media only screen and (min-width: 400px) and (max-width: 500px) {
        width: 200px;
    }
}
</style>
