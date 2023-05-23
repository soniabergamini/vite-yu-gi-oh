<script>
export default {
    name: "AppHeader"
}

</script>

<template>
    <section class="p-4">
        <img src="../assets/logo.png" alt="logo-img" class="w-1/12 mr-4">
        <h1 class="text-2xl md:text-4xl">Yu-Gi-Oh Api</h1>
    </section>
</template>

<style lang="scss" scoped>
@use '../style/variables.scss' as *;
@use '../style/mixin.scss' as *;

section {
    @include flex(flex-start)
}
</style>