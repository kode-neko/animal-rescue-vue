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
      <InfoCard :animal="animal" @delete="handleDeleteBtn" />
      <InfoCard :animal="animal" @delete="handleDeleteBtn" />
    </v-row>
    <DeleteDialog
      :isOpen="isOpen"
      @close="isOpen = false"
      @delete="handleDelete"
      @cancel="isOpen = false"
    />
  </v-container>
</template>

<script>
import InfoCard from '../components/InfoCard.vue';
import { notify } from "@kyvg/vue3-notification";
import { 
  Sex, 
  ColorFur, 
  ColorEyes, 
  Species, 
  Size, 
  SizeFur 
} from '../constants'
import DeleteDialog from '../components/dialog/DeleteDialog.vue';

export default {
  components: { InfoCard, DeleteDialog },
  data() {
    return {
      animal: {
        id: 333,
        name: '',
        bday: new Date,
        sex: Sex.MALE,
        desc: '',
        breed: '',
        color: ColorFur.BLACK,
        eyes: ColorEyes.BLUE,
        species: Species.CAT,
        size: Size.LARGE,
        sizeFur: SizeFur.LARGE
      },
      isOpen: false
    }
  },
  methods: {
    handleDeleteBtn() {
      console.log('handleDeleteBtn', this.animal)
      console.log('handleDeleteBtn', this.isOpen)
      this.isOpen = true
    },
    handleDelete(animal) {
      console.log('handleDelete', this.animal)
      console.log('handleDelete', this.isOpen)
      notify({
        title: "noti.delete-title-success",
        text: "noti.delete-body-success",
      });
      this.isOpen = false
    }
  },
}
</script>

<style>

</style>