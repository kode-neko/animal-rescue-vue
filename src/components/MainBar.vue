<template>
  <v-app-bar
    color="primary"
    prominent
  >
    <template v-slot:prepend>
      <v-app-bar-nav-icon class="d-md-none" @click.stop="drawerVal = !drawerVal"></v-app-bar-nav-icon>
      <v-icon class="iconTitle" icon="mdi-paw"></v-icon>
      <v-toolbar-title>Animal Rescue</v-toolbar-title>
    </template>
    <template v-slot:append>
      <div class="d-none d-md-flex contFlex">
        <v-btn variant="text" icon="mdi-plus-circle"></v-btn>
        <v-btn variant="text" icon="mdi-share-variant"></v-btn>
        <SwitchTheme :theme="theme" @change="(newTheme) => $emit('changeTheme', newTheme)"/>
        <SelectLang :lang="lang" @change="(newLang) => $emit('changeLang', newLang)"/>
      </div>
    </template>
  </v-app-bar>
</template>

<script>
import {socialList} from '../constants';
import SwitchTheme from './SwitchTheme.vue';
import SelectLang from './SelectLang.vue';

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
    drawerVal(val) {
      this.$emit('changeDrawer', val)
    }
  },
  emit: ['changeTheme', 'changeLang', 'changeDrawer'],
}
</script>

<style>

</style>