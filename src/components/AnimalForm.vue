<template>
  <v-form v-model="valid">

    <v-row>
      <v-col cols="12">
        <v-text-field
          v-model="animalForm.name"
          label="name"
          required
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
      <v-col cols="6">
        <VueDatePicker v-model="animalForm.bday" />
      </v-col>
      <v-col cols="6">
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
      <v-col cols="6">
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
      <v-col cols="6">
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
      <v-col cols="6">
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
        ></v-textarea>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" class="d-flex justify-end">
        <v-btn 
          color="primary"
          size="large"
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
    }
  }
}
</script>

<style>

</style>