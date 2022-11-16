<template>
  <v-card
    @click="sendOneSpot(spot)"
    elevation="10"
    outlined
    rounded
    width="10vw"
    height="30vh"
  >
    <v-card-title class="justify-center font-weight-black">{{
      spot.titleSpot
    }}</v-card-title>
    <v-divider></v-divider>
    <v-card-title class="justify-center">Flops</v-card-title>
    <v-container>
      <div class="flops" v-for="flop in spot.flops" :key="flop._id">
        {{ flop.titleFlop }}
      </div>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: 'SpotCardComponent',

  data: () => ({}),
  props: {
    spot: Object
  },
  methods: {
    goSpot: function () {
      this.$router.push({ name: 'spot' })
    },
    sendOneSpot: function (sendData) {
      this.$emit('sendOneSpot', sendData)
    }
  }
}
</script>
<style scoped>
.v-card {
  overflow: auto;
  margin: 10px;
}
.v-container {
  margin-top: 5px;
  overflow: auto;
}

.flops {
  background-color: aliceblue;
  text-align: center;
  border: 1px solid black;
  margin: 2px;
}
.v-card:hover {
  background-color: rgb(233, 244, 253);
}
</style>
