<template>
  <div class="cont">
    <v-switch
      v-model="themeVal"
      hide-details
      class="sw"
    ></v-switch>
    <v-icon icon="mdi-weather-night" v-if="themeVal"></v-icon>
    <v-icon icon="mdi-weather-sunny" v-else></v-icon>
  </div>
</template>

<script>
export default {
  props: {
    theme: {
      type: String,
      validator(value) {
        return ['light', 'dark'].includes(value)
      } 
    }
  },
  data() {
    return {
      themeVal: this.theme === 'dark',
    }
  },
  watch: {
    themeVal(value) {
      this.themeVal = value;
      this.$emit('changeSW', this.themeVal ? 'dark' : 'light')
    }
  },
  emit: ['changeSW']
}
</script>

<style lang="scss" scoped>
  .cont {
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 10px;
    .sw {
      flex: none;
    }
  }
</style>