<template>
  <v-container fill-height fluid>
    <v-row class="loginRow">
      <v-spacer></v-spacer>
      <v-col class="imgCol" cols="4">
        <v-img
          position="center"
          class="imgLogin"
          width="100%"
          height="100%"
          src="../assets/logo.png"
        >
        </v-img>
      </v-col>
      <v-col cols="4" class="pl-8">
        <transition name="fade" mode="out-in">
          <component @changeComponent="changeComponent" :is="state"></component>
        </transition>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
  </v-container>
</template>

<script>
import SignUp from '../components/SignUp'
import LoginComponent from '../components/Login'

export default {
  name: 'HomeView',
  components: {
    SignUp,
    LoginComponent
  },
  data () {
    return {
      login: true,
      signUp: false
    }
  },
  methods: {
    changeComponent: function () {
      this.login = !this.login
      this.signUp = !this.signUp
    }
  },
  computed: {
    state: function () {
      if (this.login) return 'LoginComponent'
      return 'SignUp'
    }
  }
}
</script>
<style scoped>
.loginRow {
  align-items: center;
}
.imgCol {
  height: 60vh;
}

.fade-enter-active,
.fade-leave-active {
  opacity: 1;
  transition: all 0.5s ease;
}

.fade-enter,
.fade-leave {
  opacity: 0;
}
</style>
