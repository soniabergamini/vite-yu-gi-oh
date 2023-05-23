<script>
import { store } from '../data/store';

export default {
    name: "AppMain",
    data() {
        return {
            store
        }
    },
    methods: {
        getImgPath: function (img) {
            return new URL(img)
        }
    }
}

</script>

<template>
    <!-- Card Section -->
    <section v-if="store.cardData.length > 0" class="p-12">

        <!-- Title -->
        <div class="text-white bg-secondaryBlack p-3">
            <!-- <pre>{{ store.cardData[0] }}</pre> -->
            <h2 class="font-bold text-xl">Found {{ store.cardData[0].length }} cards</h2>
        </div>

        <!-- All cards -->
        <section class="flex justify-between flex-wrap gap-[0.5em]">
            <div v-for="item in store.cardData[0]" class="w-[calc(100%/5-1em)] bg-primaryYellow">
                <img :src="getImgPath(item.card_images[0].image_url_small)"
                    src="https://images.ygoprodeck.com/images/cards_small/34541863.jpg" alt="card-img" class="w-full">
                <div class="text-center p-3">
                    <h3 class="font-bold text-white mb-5">{{ item.name.toUpperCase() }}</h3>
                    <span>{{ item.archetype != undefined ? item.archetype : item.race }}</span>
                </div>
            </div>
        </section>
    </section>
</template>

<style lang="scss" scoped>
@use '../style/variables.scss' as *;
@use '../style/mixin.scss' as *;
</style>