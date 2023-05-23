<script>
import AppHeader from './components/AppHeader.vue'
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
  mounted() {
    // Return "Yu Gi Oh API" call response
    axios.get(this.store.urlAPI).then(response => {
      console.log("The API call was successful 🥳");
      this.store.cardData.push(response.data.data);
      this.store.loadingData = !this.store.loadingData
    }).catch(error => {
      console.error("Something went wrong with the API call 🫤");
      setTimeout(() => {
        this.store.loadingData = !this.store.loadingData
        this.store.errorMsg = true
      }, 1 * 5000);
    })
  }
}
</script>

<template>
  <header class="bg-white">
    <AppHeader />
  </header>
  <main class="mx-auto my-5 bg-white max-w-screen-xl">
    <AppSpinner />
    <AppMain />
    <AppErrorLoad />
  </main>
  <footer class="mx-auto mt-5 pb-2 max-w-screen-xl text-center">
    <AppFooter />
  </footer>
</template>

<style lang="scss" scoped></style>
