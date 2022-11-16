<template>
  <v-container>
    <v-card elevation="6">
      <v-form width="40vw" ref="form" v-model="valid" lazy-validation>
        <v-text-field
          v-model="titleSpot"
          :counter="6"
          :rules="titleRules"
          label="Título"
          required
        ></v-text-field>

        <v-select
          v-model="select"
          :items="types"
          :rules="[(v) => !!v || 'Type is required']"
          label="Tipo de Spot"
          required
        ></v-select>

        <v-textarea
          hint="Solución teórica"
          full-width
          no-resize
          prepend-icon="mdi-comment"
          height="20vh"
          label="Solución teórica"
          v-model="theory"
          color="teal"
        >
        </v-textarea>

        <v-textarea
          hint="Explotaciones"
          label="Explotaciones"
          full-width
          no-resize
          prepend-icon="mdi-comment"
          height="20vh"
          v-model="exploit"
          color="teal"
        >
        </v-textarea>

        <v-file-input
          disabled
          v-model="file"
          :rules="audRules"
          accept="audio/ogg, audio/mpeg"
          placeholder="Pick an audio"
          prepend-icon="mdi-cloud-upload"
          label="Audio"
        ></v-file-input>

        <v-btn
          :disabled="!valid"
          color="success"
          class="mr-4"
          @click="validate"
        >
          Aceptar
        </v-btn>

        <v-btn color="error" class="mr-4" @click="reset"> Resetear Spot </v-btn>
        <v-btn color="primary" class="mr-4" @click="back"> Cancelar </v-btn>
      </v-form>
    </v-card>
  </v-container>
</template>
<script>
import { updateOneSpot, createSpot } from '../services/spotService'

export default {
  name: 'NewSpotForm',
  data: () => ({
    valid: true,
    author: localStorage.userId,
    titleSpot: '',
    theory: '',
    exploit: '',
    titleRules: [
      (v) => !!v || 'Title is required',
      (v) => (v && v.length >= 6) || 'Title must be greater than 6 characters'
    ],
    select: '',
    audio: '',
    audRules: [
      (value) =>
        !value ||
        value.size < 15000000 ||
        'Image size should be less than 15 MB!'
    ],
    types: ['SRP', '3BET', '4BET'],
    file: null
  }),

  methods: {
    async validate () {
      if (this.mode === 'edit') {
        const spot = {
          id: this.spot._id,
          titleSpot: this.titleSpot,
          theory: this.theory,
          exploit: this.exploit,
          type: this.select,
          audio: this.audio
        }
        await updateOneSpot(spot)
        this.$emit('goModeShow')
      }
      if (this.mode === 'create') {
        const spot = {
          titleSpot: this.titleSpot,
          theory: this.theory,
          exploit: this.exploit,
          type: this.select,
          audio: this.audio
        }
        await createSpot(spot)
        this.$emit('goModeShow')
      }
    },
    reset () {
      this.$refs.form.reset()
    },
    fillForm: function () {
      this.titleSpot = this.spot.titleSpot
      this.type = this.spot.type
      this.exploit = this.spot.exploit
      this.theory = this.spot.theory
      this.audio = this.spot.audio
    },
    back: function () {
      this.$emit('goModeShow')
    }
  },

  props: {
    spot: Object,
    mode: String
  },
  created () {
    if (this.spot !== undefined) {
      this.fillForm()
    }
  }
}
</script>
<style scoped>
* {
  margin: 20px;
}
</style>
