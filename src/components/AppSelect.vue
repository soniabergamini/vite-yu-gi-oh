<script>
import { store } from '../data/store';
import axios from 'axios';

export default {
    name: "AppSelect",
    data() {
        return {
            store,
            chosenCard: "All",
            urlUpdateAPI: ''
        }
    },
    computed: {
        // Return only cards of the selected archetype
        updateCards() {
            this.store.loadingData = true;
            this.store.errorMsg = false;
            this.urlUpdateAPI = this.chosenCard == "All" ? this.store.urlAPI : this.store.urlArchetypesFilter + this.chosenCard
            // API call to update cards
            axios.get(this.urlUpdateAPI).then(response => {
                this.store.cardData = [];
                this.store.cardData.push(response.data.data);
                this.store.loadingData = false
            }).catch(error => {
                console.error("🫤 Something went wrong with the API call: ", error);
                setTimeout(() => {
                    this.store.loadingData = false
                    this.store.errorMsg = true
                }, 1 * 5000);
            })
        }
    }
}

</script>

<template>
    <!-- Select Menu with card archetypes options -->
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