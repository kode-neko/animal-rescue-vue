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
      theme="dark" 
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
      :model-value="isLoading"
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
import MainBar from '../../components/MainBar.vue';
import MainBarDrawer from '../../components/MainBarDrawer.vue';
import useAppStore from '../../stores/app';
import { useTheme } from 'vuetify'

export default {
  components: { MainBar, MainBarDrawer },
  data() {
    const appStore = useAppStore();
    appStore.$subscribe((mutation, state) => {
      const flags = Object.values(state);
      this.isLoading = flags.some(f => f);
    })
    return {
      drawer: false,
      lang: 'en',
      theme: 'dark',
      isLoading: false
    }
  },
  methods: {
    handleClickMenu() {
      this.drawer = !this.drawer;
    },
    handleChangeTheme(themeSel) {
      this.$vuetify.theme.name = themeSel;
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
  padding: 0 24px;
}

</style>