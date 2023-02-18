<template>
  <v-container>
    <v-row justify="end">
      <v-col xs="12" md="4" class="px-0">
        <v-text-field
          :loading="loading"
          density="compact"
          variant="solo"
          label="buscar..."
          append-inner-icon="mdi-magnify"
          single-line
          hide-details
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row 
      class="d-flex flex-column my-10" 
      :style="{gap: '18px'}"
    >
      <InfoCard />
      <InfoCard />
    </v-row>
  </v-container>
</template>

<script>
import InfoCard from '../components/InfoCard.vue';

export default {
  components: {InfoCard}

}
</script>

<style>

</style>