<template>
  <v-form>

    <v-row>
      <v-col cols="12">
        <v-text-field
          v-model="animalForm.name"
          :label="$t('fields.name')"
          required
          @update:modelValue="$event => checkField('name')"
          :error-messages="hintForm.name"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="6">
        <v-radio-group v-model="animalForm.sex">
          <template v-slot:label>
            <div>{{ $t('fields.sex') }}</div>
          </template>
          <v-radio 
            v-for="sex in Sex" 
            :key="sex" 
            :label="$t(`lists.sex.${sex}`)" 
            :value="sex"
          >
        </v-radio>
        </v-radio-group>
      </v-col>
      <v-col cols="6">
        <v-radio-group v-model="animalForm.species">
          <template v-slot:label>
            <div>{{ $t('fields.species') }}</div>
          </template>
          <v-radio 
            v-for="species in Species" 
            :key="species" 
            :label="$t(`lists.species.${species}`)" 
            :value="species"
          ></v-radio>
        </v-radio-group>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-text-field
          v-model="animalForm.breed"
          :label="$t('fields.breed')"
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
          :label="$t('fields.colorFur')"
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
          :label="$t('fields.eyes')"
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
          :label="$t('fields.size')"
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
          @update:modelValue="$event => checkField('desc')"
          :error-messages="hintForm.desc"
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
        {{ $t('btns.save') }}
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
import { useVuelidate } from '@vuelidate/core';
import { required, minLength, maxLength } from '@vuelidate/validators';
import {t} from 'i18next';

// Validators
const speciesValidator = (value) => Object.values(Species).includes(value);
const sexValidator = (value) => Object.values(Sex).includes(value);
const colorFurValidator = (value) => Object.values(ColorFur).includes(value);
const colorEyesValidator = (value) => Object.values(ColorEyes).includes(value);
const sizeValidator = (value) => Object.values(Size).includes(value);
const sizeFurValidator = (value) => Object.values(SizeFur).includes(value);

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

      animalForm: this.parseAnimal(this.animal),
      formValid: this.v$.animal,

      hintForm: {
        name: undefined,
        desc: undefined
      }
    }
  },
  watch: {
    animal(val) {
      this.animalForm = this.parseAnimal(val);
    }
  },
  setup: () => ({ v$: useVuelidate() }),
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
    async handleSubmi$t() {
      const isFormCorrect = await this.v$.$validate()
      if(isFormCorrect) {
        const animalFilled = {
          ...this.animalForm,
          color: this.animalForm.color.value,
          eyes: this.animalForm.eyes.value,
          size: this.animalForm.size.value,
          sizeFur: this.animalForm.sizeFur.value,
        }
        $this.emits('save', animalFilled)
      }
    },
    async checkField(attr) {
      await this.v$.$validate()
      if(this.v$.animal[attr].$touch && this.v$.animal[attr].$errors.length > 0 )
        this.hintForm.name = this.v$.animal[attr].$errors[0].$message
      else
      this.hintForm.name = ''
    }
  },
  validations: {
    animal: {
      name: {
        required,
        maxLength: maxLength(30)
      },
      bday: {
        required,
      },
      sex: {
        required,
        sexValidator
      },
      desc:{
        required,
        minLength: minLength(30),
        maxLength: maxLength(500)
      },
      breed: {
        required,
        maxLength: maxLength(50)
      },
      color: {
        required,
        colorFurValidator,
      },
      eyes: {
        required,
        colorEyesValidator,
      },
      species: {
        required,
        speciesValidator
      },
      size: {
        required,
        sizeValidator,
      },
      sizeFur: {
        required,
        sizeFurValidator
      },
    },
  },
  
}
</script>

<style>

</style>