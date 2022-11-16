<template>
  <v-container>
    <transition name="fade">
      <v-container v-if="editMode == 'show'">
        <v-row justify="center">
          <h1>Ejemplos</h1>
        </v-row>
        <v-row>
          <ExampleSliderComponent
            :examplesData="examplesData"
            @sendOneExample="getExample"
          />
        </v-row>
        <v-row>
          <ExampleCardImg :example="example" />
          <ExampleCardText :text="example.text" />
        </v-row>
        <v-row>
          <v-spacer></v-spacer>
          <v-col cols="4" class="bAdd"><ButtonAdd @addNew="modeAdd" /></v-col>
          <v-col cols="4" class="buttons"
            ><ButtonVolver @getBack="goFlop" />
            <ButtonModify @modify="modeEdit" />
          </v-col>
        </v-row>
      </v-container>
    </transition>
    <transition name="fade">
      <v-container v-if="editMode == 'add'">
        <ExampleForm :mode="mode" :sendData="sendData" @goModeShow="modeShow" />
      </v-container>
    </transition>
    <transition name="fade">
      <v-container v-if="editMode == 'edit'">
        <ExampleForm :mode="mode" :example="example" @goModeShow="modeShow" />
      </v-container>
    </transition>
  </v-container>
</template>

<script>
import ExampleSliderComponent from '../components/ExampleSliderComponent.vue'
import { getAllExamples } from '../services/exampleService'
import ButtonVolver from '../components/ButtonVolverComponent.vue'
import ButtonModify from '../components/ButtonModifyComponent.vue'
import ButtonAdd from '../components/ButtonAddComponent.vue'
import ExampleCardText from '../components/ExampleCardText.vue'
import ExampleCardImg from '../components/ExampleCardImg.vue'
import ExampleForm from '../components/NewExampleForm.vue'

export default {
  name: 'ExampleView',
  data () {
    return {
      examplesData: [],
      flopId: '',
      spotId: '',
      example: {},
      editMode: 'show',
      mode: ''
    }
  },
  components: {
    ExampleSliderComponent,
    ButtonVolver,
    ButtonAdd,
    ButtonModify,
    ExampleCardText,
    ExampleCardImg,
    ExampleForm
  },
  props: {
    sendData: Object
  },
  methods: {
    getExample: function (dataFromSlide) {
      this.example = dataFromSlide
    },
    goAddExample: function () {
      const sendData = this.sendData
      this.$router.push({ name: 'newExample', params: { sendData } })
    },
    getAllExamples: async function () {
      const response = await getAllExamples(this.sendData)
      this.examplesData = response
      if (this.examplesData.length) {
        this.example = this.examplesData[0]
      }
    },
    goFlop: function () {
      const sendData = this.sendData
      this.$router.push({ name: 'flop', params: { sendData } })
    },
    modeAdd: function () {
      this.editMode = 'add'
      this.mode = 'create'
    },
    modeShow: function () {
      this.editMode = 'show'
    },
    modeEdit: function () {
      this.editMode = 'edit'
      this.mode = 'edit'
    }
  },
  created () {
    this.getAllExamples()
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
.buttons {
  display: flex;
  flex-direction: row;
  justify-content: end;
}
.bAdd {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>
