<template>
  <v-app-bar app color="rgb(106, 162, 236">
    <div class="d-flex align-center">
      <v-img
        alt="Vuetify Logo"
        class="shrink mr-2"
        contain
        src="../assets/logoHeader2.png"
        transition="scale-transition"
        width="350"
      />
    </div>
    <v-spacer></v-spacer>
    <div class="text-center">
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn dark icon v-bind="attrs" v-on="on">
            <v-icon large color="white darken-2"> mdi-dialpad </v-icon>
          </v-btn>
        </template>
        <v-list shaped>
          <v-list-item v-for="(item, index) in items" :key="index">
            <v-list-item-title @click="goMain">{{
              item.title
            }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
  </v-app-bar>
</template>

<script>
export default {
  name: 'HeaderComponent',
  data: () => ({
    items: [{ title: 'Home' }, { title: 'Logout' }, { title: 'Grabar Audio' }]
  }),
  methods: {
    goMain: function () {
      this.$router.push({ name: 'main' })
    }
  }
}
</script>
