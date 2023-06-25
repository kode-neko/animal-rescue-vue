<template>
  <v-form>

    <v-row>
      <v-col cols="12">
        <v-text-field
          v-model="animalForm.name"
          :label="$t('labels.name')"
          required
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="6">
        <v-radio-group v-model="animalForm.sex">
          <template v-slot:label>
            <div>{{ $t('labels.sex') }}</div>
          </template>
          <v-radio 
            v-for="sex in Sex" 
            :key="sex" 
            :label="$t(`sex.${sex}`)" 
            :value="sex"
          >
        </v-radio>
        </v-radio-group>
      </v-col>
      <v-col cols="6">
        <v-radio-group v-model="animalForm.species">
          <template v-slot:label>
            <div>{{ $t('species') }}</div>
          </template>
          <v-radio 
            v-for="species in Species" 
            :key="species" 
            :label="$t(`species.${species}`)" 
            :value="species"
          ></v-radio>
        </v-radio-group>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-text-field
          v-model="animalForm.breed"
          :label="$t('labels.breed')"
          required
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="6">
        <VueDatePicker v-model="animalForm.bday" />
      </v-col>
      <v-col cols="12" md="6">
        <v-select
          v-model="animalForm.color"
          :items="colorFurList"
          item-title="title"
          item-value="value"
          :label="$t('label.colorFur')"
          persistent-hint
          return-object
          single-line
        ></v-select>
      </v-col>
      <v-col cols="12" md="6">
        <v-select
          v-model="animalForm.eyes"
          :items="colorEyesList"
          item-title="title"
          item-value="value"
          :label="$t('label.eyes')"
          persistent-hint
          return-object
          single-line
        ></v-select>
      </v-col>
      <v-col cols="12" md="6">
        <v-select
          v-model="animalForm.size"
          :items="sizeList"
          item-title="title"
          item-value="value"
          :label="$t('label.size')"
          persistent-hint
          return-object
          single-line
        ></v-select>
      </v-col>
      <v-col cols="12" md="6">
        <v-select
          v-model="animalForm.sizeFur"
          :items="sizeFurList"
          item-title="title"
          item-value="value"
          :label="$t('fields.sizeFur')"
          persistent-hint
          return-object
          single-line
        ></v-select>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-textarea
          variant="filled"
          :label="$t('fields.desc')"
          v-model="animalForm.desc"
        ></v-textarea>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" class="d-flex justify-end">
        <v-btn 
          color="primary"
          size="large"
          @click="handleSubmit"
        >
        {{ $t('labels.save') }}
        </v-btn>
      </v-col>
    </v-row>

  </v-form>
</template>

<script>
import {  
  Species,
  Sex,
  ColorFur,
  ColorEyes,
  Size,
  SizeFur
} from '../constants';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import { t } from 'i18next';

// List Selectors
const colorFurList = Object.values(ColorFur).map(val => ({ title: t(`lists.colors.${val}`) , value: val }))
const colorEyesList = Object.values(ColorEyes).map(val => ({ title: t(`lists.colors.${val}`) , value: val }))
const sizeList = Object.values(Size).map(val => ({ title: t(`lists.sizes.${val}`) , value: val }))
const sizeFurList = Object.values(SizeFur).map(val => ({ title: t(`lists.sizes.${val}`) , value: val }))

export default {
  components: {VueDatePicker},
  props: {
    animal: Object,
  },
  emits: ['save'],
  data() {
    return {
      Species,
      Sex,
      colorFurList,
      colorEyesList,
      sizeList,
      sizeFurList,
      animalForm: this.parseAnimal(this.animal)
    }
  },
  watch: {
    animal(val) {
      this.animalForm = this.parseAnimal(val);
    }
  },

  methods: {
    parseAnimal(animal) {
      const colorFurSelected = colorFurList.find(val => val.value === animal.color);
      const colorEyesSelected = colorEyesList.find(val => val.value === animal.eyes);
      const sizeSelected = sizeList.find(val => val.value === animal.size);
      const sizeFurSelected = sizeFurList.find(val => val.value === animal.sizeFur);
      return {
        ...animal,
        color: colorFurSelected,
        eyes: colorEyesSelected,
        size: sizeSelected,
        sizeFur: sizeFurSelected,
      }
    },
    handleSubmi$t() {
      const animalFilled = {
        ...this.animalForm,
        color: this.animalForm.color.value,
        eyes: this.animalForm.eyes.value,
        size: this.animalForm.size.value,
        sizeFur: this.animalForm.sizeFur.value,
      }
      this.emits('save', animalFilled)
    }
  }
}
</script>

<style>

</style>