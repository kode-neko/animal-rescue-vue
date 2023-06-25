<template>
  <HeaderSubpage
    :title="$t('pages.edit')"
    :breadcrumbs="[{name: $t('pages.master'), link: '/'}, {name: $t('pages.edit')}]"
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
import AnimalForm from '../components/AnimalForm.vue';
import {useRoute} from 'vue-router';
import { mapWritableState } from 'pinia'
import useAppStore from '../stores/app';
import { getAnimal } from '../api/animal';
import { notify } from "@kyvg/vue3-notification";
import { putAnimal } from '../api/animal';

export default {
  components: { HeaderSubpage, AnimalForm },
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
      ...mapWritableState(useAppStore, ['animalGet', 'animalPut'])
    }
  },
  mounted() {
    const route = useRoute();
    this.animalGet = true;
    getAnimal(route.params.id)
      .then((animal) => this.animal = animal)
      .catch(() => {
        notify({ title: this.$t("msg.errorGet") });
        this.$router.push('/');
      })
      .finally(() => this.animalGet = false);
  },
  methods: {
    handleSave(animal) {
      this.animalPut = true;
      putAnimal(animal)
        .then(() => {
          notify({ title: this.$t("msg.successPut") });
          this.$router.push('/');
        })
        .catch(() => {
          notify({title:this.$t("msg.errorPut")});
        })
        .finally(() => this.animalPut = true);
    }
  }
}
</script>

<style>

</style>