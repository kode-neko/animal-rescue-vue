<template>
  <HeaderSubpage
    :title="$t('pages.create')"
    :breadcrumbs="[{name: $t('pages.home'), link: '/'}, {name: $t('pages.create')}]"
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
import { useRouter } from 'vue-router';
import { mapWritableState } from 'pinia'
import useAppStore from '../stores/app';

export default {
  components: {HeaderSubpage, AnimalForm},
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
      ...mapWritableState(appStore, ['animalPost'])
    }
  },
  methods: {
    handleSave(animal) {
      this.animalPost.value = true;
      postAnimal(animal)
        .then(() => {
          notify({
            title: "noti.save-title-success",
            text: "noti.save-body-success",
          });
          const router = useRouter();
          router.push('/');
        })
        .catch(() => {
          notify({
            title: "noti.save-title-error",
            text: "noti.save-body-error",
          });
        })
        .finally(() => this.animalPost.value = false)
    }
  }
}
</script>

<style>

</style>