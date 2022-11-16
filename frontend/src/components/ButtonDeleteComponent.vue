<template>
  <v-btn @click="deleteOne" color="error" dark large>
    Borrar <v-icon dark right> mdi-delete </v-icon></v-btn
  >
</template>
<script>
export default {
  name: 'ButtonDeleteComponent',

  data: () => ({}),
  methods: {
    deleteOne: function () {
      this.$emit('delOne')
    }
  }
}
</script>
<style scoped>
</style>
