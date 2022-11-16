<template>
  <v-card raised elevation="6" rounded color="transparent" class="card">
    <v-card-title font-weight-black>Selecciona Spot</v-card-title>
    <v-radio-group
      v-model="selected"
      mandatory
      column
      false
      row
      true
      @change="changeSelectFilter"
    >
      <v-radio label="SRP" value="SRP"></v-radio>
      <v-radio label="3BET" value="3BET"></v-radio>
      <v-radio label="4BET" value="4BET"></v-radio>
    </v-radio-group>
  </v-card>
</template>

<script>
export default {
  name: 'SelectTypeSpotComponent',

  data: () => ({
    selected: ''
  }),
  props: {},
  methods: {
    changeSelectFilter () {
      this.$emit('changeSelectFilter', this.selected)
    }
  }
}
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
