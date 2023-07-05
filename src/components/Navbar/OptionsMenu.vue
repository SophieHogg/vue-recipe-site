<script setup lang="ts">
import { ref } from "vue";
import Menubar from "primevue/menubar";
import SearchBar from "./SearchBar.vue";

const selectedTab = ref("Home");

const emit = defineEmits(["changeSelectedTab"]);

export const setSelectedTab = (selected) => {
    selectedTab.value = selected;
    emit("changeSelectedTab", selected);
};

interface menuOption {
    label: string; //at current, all menuOptions MUST have a label
    command?;
    items?: menuOption[];
}

const menuOptions = ref<menuOption[]>([
    {
        label: "Home",
        command: () => {
            setSelectedTab("Home");
        },
    },
    {
        label: "About",
        command: () => {
            setSelectedTab("About");
        },
    },
    {
        label: "Recipes",
        items: [
            {
                label: "Breakfast",
                command: () => {
                    setSelectedTab("Breakfast");
                },
            },
            {
                label: "Lunch",
                command: () => {
                    setSelectedTab("Lunch");
                },
            },
            {
                label: "Dinner",
                command: () => {
                    setSelectedTab("Dinner");
                },
            },
            {
                label: "Dessert",
                command: () => {
                    setSelectedTab("Dessert");
                },
            },
            {
                label: "Snacks",
                command: () => {
                    setSelectedTab("Snacks");
                },
            },
        ],
    },
]);
</script>

<template lang="pug">
Menubar(:model="menuOptions")
  template(#start)
    h3(class="nav-logo-image") Cooking
  template(#end)
    SearchBar
</template>

<style scoped lang="scss">
.nav-logo-image {
    margin-left: 10px;
    margin-right: 20px;
}
.p-menubar.p-component {
    width: 100%;
    padding: 5px;
}
</style>
