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
      <app-main :style="{paddingTop: '60px'}">
        <router-view></router-view>
      </app-main>
    </v-app>

</template>

<script>
import MainBar from '../../components/MainBar.vue';
import MainBarDrawer from '../../components/MainBarDrawer.vue';

export default {
  components: {MainBar, MainBarDrawer},
  data: () => ({
    drawer: false,
    lang: 'es',
    theme: 'dark',
    methods: {
      changeData() {
        this.data = this.data === 'dark' ? 'light' : 'dark'
      }
    },
  }),
  methods: {
    handleClickMenu(val) {
      this.drawer = val;
    },
    handleChange(val) {
      console.log('FV: ', val)
    }
  }
}
</script>

<style lang="scss" scoped>
  .iconTitle {
    margin-right: 10px;
  }
  .contFlex {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .contSw {
    margin: 0 8px;
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 10px;
    .sw {
      flex: none;
    }
  }
  .contLang{
    margin: 0 8px;
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 10px;
  }
</style>