<template>
  <HeaderSubpage
    title="create"
    :breadcrumbs="[{name: 'home', link: '/'}, {name: 'create'}]"
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
      }
    }
  },
  methods: {
    handleSave(animal) {
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
    }
  }
}
</script>

<style>

</style>