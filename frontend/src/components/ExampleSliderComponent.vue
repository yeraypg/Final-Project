<template>
  <v-sheet
    class="mx-auto"
    justify-center
    align-center
    center-active="true"
    max-width="24%"
    next-icon="chevron-right-circle"
    color="transparent"
  >
    <v-slide-group multiple show-arrows>
      <v-slide-item
        v-for="(example, index) in examplesData"
        :key="example._id"
        v-slot="{ active }"
      >
        <v-btn
          class="mx-2"
          :input-value="active"
          active-class="success"
          depressed
          rounded
          @click="clickExample(example)"
        >
          {{ index + 1 }}
        </v-btn>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
</template>

<script>
export default {
  name: 'ExampleSliderComponent',
  data: () => ({}),
  props: {
    examplesData: Array
  },
  methods: {
    clickExample: function (dataFromSlide) {
      this.$emit('sendOneExample', dataFromSlide)
    }
  }
}
</script>
