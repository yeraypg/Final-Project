<template>
  <v-footer padless fixed true color="transparent">
    <v-col
      class="text-center"
      cols="12"
    >
      {{ new Date().getFullYear() }} — <strong>Postflop Manager</strong>
    </v-col>
  </v-footer>
</template>

<script>
export default {
  name: 'FooterComponent',

  data: () => ({})
}
</script>
