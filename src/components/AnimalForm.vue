<template>
  <v-form>

    <v-row>
      <v-col cols="12">
        <v-text-field
          v-model="animalForm.name"
          label="name"
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
            <div>gender</div>
          </template>
          <v-radio 
            v-for="sex in Sex" 
            :key="sex" 
            :label="sex" 
            :value="sex"
          >
        </v-radio>
        </v-radio-group>
      </v-col>
      <v-col cols="6">
        <v-radio-group v-model="animalForm.species">
          <template v-slot:label>
            <div>species</div>
          </template>
          <v-radio 
            v-for="species in Species" 
            :key="species" 
            :label="species" 
            :value="species"
          ></v-radio>
        </v-radio-group>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-text-field
          v-model="animalForm.breed"
          label="breed"
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
          :items="Object.values(ColorFur)"
          :item-value="ColorFur.BLACK"
          label="color"
          persistent-hint
          return-object
          single-line
        ></v-select>
      </v-col>
      <v-col cols="12" md="6">
        <v-select
          v-model="animalForm.eyes"
          :items="Object.values(ColorEyes)"
          :item-value="ColorEyes.BLUE"
          label="eyes"
          persistent-hint
          return-object
          single-line
        ></v-select>
      </v-col>
      <v-col cols="12" md="6">
        <v-select
          v-model="animalForm.size"
          :items="Object.values(Size)"
          :item-value="Size.LARGE"
          label="size"
          persistent-hint
          return-object
          single-line
        ></v-select>
      </v-col>
      <v-col cols="12" md="6">
        <v-select
          v-model="animalForm.sizeFur"
          :items="Object.values(SizeFur)"
          :item-value="SizeFur.LARGE"
          label="fur"
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
          label="desc"
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
          save
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

// Validators
const speciesValidator = (value) => Object.values(Species).includes(value);
const sexValidator = (value) => Object.values(Sex).includes(value);
const colorFurValidator = (value) => Object.values(ColorFur).includes(value);
const colorEyesValidator = (value) => Object.values(ColorEyes).includes(value);
const sizeValidator = (value) => Object.values(Size).includes(value);
const sizeFurValidator = (value) => Object.values(SizeFur).includes(value);

export default {
  components: {VueDatePicker},
  props: {
    animal: Object,
  },
  data() {
    return {
      Species,
      Sex,
      ColorFur,
      ColorEyes,
      Size,
      SizeFur,
      animalForm: this.animal,
      formValid: this.v$.animal,
      hintForm: {
        name: undefined,
        desc: undefined
      }
    }
  },
  setup: () => ({ v$: useVuelidate() }),
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
  methods: {
    async handleSubmit() {
      const isFormCorrect = await this.v$.$validate()
      const desc = this.v$.animal.desc.required.$invalid;
      console.log('correct', isFormCorrect)
      console.log('desc', desc)
    },
    async checkField(attr) {
      await this.v$.$validate()
      if(this.v$.animal[attr].$touch && this.v$.animal[attr].$errors.length > 0 )
        this.hintForm.name = this.v$.animal[attr].$errors[0].$message
      else
      this.hintForm.name = ''
    }
  }
}
</script>

<style>

</style>