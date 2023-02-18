<template>
  <HeaderSubpage
    title="edit"
    :breadcrumbs="[{name: 'home', link: '/'}, {name: 'edit'}]"
  >
    <AnimalForm :animal="animal" />
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
      }
    }
  },
  mounted() {
    const route = useRoute();
    console.log(route.params);
  }
}
</script>

<style>

</style>