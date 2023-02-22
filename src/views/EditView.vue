<template>
  <HeaderSubpage
    title="edit"
    :breadcrumbs="[{name: 'home', link: '/'}, {name: 'edit'}]"
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
  },
  methods: {
    handleSave(animal) {
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
    }
  }
}
</script>

<style>

</style>