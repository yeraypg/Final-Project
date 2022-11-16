<template>
  <v-container class="container">
    <v-row heigth="60vh">
      <v-col cols="8" justify-start class="px-0">
        <div class="board">
          <v-img
            :src="example.imageBoard"
            contain
            max-width="100%"
            max-height="100%"
            elevation="10"
          ></v-img>
        </div>
      </v-col>
      <v-col cols="4" justify-center class="pr-0">
        <v-sheet height="100%" class="d-flex justify-center align-center">
          <v-img
            :src="example.imageHand"
            contain
            max-width="95%"
            height="600"
          ></v-img>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'FlopCardImg',

  data: () => ({}),
  props: {
    example: Object
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: space-around;
}
v-card {
  overflow: hidden;
}
.v-img {
  max-width: 100%;
}
.board {
  overflow: hidden;
  width: 1150px;
}
</style>
