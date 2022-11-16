<template>
  <v-btn @click="goEdit" color="success" dark large>
    Editar <v-icon dark right> mdi-pencil </v-icon></v-btn
  >
</template>
<script>
export default {
  name: 'ButtonModifyComponent',

  data: () => ({}),
  methods: {
    goEdit () {
      this.$emit('modify')
    }
  }
}
</script>
<style scoped>
</style>
