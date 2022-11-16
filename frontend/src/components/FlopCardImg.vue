<template>
  <v-card class="ml-auto my-auto" width="95%" height="100%" elevation="10">
    <v-img :src="flopData.image" width="100%" height="100%"></v-img>
  </v-card>
</template>

<script>
export default {
  name: 'FlopCardImg',

  data: () => ({}),
  props: {
    flopData: Object
  }
}
</script>

<style scoped>
</style>
