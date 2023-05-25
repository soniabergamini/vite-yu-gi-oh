<script>
import { store } from '../data/store';
import AppCardNum from './AppCardNum.vue'

export default {
    name: "AppMain",
    components: {
        AppCardNum
    },
    data() {
        return {
            store
        }
    }
}

</script>

<template>
    <!-- Cards Section -->
    <section v-if="store.cardData.length > 0 && !store.errorMsg && !this.store.loadingData" class="p-3 md:p-12 break-words">

        <!-- Title with number of cards loaded -->
        <AppCardNum />

        <!-- All cards -->
        <section id="allCardSec" class="flex-wrap gap-[1em]">
            <div v-for="item in store.cardData[0]"
                class="w-[calc(100%/2-1em)] md:w-[calc(100%/4-1em)] lg:w-[calc(100%/5-1em)] bg-primaryYellow mb-1">
                <img :src="item.card_images[0].image_url_small" alt="card-img" class="w-full">
                <div class="text-center p-3">
                    <h3 class="font-bold text-white mb-5 text-xs md:text-base">{{ item.name.toUpperCase() }}
                    </h3>
                    <span>{{ item.archetype }}</span>
                </div>
            </div>
        </section>

    </section>
</template>

<style lang="scss" scoped>
@use '../style/variables.scss' as *;
@use '../style/mixin.scss' as *;


#allCardSec {
    @include flex(flex-start, stretch)
}
</style>