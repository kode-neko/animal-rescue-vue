<template>
  <HeaderSubpage
    :title="$t('pages.create')"
    :breadcrumbs="[{name: $t('pages.master'), link: '/'}, {name: $t('pages.create')}]"
  >
    <AnimalForm 
      :animal="animal" 
      @save="handleSave"
    />
  </HeaderSubpage>
</template>

<script>
import {  
  Species,
  Sex,
  ColorFur,
  ColorEyes,
  Size,
  SizeFur
} from '../constants';
import HeaderSubpage from '../components/HeaderSubpage.vue';
import { notify } from "@kyvg/vue3-notification";
import AnimalForm from '../components/AnimalForm.vue';
import { mapWritableState } from 'pinia'
import useAppStore from '../stores/app';
import { postAnimal } from '../api/animal';

export default {
  components: {HeaderSubpage, AnimalForm},
  data() {
    return {
      animal: {
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
      ...mapWritableState(useAppStore, ['animalPost'])
    }
  },
  methods: {
    handleSave(animal) {
      this.animalPost = true;
      postAnimal(animal)
        .then(() => {
          notify({ title: this.$t("msg.successPost") });
          this.$router.push('/')
        })
        .catch(() => {
          notify({title: this.$t("msg.errorPost")});
        })
        .finally(() => this.animalPost = false)
    }
  }
}
</script>

<style>

</style>