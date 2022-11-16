<template>
  <v-container>
    <v-card elevation="6">
      <v-form width="70vw" ref="form" v-model="valid" lazy-validation>
        <v-text-field
          v-model="spot"
          disabled
          label="Spot"
          required
        ></v-text-field>

        <v-text-field
          v-model="titleFlop"
          :counter="2"
          :rules="titleRules"
          label="Título"
          required
        ></v-text-field>

        <v-textarea
          hint="Solución teórica"
          full-width
          no-resize
          prepend-icon="mdi-comment"
          height="15vh"
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
          height="15vh"
          v-model="exploit"
          color="teal"
        >
        </v-textarea>

        <v-file-input
          disabled
          :rules="imgRules"
          accept="image/png, image/jpeg, image/bmp"
          placeholder="Pick an image"
          prepend-icon="mdi-cloud-upload"
          label="Imagen"
        ></v-file-input>

        <v-file-input
          disabled
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
        <v-btn color="primary" class="mr-4" @click="back"> Cancel </v-btn>
      </v-form>
    </v-card>
  </v-container>
</template>
<script>
import { updateOneFlop, createFlop } from '../services/flopService'

export default {
  name: 'NewFlopForm',
  data: () => ({
    spot: '',
    valid: true,
    author: localStorage.userId,
    titleFlop: '',
    theory: '',
    exploit: '',
    titleRules: [
      (v) => !!v || 'Title is required',
      (v) => (v && v.length >= 2) || 'Title must be greater than 2 characters'
    ],
    select: '',
    image: '',
    audio: '',
    audRules: [
      (value) =>
        !value ||
        value.size < 15000000 ||
        'Image size should be less than 15 MB!'
    ],
    imgRules: [
      (value) =>
        !value || value.size < 2000000 || 'Image size should be less than 2 MB!'
    ],
    types: ['SRP', '3BET', '4BET']
  }),

  methods: {
    async validate () {
      if (this.mode === 'edit') {
        const flop = {
          spot: this.spotId,
          id: this.flop._id,
          titleFlop: this.titleFlop,
          theory: this.theory,
          exploit: this.exploit,
          audio: this.audio,
          image: this.image
        }
        await updateOneFlop(flop)
        this.$emit('goModeShow')
      }
      if (this.mode === 'create') {
        const spot = {
          spot: this.spotId,
          titleFlop: this.titleFlop,
          theory: this.theory,
          exploit: this.exploit,
          audio: this.audio,
          image: this.image
        }
        await createFlop(spot)
        this.$emit('goModeShow')
      }
    },
    reset () {
      this.$refs.form.reset()
    },
    back () {
      this.$emit('goModeShow')
    },
    fillForm: function () {
      this.titleFlop = this.flop.titleFlop
      this.author = this.flop.author
      this.exploit = this.flop.exploit
      this.theory = this.flop.theory
      this.audio = this.flop.audio
      this.image = this.flop.image
    }
  },
  props: {
    flop: Object,
    mode: String,
    spotId: String
  },
  created () {
    if (this.flop !== undefined) {
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
