<template>
  <v-container>
    <transition name="fade">
      <v-container v-if="editMode == 'show'">
        <v-row>
          <v-col cols="2" clas="d-flex justify-start">
            <v-card-title>Spot: {{ spotData.titleSpot }}</v-card-title>
          </v-col>
          <v-col cols="8" align-self="center"
            ><FlopSliderComponent
              :flops="spotData.flops"
              @sendOneflop="clickFlop"
          /></v-col>
          <v-col cols="2" class="d-flex justify-end"
            ><v-card-title>Type: {{ spotData.type }}</v-card-title>
          </v-col>
        </v-row>
        <v-row>
          <v-card elevation="6" height="60vh">
            <v-card-title font-weight-medium>Solución Teórica</v-card-title>
            <v-card-text> {{ spotData.theory }} </v-card-text>
            <v-card-title font-weight-medium>Explotación</v-card-title>
            <v-card-text> {{ spotData.exploit }}</v-card-text>
          </v-card></v-row
        >
        <v-row class="buttons">
          <v-col cols="4" class="d-flex justify-start">
            <button-share />
          </v-col>
          <v-col cols="4" class="d-flex justify-center"
            ><ButtonAdd @addNew="modeAdd"
          /></v-col>
          <v-col cols="4" class="d-flex justify-end"
            ><ButtonModify @modify="modeEdit" />
            <ButtonDelete @delOne="delSpot" />
            <ButtonVolver @getBack="goMain"
          /></v-col>
        </v-row>
      </v-container>
    </transition>
    <transition name="fade">
      <v-container class="form" v-if="editMode == 'edit'">
        <SpotForm :mode="mode" :spot="spotData" @goModeShow="modeShow" />
        <ButtonVolver />
      </v-container>
    </transition>
    <transition name="fade">
      <v-container class="form" v-if="editMode == 'add'">
        <FlopForm :mode="mode" :spotId="spotData._id" @goModeShow="modeShow" />
        <ButtonVolver />
      </v-container>
    </transition>
  </v-container>
</template>

<script>
import FlopSliderComponent from '../components/FlopSliderComponent.vue'
import { getOneSpot, deleteSpot } from '../services/spotService'
import ButtonAdd from '../components/ButtonAddComponent.vue'
import ButtonVolver from '../components/ButtonVolverComponent.vue'
import ButtonModify from '../components/ButtonModifyComponent.vue'
import ButtonDelete from '../components/ButtonDeleteComponent.vue'
import ButtonShare from '../components/ButtonShareComponent.vue'
import FlopForm from '../components/NewFlopForm.vue'
import SpotForm from '../components/NewSpotForm.vue'

export default {
  name: 'SpotView',
  data () {
    return {
      spotData: {},
      editMode: 'show',
      mode: ''
    }
  },
  components: {
    FlopSliderComponent,
    ButtonAdd,
    ButtonVolver,
    ButtonModify,
    ButtonDelete,
    ButtonShare,
    FlopForm,
    SpotForm
  },
  methods: {
    goMain: function () {
      this.$router.push({ name: 'main' })
    },
    clickFlop: function (flopId) {
      const sendData = this.sendData
      sendData.flopId = flopId
      this.$router.push({ name: 'flop', params: { sendData } })
    },
    modeAdd: function () {
      this.editMode = 'add'
      this.mode = 'create'
    },
    getOneSpot: async function () {
      const response = await getOneSpot(this.sendData.spotId)
      this.spotData = response
    },
    modeEdit: function () {
      this.editMode = 'edit'
      this.mode = 'edit'
    },
    modeShow: async function () {
      await this.getOneSpot()
      this.editMode = 'show'
    },
    delSpot: async function () {
      await deleteSpot(this.spotData._id)
      this.$router.push({ name: 'main' })
    }
  },
  props: {
    sendData: Object
  },
  created () {
    this.getOneSpot()
  }
}
</script>
<style scoped>
.form * {
  margin: 20px;
  padding: 5px;
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

.v-card {
  margin-bottom: 10px;
  overflow: auto;
}
</style>
