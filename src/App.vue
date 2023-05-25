<script>
import AppHeader from './components/AppHeader.vue'
import AppSelect from './components/AppSelect.vue'
import AppSpinner from './components/AppSpinner.vue'
import AppMain from './components/AppMain.vue'
import AppErrorLoad from './components/AppErrorLoad.vue'
import AppFooter from './components/AppFooter.vue'

import { store } from './data/store';
import axios from 'axios';

export default {
  name: "App",
  components: {
    AppHeader,
    AppSelect,
    AppMain,
    AppErrorLoad,
    AppSpinner,
    AppFooter
  },
  data() {
    return {
      store
    }
  },
  methods: {
    // Return cards data from "Yu Gi Oh API" call
    getAllCards() {
      axios.get(this.store.urlAPI).then(response => {
        // console.log("The API call was successful 🥳");
        this.store.cardData.push(response.data.data);
        this.store.loadingData = false
      }).catch(error => {
        console.error("🫤 Something went wrong with the API call: ", error);
        setTimeout(() => {
          this.store.loadingData = false
          this.store.errorMsg = true
        }, 1 * 5000);
      })
    },
    // Return archetypes list from "Yu Gi Oh Archetypes API" call
    getArchetypesList() {
      axios.get(this.store.urlArchetypesList).then(response => {
        // console.log("The API call for Archetypes List was successful 🥳");
        this.store.archetypesData.push(response.data);
        this.store.loadingData = false
      })
    }
  },
  mounted() {
    this.getAllCards(),
      this.getArchetypesList()
  }
}
</script>

<template>
  <header class="bg-white">
    <AppHeader />
  </header>
  <main class="mx-auto max-w-screen-xl">
    <AppSelect />
    <section class="mx-auto my-1 bg-white max-w-screen-xl">
      <AppSpinner />
      <AppMain />
      <AppErrorLoad />
    </section>
  </main>

  <footer class="mx-auto mt-5 pb-2 max-w-screen-xl text-center">
    <AppFooter />
  </footer>
</template>

<style lang="scss" scoped></style>
