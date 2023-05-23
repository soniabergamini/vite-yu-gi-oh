<script>
import { store } from '../data/store';

export default {
    name: "AppErrorLoad",
    data() {
        return {
            store
        }
    }
}

</script>

<template>
    <!-- Error Loading Cards Section -->
    <section v-if="store.errorMsg">
        <div class="text-white bg-secondaryBlack p-3 h-[50vh]">
            <h2 class="font-bold text-xl">🫤 No cards found </h2>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../style/variables.scss' as *;
@use '../style/mixin.scss' as *;

section>div {
    @include flex()
}
</style>