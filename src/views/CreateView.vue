<template>
  <HeaderSubpage
    title="create"
    :breadcrumbs="[{name: 'home', link: '/'}, {name: 'create'}]"
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
  }
}
</script>

<style>

</style>