<template>
  <v-container>
    <transition name="fade">
      <v-container v-if="editMode == 'show'">
        <v-row class="justify-center">
          <v-col>
            <h1>FLOP</h1>
            <h1>{{ flopData.titleFlop }}</h1>
          </v-col>
        </v-row>
        <v-row height="70vh">
          <v-col cols="6">
            <FlopCardText :flopData="flopData" />
          </v-col>
          <v-col cols="6">
            <FlopCardImg :flopData="flopData" />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4">
            <v-btn large color="success" dark @click="goExamples"
              >Ejemplos
            </v-btn>
          </v-col>
          <v-spacer></v-spacer>
          <v-col cols="4" class="bAdd"> <ButtonAdd @addNew="modeAdd" /> </v-col>
          <v-col cols="4" class="buttons">
            <ButtonModify @modify="modeEdit" />
            <ButtonDelete @delOne="delFlop" />
            <ButtonVolver @getBack="goSpot(sendData.spot)" />
          </v-col>
        </v-row>
      </v-container>
    </transition>
    <transition name="fade">
      <v-container v-if="editMode == 'add'">
        <FormFlop
          :mode="mode"
          :spotId="sendData.spotId"
          @goModeShow="modeShow"
        />
      </v-container>
    </transition>
    <transition name="fade">
      <v-container v-if="editMode == 'edit'">
        <FormFlop
          :mode="mode"
          :flop="flopData"
          :spotId="sendData.spotId"
          @goModeShow="modeShow"
        />
      </v-container>
    </transition>
  </v-container>
</template>

<script>
import FlopCardImg from '../components/FlopCardImg.vue'
import FlopCardText from '../components/FlopCardText.vue'
import ButtonVolver from '../components/ButtonVolverComponent.vue'
import ButtonAdd from '../components/ButtonAddComponent.vue'
import { getOneFlop, deleteFlop } from '../services/flopService.js'
import FormFlop from '../components/NewFlopForm.vue'
import ButtonModify from '../components/ButtonModifyComponent.vue'
import ButtonDelete from '../components/ButtonDeleteComponent.vue'

export default {
  name: 'FlopView',
  components: {
    FlopCardImg,
    FlopCardText,
    ButtonVolver,
    ButtonModify,
    ButtonAdd,
    FormFlop,
    ButtonDelete
  },
  data () {
    return {
      spotData: {},
      flopData: {},
      editMode: 'show',
      mode: ''
    }
  },
  props: {
    sendData: Object
  },
  methods: {
    goMain: function () {
      this.$router.push({ name: 'main' })
    },
    goExamples: function () {
      const sendData = this.sendData
      this.$router.push({ name: 'example', params: { sendData } })
    },
    goSpot: function () {
      const sendData = this.sendData
      this.$router.push({ name: 'spot', params: { sendData } })
    },
    getOneFlop: async function () {
      const response = await getOneFlop(this.sendData)
      this.flopData = response
    },
    modeAdd: function () {
      this.editMode = 'add'
      this.mode = 'create'
    },
    modeShow: async function () {
      await this.getOneFlop()
      this.editMode = 'show'
    },
    modeEdit: function () {
      this.editMode = 'edit'
      this.mode = 'edit'
    },
    delFlop: async function () {
      await deleteFlop(this.sendData)
      this.goSpot()
    }
  },
  created () {
    this.getOneFlop()
  }
}
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  opacity: 1;
  transition: all 0.5s ease-in-out;
}
.fade-enter,
.fade-leave {
  opacity: 0;
}
h1 {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.bAdd {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.buttons {
  display: flex;
  flex-direction: row;
  justify-content: end;
}
</style>
