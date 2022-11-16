<template>
  <v-card>
    <v-card-title class="title justify-center">SignUp</v-card-title>
    <v-card-text>
      <v-form>
        <v-text-field
          v-model="userName"
          label="Username"
          prepend-icon="mdi-lock"
        >
        </v-text-field>
        <v-text-field
          v-model="email"
          label="Email"
          prepend-icon="mdi-account-circle"
        >
        </v-text-field>
        <v-text-field
          v-model="password"
          :type="showPassword ? 'text' : 'password'"
          label="Password"
          prepend-icon="mdi-lock"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="showPassword = !showPassword"
          :rules="passwordRules"
        >
        </v-text-field>
        <v-text-field
          v-model="checkPassword"
          :type="showPassword ? 'text' : 'password'"
          label="Password"
          prepend-icon="mdi-lock"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="showPassword = !showPassword"
        >
        </v-text-field>
      </v-form>
    </v-card-text>
    <v-card-actions class="justify-center">
      <v-btn dark @click="changeLogin" class="ma-4">Go to Login</v-btn>
      <v-btn color="primary" @click="sendSignUp" ma-4>SignUp</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { signUp } from '../services/userService.js'

export default {
  name: 'SignUp',

  data () {
    return {
      showPassword: false,
      password: '',
      checkPassword: '',
      email: '',
      userName: ''
    }
  },
  methods: {
    changeLogin: function () {
      this.$emit('changeComponent')
    },
    sendSignUp: async function () {
      const sendData = {
        name: this.userName,
        email: this.email,
        password: this.password
      }
      const response = await signUp(sendData)
      localStorage.token = response.token
      localStorage.email = response.email
      localStorage.rol = response.rol
      console.log(localStorage)
      this.$router.push({ name: 'main' })
    }
  }
}
</script>
<style scoped>
.title {
  font-size: 2em !important;
}
</style>
