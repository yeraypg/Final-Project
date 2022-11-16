<template>
  <v-btn @click="getBack" color="primary" dark large>
    Volver <v-icon dark right> mdi-checkbox-marked-circle </v-icon>
  </v-btn>
</template>
<script>
export default {
  name: 'ButtonVolverComponent',

  data: () => ({}),
  methods: {
    getBack: function () {
      this.$emit('getBack')
    }
  }
}
</script>
<style scoped>
</style>
