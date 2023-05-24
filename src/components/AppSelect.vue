<script>
import { store } from '../data/store';

export default {
    name: "AppSelect",
    data() {
        return {
            store,
            testOptions: [
                "A",
                "B",
                "C"
            ]
        }
    }
}

</script>

<template>
    <!-- Select -->
    <section class="p-5">
        <select class="py-1.5 px-1 w-1/6 border rounded">
            <option v-for="item in testOptions">{{ item }}</option>
        </select>

    </section>
</template>

<style lang="scss" scoped>
@use '../style/variables.scss' as *;
@use '../style/mixin.scss' as *;
</style>