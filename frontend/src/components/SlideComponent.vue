<template>
  <div class="text-center">
    <v-pagination
      v-model="slideSelect"
      :length="slideData"
      circle
      prev-icon="mdi-menu-left"
      next-icon="mdi-menu-right"
    ></v-pagination>
  </div>
</template>

<script>
export default {
  name: 'SlideComponent',
  data () {
    return {
      slideSelect: '1',
      slideData: '15'
    }
  }
}
</script>

<style scoped>
</style>
