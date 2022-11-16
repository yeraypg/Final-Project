<template>
  <v-container>
    <transition name="fade">
      <v-container v-if="editMode == 'show'">
        <v-row>
          <v-spacer></v-spacer>
          <v-col cols="4">
            <SelectTypeSpotComponent @changeSelectFilter="chageSelectFilter" />
          </v-col>
          <v-spacer></v-spacer>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-container class="cardRows">
              <div v-for="spot in getFilteredSpots" :key="spot.id">
                <SpotCardComponent @sendOneSpot="clickCard" :spot="spot" />
              </div>
            </v-container>
          </v-col>
        </v-row>
        <v-row class="buttons">
          <button-add @addNew="modeAdd" />
        </v-row>
      </v-container>
    </transition>
    <transition name="fade">
      <v-container v-if="editMode == 'add'">
        <SpotForm :mode="mode" @goModeShow="modeShow" />
      </v-container>
    </transition>
  </v-container>
</template>

<script>
import SpotCardComponent from '../components/SpotCardComponent.vue'
import { getAllSpots } from '../services/spotService'
import SelectTypeSpotComponent from '../components/SelectTypeSpotComponent.vue'
import ButtonAdd from '../components/ButtonAddComponent.vue'
import SpotForm from '../components/NewSpotForm.vue'

export default {
  name: 'MainView',
  data () {
    return {
      userSpots: [],
      typeSelect: 'SRP',
      mode: '',
      editMode: 'show'
    }
  },
  components: {
    SpotCardComponent,
    SelectTypeSpotComponent,
    ButtonAdd,
    SpotForm
  },
  methods: {
    modeAdd: function () {
      this.editMode = 'add'
      this.mode = 'create'
    },
    modeShow: async function () {
      await this.getAllSpots()
      this.editMode = 'show'
    },
    getAllSpots: async function () {
      const data = await getAllSpots(localStorage.userId)
      this.userSpots = data
    },
    chageSelectFilter: function (type) {
      this.typeSelect = type
    },
    clickCard: function (spot) {
      const sendData = { spotId: spot._id, flopId: '', exampleId: '' }
      this.$router.push({ name: 'spot', params: { sendData } })
    }
  },
  computed: {
    getFilteredSpots: function () {
      return this.userSpots.filter((spot) => spot.type === this.typeSelect)
    }
  },
  created () {
    this.getAllSpots()
  }
}
</script>
<style scoped>
.SpotCardComponent {
  margin: 10px;
}
.cardRows {
  height: 55vh;
  width: 90%;
  display: flex;
  justify-content: space-between;
}
.buttons {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
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
