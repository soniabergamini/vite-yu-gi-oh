<script>
import { store } from '../data/store';

export default {
    name: "AppCardNum",
    data() {
        return {
            store
        }
    }
}

</script>

<template>
    <div class="text-white bg-secondaryBlack p-3 mr-[1em]">
        <h2 class="font-bold text-lg md:text-xl">Found {{ store.cardData[0].length }} cards</h2>
    </div>
</template>

<style lang="scss" scoped>
@use '../style/variables.scss' as *;
@use '../style/mixin.scss' as *;
</style>