<template>
  <v-btn @click="goNew" small class="mx-2" fab dark color="success">
    <v-icon dark> mdi-plus </v-icon>
  </v-btn>
</template>
<script>
export default {
  name: 'ButtonAddComponent',

  data: () => ({}),
  methods: {
    goNew () {
      this.$emit('addNew')
    }
  }
}
</script>
<style scoped>
</style>
