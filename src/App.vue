<script>
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
import AppFooter from './components/AppFooter.vue'

import { store } from './data/store';
import axios from 'axios';

export default {
  name: "App",
  components: {
    AppHeader,
    AppMain,
    AppFooter
  },
  data() {
    return {
      store
    }
  },
  mounted() {
    // Return store in Console
    console.log("This is store:", this.store)

    // Return "Yu Gi Oh API" call response
    axios.get(this.store.urlAPI).then(response => {
      console.log("The API call was successful 🥳");
      this.store.cardData.push(response.data.data);
      setTimeout(() => {
        console.log("API Results: ", this.store.cardData);
      }, 200);
    }).catch(error => { console.error("Something went wrong with the API call 🫤") })
  }
}
</script>

<template>
  <header class="bg-white">
    <AppHeader />
  </header>
  <main class="mx-auto my-5 bg-white max-w-screen-xl">
    <AppMain />
  </main>
  <footer class="mx-auto mt-5 pb-2 max-w-screen-xl text-center">
    <AppFooter />
  </footer>
</template>

<style lang="scss" scoped></style>
