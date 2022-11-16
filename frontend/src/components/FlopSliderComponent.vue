<template>
  <v-sheet
    class="mx-auto"
    justify-center
    align-center
    center-active="true"
    max-width="80%"
    color="transparent"
  >
    <v-slide-group multiple show-arrows>
      <v-slide-item v-for="flop in flops" :key="flop._id" v-slot="{ active }">
        <v-btn
          class="mx-2"
          :input-value="active"
          active-class="success"
          depressed
          rounded
          @click="clickFlop(flop._id)"
        >
          {{ flop.titleFlop }}
        </v-btn>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
</template>

<script>
export default {
  name: 'FlopSliderComponent',
  data: () => ({}),
  props: {
    flops: Array
  },
  methods: {
    clickFlop: function (flopId) {
      this.$emit('sendOneflop', flopId)
    }
  }
}
</script>
