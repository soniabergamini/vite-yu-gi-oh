<script>
import { store } from '../data/store';

export default {
    name: "AppSelect",
    data() {
        return {
            store,
            chosenCard: "All"
        }
    },
    methods: {
        updateCards() {
            console.log("Chosen card: ", this.chosenCard)
        }
    }
}

</script>

<template>
    <!-- Select -->
    <section class="p-5">
        <!-- <pre>{{ store.archetypesData[0] }}</pre> -->
        <select class="py-1.5 px-1 w-1/6 border rounded" v-model="chosenCard" @change="updateCards()">
            <option selected>All</option>
            <option v-for="item in store.archetypesData[0]">{{ item.archetype_name }}</option>
        </select>
    </section>
</template>

<style lang="scss" scoped>
@use '../style/variables.scss' as *;
@use '../style/mixin.scss' as *;
</style>