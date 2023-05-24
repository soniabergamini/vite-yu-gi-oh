<script>
import { store } from '../data/store';
import axios from 'axios';

export default {
    name: "AppSelect",
    data() {
        return {
            store,
            chosenCard: "All"
        }
    },
    computed: {
        // Return cards from archetypes filter
        updateCards() {
            console.log("Chosen card: ", this.chosenCard.trim());
            let urlAPI = 'https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=' + this.chosenCard;
            axios.get(urlAPI).then(response => {
                this.store.cardData = [];
                this.store.cardData.push(response.data.data);
            })
        }
    }
}

</script>

<template>
    <!-- Select -->
    <section class="p-5">
        <!-- <pre>{{ store.archetypesData[0] }}</pre> -->
        <select class="py-1.5 px-1 w-1/6 border rounded" v-model="chosenCard" @change="updateCards">
            <option selected>All</option>
            <option v-for="item in store.archetypesData[0]">{{ item.archetype_name }}</option>
        </select>
    </section>
</template>

<style lang="scss" scoped>
@use '../style/variables.scss' as *;
@use '../style/mixin.scss' as *;
</style>