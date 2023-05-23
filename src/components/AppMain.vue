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
    <!-- Cards Section -->
    <section v-if="store.cardData.length > 0 && !store.errorMsg" class="p-3 md:p-12 break-words">

        <!-- Title -->
        <div class="text-white bg-secondaryBlack p-3">
            <pre>{{ store.cardData[0] }}</pre>
            <h2 class="font-bold text-lg md:text-xl">Found {{ store.cardData[0].length }} cards</h2>
        </div>

        <!-- All cards -->
        <section class="flex-wrap gap-[0.5em]">
            <div v-for="item in store.cardData[0]"
                class="w-[calc(100%/2-1em)] md:w-[calc(100%/4-1em)] lg:w-[calc(100%/5-1em)] bg-primaryYellow mb-1">
                <img :src="getImgPath(item.card_images[0].image_url_small)" alt="card-img" class="w-full">
                <div class="text-center p-3">
                    <h3 class="font-bold text-white mb-5 text-xs md:text-base">{{ item.name.toUpperCase() }}
                    </h3>
                    <span>{{ item.archetype != undefined ? item.archetype : item.race }}</span>
                </div>
            </div>
        </section>

    </section>
</template>

<style lang="scss" scoped>
@use '../style/variables.scss' as *;
@use '../style/mixin.scss' as *;


section>section {
    @include flex(space-between, stretch)
}
</style>