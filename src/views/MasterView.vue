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
          v-model="searchStr"
          v-on:keyup.enter="handleSearch"
          v-on:blur="handleSearch"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row 
      class="d-flex flex-column my-10" 
      :style="{gap: '18px'}"
    >
      <InfoCard
        v-for="animal in animalList"
        v-bind:key="animal.id"
        :animal="animal"
        @delete="handleDeleteBtn"
      />
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
import DeleteDialog from '../components/dialog/DeleteDialog.vue';
import { getAnimalList } from '../api/animal';

export default {
  components: { InfoCard, DeleteDialog },
  data() {
    return {
      animalList: [],
      searchStr: '',
      prevSearchStr: '',
      offset: 0,
      limit: 5,
      isOpen: false
    }
  },
  mounted() {
    getAnimalList(this.offset, this.searchStr, this.limit)
      .then(list => this.animalList = list)
      .catch(() => (
        notify({
          title: "noti.master.error-list-title",
          text: "noti.master.error-list-body",
        })
      ))
  },
  methods: {
    searchAnimals(offset, searchStr, limit) {
      getAnimalList(offset, searchStr, limit)
        .then(list => this.animalList = list)
        .catch(() => (
          notify({
            title: "noti.master.error-list-title",
            text: "noti.master.error-list-body",
          })
        ));
    },
    handleSearch() {
      if(this.prevSearchStr !== this.searchStr) {
        this.offset = 0;
        this.prevSearchStr = this.searchStr;
        this.searchAnimals(0, this.searchStr, this.limit);
      }
    },
    handleDeleteBtn() {
      this.isOpen = true
    },
    handleDelete(animal) {
      console.log('handleDelete', this.animal)
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