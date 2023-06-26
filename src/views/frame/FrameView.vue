<template>
  <v-app>
    <MainBar 
      :theme="theme" 
      :lang="lang" 
      :drawer="drawer"
      @changeDrawer="handleClickMenu"
      @changeTheme="handleChangeTheme"
      @changeLang="handleChangeLang"
      />
    <MainBarDrawer
      :theme="dark" 
      :lang="lang" 
      :drawer="drawer"
      @changeDrawer="handleClickMenu"
      @changeTheme="handleChangeTheme"
      @changeLang="handleChangeLang"
    />
    <v-main class="pt-12 main">
      <router-view></router-view>
    </v-main>
    <v-overlay
      :model-value="animalGet || animalGetList || animalPut || animalDelete || animalPost"
      class="align-center justify-center"
    >
      <v-progress-circular
        color="primary"
        indeterminate
        size="64"
      ></v-progress-circular>
    </v-overlay>
  </v-app>
</template>

<script>
import { mapState } from 'pinia';
import MainBar from '../../components/MainBar.vue';
import MainBarDrawer from '../../components/MainBarDrawer.vue';
import useAppStore from '../../stores/app';
import useUserStore from '../../stores/user';

export default {
  components: { MainBar, MainBarDrawer },
  data() {
    return {
      drawer: false
    }
  },
  computed: {
    ...mapState(useAppStore, ['animalGet', 'animalGetList', 'animalPut', 'animalDelete', 'animalPost']),
    ...mapState(useUserStore, ['theme', 'lang'])
  },
  methods: {
    handleClickMenu() {
      this.drawer = !this.drawer;
    },
    handleChangeTheme(themeSel) {
      this.theme = themeSel;
      this.$vuetify.theme.global.name = themeSel;
    },
    handleChangeLang(lang) {
      this.$i18next.changeLanguage(lang);
    },
  }
}
</script>

<style lang="scss" scoped>
.main {
  width: 992px;
  margin: 0 auto;
  margin-top: 60px;
}

</style>