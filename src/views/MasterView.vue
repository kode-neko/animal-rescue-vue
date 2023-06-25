<template>
  <v-container class="p-0 m-0">
    <v-row justify="end" >
      <v-col xs="12" md="7" class="d-flex align-center">
        <v-text-field
          :loading="this.animalGetList"
          density="compact"
          variant="solo"
          :placeholder="$t('placeH.search')"
          hide-details
          v-model="searchStr"
          v-on:keyup.enter="handleSearch(searchStr, [])"
        ></v-text-field>
        <v-btn class="ml-2 bg-purple" @click="handleSearch(searchStr, [])" size="large"><v-icon icon="mdi-magnify"></v-icon></v-btn>
        <v-btn class="ml-2" color="purple" @click="handleSearch('', [])" size="large" variant="outlined">{{ $t('labels.all') }}</v-btn>
      </v-col>
    </v-row>
    <template v-if="animalList.length === 0">
      <v-row class="my-16">
        <v-col cols="12" class="d-flex justify-center">
          <v-icon icon="mdi-panda" size="128"></v-icon>
        </v-col>
        <v-col cols="12" class="d-flex justify-center">
          <p>{{ $t('noData') }}</p>
        </v-col>
      </v-row>
    </template>
    <template v-else>
      <v-row 
        class="d-flex flex-column my-10" 
        :style="{gap: '42px'}"
      >
        <InfoCard
          v-for="animal in animalList"
          v-bind:key="animal.id"
          :animal="animal"
          @delete="handleDeleteBtn"
          @edit="handleEditBtn"
        />
      </v-row>
      <v-row 
        class="d-flex justify-center my-10" 
      >
        <v-btn 
          @click="handleBtnMore"
          color="primary"
          class="ml-3"
          size="large"
          v-if="isVisibleBtnMore"
        >
          {{ $t('btns.load-more') }}
        </v-btn>
      </v-row>
    </template>

    <FooterItem />
    
    <DeleteDialog
      :animal="animaldelete"
      :isOpen="isOpen"
      @close="isOpen = false"
      @delete="handleDelete"
      @cancel="isOpen = false"
    />
  </v-container>
</template>

<script>
import InfoCard from '../components/InfoCard.vue';
import FooterItem from '../components/FooterItem.vue';
import { notify } from "@kyvg/vue3-notification";
import DeleteDialog from '../components/dialog/DeleteDialog.vue';
import { deleteAnimal, getAnimalList } from '../api/animal';
import { mapWritableState } from 'pinia'
import useAppStore from '../stores/app';

export default {
  components: { InfoCard, DeleteDialog, FooterItem },
  data() {
    return {
      animalList: [],
      animaldelete: undefined,
      searchStr: '',
      prevSearchStr: '',
      offset: 0,
      limit: 5,
      isOpen: false,
      isVisibleBtnMore: true,
    };
  },
  computed: {
    ...mapWritableState(useAppStore, ['animalGetList', 'animalDelete'])
  },
  mounted() {
    this.searchAnimals(this.offset, this.searchStr, this.limit, [])
  },
  methods: {
    searchAnimals(offset, searchStr, limit, prevList) {
      this.animalGetList = true;
      getAnimalList(offset, searchStr, limit)
        .then(list => {
          if(list.length < limit)
            this.isVisibleBtnMore = false;
          this.animalList = [...list, ...prevList]
        })
        .catch(() => (
          notify({title: this.$t("msg.master.errorList")})
        ))
        .finally(() => this.animalGetList = false);
    },
    handleSearch(term, prevList) {
      if(this.prevSearchStr !== term) {
        this.prevSearchStr = term;
        this.searchAnimals(0, term, this.limit, prevList);
      }
    },
    hancleClickAll() {
      this.searchAnimals(0, '', this.limit, []);
    },
    handleBtnMore() {
      const newOffset = this.offset + this.limit;
      this.offset = newOffset;
      this.searchAnimals(newOffset, this.searchStr, this.limit, this.animalList);
    },
    handleDeleteBtn(animal) {
      this.animaldelete = animal
      this.isOpen = true
    },
    handleEditBtn(animal) {
      this.$router.push(`/edit/${animal.id}`)
    },
    handleDelete(animal) {
      this.isOpen = false
      this.animalDelete = true
      deleteAnimal(animal.id)
        .then(() => {
          this.searchStr = ''
          this.searchAnimals(0, '', this.limit, []);
          notify({ title: this.$t("msg.successDelete") })
        })
        .catch(() => notify({ title: this.$t("msg.errorDelete") }))
        .finally(() => this.animalDelete = false);
    },

    watch: {
      searchStr(val) {
        this.offset = 0;
        this.isVisibleBtnMore = true;
        this.searchStr = val;
      }
    }
  },
}
</script>

<style>

</style>