<template>
  <v-app>
    <MainBar 
      theme="dark" 
      lang="es" 
      :drawer="drawer"
      @changeDrawer="handleClickMenu"
      @changeTheme="handleChange"
      @changeLang="handleChange"
      />
    <MainBarDrawer
      theme="dark" 
      lang="es" 
      :drawer="drawer"
      @changeTheme="handleChange"
      @changeLang="handleChange"
      @changeDrawer="(val) => drawer = val"
    />
    <v-main class="pt-12 main">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import MainBar from '../../components/MainBar.vue';
import MainBarDrawer from '../../components/MainBarDrawer.vue';

export default {
  components: { MainBar, MainBarDrawer },
  data() {
    return {
      drawer: false,
      lang: 'es',
      theme: 'dark',
    }
  },
  methods: {
    handleClickMenu(val) {
      this.drawer = val;
    },
    handleChange(val) {
      console.log('FV: ', val);
    },
  }
}
</script>

<style lang="scss" scoped>
.main {
  width: 992px;
  margin: 0 auto;
  margin-top: 60px;
  padding: 0 24px;
}

</style>