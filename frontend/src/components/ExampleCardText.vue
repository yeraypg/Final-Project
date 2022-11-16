<template>
  <v-card class="mr-auto my-auto" width="100%" height="100%" elevator="10">
    <v-card-text>{{ text }}</v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'FlopCardtext',
  props: {
    text: String
  }
}
</script>

<style scoped>
.v-card {
  overflow: auto;
}
</style>
