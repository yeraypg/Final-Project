<template>
  <v-app class="background">
    <HeaderComponent />
    <v-main>
      <transition name="fade">
        <router-view />
      </transition>
    </v-main>
    <FooterComponent />
  </v-app>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'
import FooterComponent from './components/FooterComponent.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent
  },
  data: () => ({
    //
  })
}
</script>

<style scoped>
.background {
  width: 100vw;
  height: 100%;
  background: radial-gradient(
      farthest-side at top left,
      rgba(104, 164, 243, 0.5),
      transparent
    ),
    radial-gradient(
      farthest-side at top right,
      rgba(140, 253, 109, 0.5),
      transparent
    ),
    radial-gradient(
      farthest-side at bottom left,
      rgba(248, 132, 78, 0.5),
      transparent
    ),
    radial-gradient(
      farthest-corner at bottom right,
      rgba(68, 68, 68, 0.5),
      transparent
    );
}

.fade-enter-active,
.fade-leave-active {
  opacity: 1;
  transition: all 0.5s ease-in-out;
}

.fade-enter,
.fade-leave {
  opacity: 0;
}
</style>
