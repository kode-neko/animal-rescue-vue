<template>
  <v-app-bar
    color="primary"
    prominent
  >
    <template v-slot:prepend>
      <v-app-bar-nav-icon class="d-md-none" @click.stop="$emit('changeDrawer')"></v-app-bar-nav-icon>
      <div class="d-flex align-center" @click="handleHome">
        <v-icon class="mr-2" icon="mdi-paw"></v-icon>
        <v-toolbar-title>Animal Rescue</v-toolbar-title>
      </div>
    </template>
    <template v-slot:append>
      <div class="d-none d-md-flex align-center">
        <v-btn variant="text" icon="mdi-plus-circle" @click="$router.push('/create')"></v-btn>
        <v-btn variant="text" class="mr-2" icon="mdi-share-variant"></v-btn>
        <SwitchTheme class="mr-2" :theme="theme" @changeSw="(newTheme) => $emit('changeTheme', newTheme)"/>
        <SelectLang :lang="lang" @change="(newLang) => $emit('changeLang', newLang)"/>
      </div>
    </template>
  </v-app-bar>
</template>

<script>
import {socialList} from '../constants';
import SwitchTheme from './SwitchTheme.vue';
import SelectLang from './SelectLang.vue';
import { useRouter } from 'vue-router';

export default {
  components: {SwitchTheme, SelectLang},
  props: {
    drawer: {
      type: Boolean
    },
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
  methods: {
    handleHome() {
      const router = useRouter();
      router.push('/')
    }
  },
  emit: ['changeTheme', 'changeLang', 'changeDrawer'],
}
</script>

<style>

</style>