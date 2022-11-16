<template>
  <v-card class="body">
    <div class="text">
      <v-card-text>Flop Card</v-card-text>
    </div>
    <div class="img">
      <v-img
        max-height="1000"
        max-width="1000"
        src="https://img.freepik.com/vector-premium/poquer-casino-baraja-completa-cartas-jugar-al-poquer-al-casino-palos-colores_47243-1731.jpg"
      ></v-img>
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'FlopCardComponent',

  data: () => ({})
}
</script>

<style>
.body {
  display: flex;
  flex-direction: row;
}
</style>
