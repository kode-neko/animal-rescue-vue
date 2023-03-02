<template>
  <HeaderSubpage
    :title="$t('pages.edit')"
    :breadcrumbs="[{name: $t('pages.home'), link: '/'}, {name: $t('pages.edit')}]"
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

export default {
  components: { HeaderSubpage, AnimalForm },
  data() {
    const appStore = useAppStore();
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
      ...mapWritableState(appStore, ['animalGet', 'animalPut'])
    }
  },
  mounted() {
    const route = useRoute();
    this.animalGet.value = true;
    getAnimal(route.params.id)
      .then((animal) => this.animal = animal)
      .catch(() => {
        notify({
          title: "noti.getid-title-error",
          text: "noti.getid-body-error",
        });
        const router = useRouter();
        router.push('/');
      })
      .finally(() => this.animalGet.value = false);
  },
  methods: {
    handleSave(animal) {
      this.animalPut.value = true;
      postAnimal(animal)
        .then(() => {
          notify({
            title: "noti.save-title-success",
            text: "noti.save-body-success",
          });
        })
        .catch(() => {
          notify({
            title: "noti.save-title-error",
            text: "noti.save-body-error",
          });
        })
        .finally(() => this.animalPut.value = true);
    }
  }
}
</script>

<style>

</style>