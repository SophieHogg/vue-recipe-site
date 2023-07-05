<script setup lang="ts">
import { ref } from "vue";
import { onChangeSelectedTab } from "./helpers";

import Home from "./components/Homepage/Home.vue";
import OptionsMenu from "./components/Navbar/OptionsMenu.vue";

const selectedTab = ref("Home");
</script>

<template lang="pug">
OptionsMenu(@changeSelectedTab="(selected) => onChangeSelectedTab(selectedTab, selected)")
Navbar(@changeSelectedTab="(selected) => onChangeSelectedTab(selectedTab, selected)")
  Home(v-if="selectedTab == 'Home'")
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");
#app {
    width: 100%;
}
* {
    font-family: "Poppins", sans-serif;
}
</style>
