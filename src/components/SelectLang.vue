<template>
  <div class="contLang">
    <v-btn-toggle
      v-model="langVal"
      divided
      density="compact"
    >
      <v-btn value="en">
        EN
      </v-btn>
      <v-btn value="es">
        ES
      </v-btn>
    </v-btn-toggle>
    <v-icon icon="mdi-translate"></v-icon>
  </div>
</template>

<script>
export default {
  props: {
    lang: {
      type: String,
      validator(value) {
        return ['en', 'es'].includes(value);
      }
    }
  },
  data() {
    return {
      langVal: this.lang
    }
  },
  watch: {
    langVal(val) {
      this.$emit('change', val)
    }
  },
  emit: ['change'],
}
</script>

<style lang="scss" scoped>
  .contLang{
    margin: 0 8px;
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 10px;
  }
</style>