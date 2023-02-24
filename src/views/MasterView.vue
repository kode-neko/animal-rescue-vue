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
    <v-row 
      class="d-flex justify-center my-10" 
    >
      <v-btn 
        @click="handleBtnMore"
        variant="outlined"
        color="primary"
        class="ml-3"
        v-if="isVisibleBtnMore"
      >
        btn.more
      </v-btn>
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
import { deleteAnimal, getAnimalList } from '../api/animal';
import { mapWritableState } from 'pinia'
import useAppStore from '../stores/app';

export default {
  components: { InfoCard, DeleteDialog },
  data() {
    const appStore = useAppStore();
    return {
      animalList: [],
      searchStr: '',
      prevSearchStr: '',
      offset: 0,
      limit: 5,
      isOpen: false,
      isVisibleBtnMore: true,
      ...mapWritableState(appStore, ['animalGetList', 'animalDelete'])
    };
  },
  mounted() {
    this.searchAnimals(this.offset, this.searchStr, this.limit)
  },
  methods: {
    searchAnimals(offset, searchStr, limit) {
      this.animalGetList.value = true;
      getAnimalList(offset, searchStr, limit)
        .then(list => {
          if(list.length === 0)
            this.isVisibleBtnMore = false;
          else
            this.animalList = [...this.animalList, ...list]
        })
        .catch(() => (
          notify({
            title: "noti.master.error-list-title",
            text: "noti.master.error-list-body",
          })
        ))
        .finally(() => this.animalGetList.value = false);
    },
    handleSearch() {
      if(this.prevSearchStr !== this.searchStr) {
        this.offset = 0;
        this.prevSearchStr = this.searchStr;
        this.searchAnimals(0, this.searchStr, this.limit);
      }
    },
    handleBtnMore() {
      const newOffset = this.offset + this.limit;
      this.offset = newOffset;
      this.searchAnimals(newOffset, this.searchStr, this.limit);
    },
    handleDeleteBtn() {
      this.isOpen = true
    },
    handleDelete(animal) {
      this.isOpen = false
      this.animalDelete.value = true;
      deleteAnimal(animal.id)
        .then(list => (
          notify({
            title: "noti.master.error-delete-title",
            text: "noti.master.error-delete-body",
          })
        ))
        .catch(() => (
          notify({
            title: "noti.master.error-delete-title",
            text: "noti.master.error-delete-body",
          })
        ))
        .finally(() => this.animalDelete.value = false);
    }
  },
}
</script>

<style>

</style>