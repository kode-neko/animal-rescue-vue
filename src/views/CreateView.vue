<template>
  <HeaderSubpage
    title="Create"
    :breadcrumbs="[{name: 'home', link: '/'}, {name: 'create'}]"
  >
    <AnimalForm />
  </HeaderSubpage>
</template>

<script>
import HeaderSubpage from '../components/HeaderSubpage.vue';
import AnimalForm from '../components/AnimalForm.vue';

export default {
  components: {HeaderSubpage, AnimalForm}
}
</script>

<style>

</style>