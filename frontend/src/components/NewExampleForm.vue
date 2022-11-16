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
          v-model="flop"
          disabled
          label="Flop"
          required
        ></v-text-field>

        <v-textarea
          hint="Texto"
          full-width
          no-resize
          prepend-icon="mdi-comment"
          height="20vh"
          label="Texto"
          v-model="text"
          color="teal"
        >
        </v-textarea>

        <v-file-input
          disabled
          :rules="imgRules"
          accept="image/png, image/jpeg, image/bmp"
          placeholder="Pick an image"
          prepend-icon="mdi-cloud-upload"
          label="Imagen del Board"
        ></v-file-input>

        <v-file-input
          disabled
          :rules="imgRules"
          accept="image/png, image/jpeg, image/bmp"
          placeholder="Pick an image"
          prepend-icon="mdi-cloud-upload"
          label="Imagen de la Mano"
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
import { nextTick } from 'vue'
import { updateOneExample, createExample } from '../services/exampleService'
export default {
  name: 'NewExampleForm',
  data: () => ({
    spot: '',
    flop: '',
    valid: true,
    author: localStorage.userId,
    text: '',
    imageBoard: '',
    imageHand: '',
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
    ]
  }),

  methods: {
    async validate () {
      if (this.mode === 'edit') {
        const flop = {
          id: this.example._id,
          spotId: this.example.spotId,
          flopId: this.example.flopId,
          text: this.text,
          audio: this.audio,
          imageBoard: this.imageBoard,
          imageHand: this.imageHand
        }
        await updateOneExample(flop)
        this.$emit('goModeShow')
      }
      if (this.mode === 'create') {
        const spot = {
          spotId: this.sendData.spotId,
          flopId: this.sendData.flopId,
          text: this.text,
          audio: this.audio,
          imageBoard: this.imageBoard,
          imageHand: this.imageHand
        }
        await createExample(spot)
        nextTick(this.$emit('goModeShow'))
      }
    },
    reset () {
      this.$refs.form.reset()
    },
    back () {
      this.$emit('goModeShow')
    },
    fillForm: function () {
      this.text = this.example.text
      this.imageBoard = this.example.imageBoard
      this.imageHand = this.example.imageHand
      this.audio = this.example.audio
    }
  },
  props: {
    example: Object,
    mode: String,
    sendData: Object
  },
  created () {
    if (this.example !== undefined) {
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
