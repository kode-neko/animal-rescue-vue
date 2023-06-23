<template>
  <v-navigation-drawer
    v-model="drawerVal"
    location="left"
    temporary
  >
    <v-list>
      <v-list-item prepend-icon="mdi-arrow-left" value="back" @click="$emit('changeDrawer')"></v-list-item>
    </v-list>
    <v-divider></v-divider>
    <v-list density="compact" nav>
      <v-list-item prepend-icon="mdi-home-variant" title="Home" :value="$t('pages.home')"></v-list-item>
      <v-list-item prepend-icon="mdi-plus-circle" title="Create" :value="$t('pages.create')"></v-list-item>
    </v-list>
    <v-divider></v-divider>
      <v-list-item>
        <SwitchTheme :theme="theme" @changeSW="(newTheme) => $emit('changeTheme', newTheme)"/>
      </v-list-item>
      <v-list-item>
        <SelectLang :lang="lang" @change="(newLang) => $emit('changeLang', newLang)"/>
      </v-list-item>
    <v-divider></v-divider>
    <v-list density="compact" nav>
        <v-list-item 
          v-for="social in socialList"
          link
          :href="social.url"
          :key="social" 
          :prepend-icon="social.icon" 
          :title="social.name" 
          :value="social.name"
          target="_blank"
        ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import {socialList} from '../constants';
import SwitchTheme from './SwitchTheme.vue';
import SelectLang from './SelectLang.vue';

export default {
  components: {SwitchTheme, SelectLang},
  props: {
    theme: {
      type: String,
      validator(value) {
        return ['light', 'dark'].includes(value)
      } 
    },
    lang: {
      type: String,
      validator(value) {
        return ['en', 'es'].includes(value);
      }
    },
    drawer: {
      type: Boolean
    }
  },
  data() {
    return {
      socialList,
      drawerVal: this.drawer
    }
  },
  watch: {
    drawer(val) {
      this.drawerVal = val;
    }
  },
  emit: ['changeTheme', 'changeLang', 'changeDrawer'],
}
</script>

<style>

</style>