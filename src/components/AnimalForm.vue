<template>
  <v-form v-model="valid">

    <v-row>
      <v-col cols="12">
        <v-text-field
          v-model="animal.name"
          label="name"
          required
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="6">
        <v-radio-group v-model="animal.sex">
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
        <v-radio-group v-model="animal.species">
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
          v-model="animal.breed"
          label="breed"
          required
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="6">
        <VueDatePicker v-model="animal.bday" />
      </v-col>
      <v-col cols="6">
        <v-select
          v-model="animal.color"
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
          v-model="animal.eyes"
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
          v-model="animal.size"
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
          v-model="animal.sizeFur"
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
          v-model="animal.desc"
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
  data() {
    return {
      Species,
      Sex,
      ColorFur,
      ColorEyes,
      Size,
      SizeFur,
      animal: {
        name: 'patata',
        bday: new Date,
        sex: Sex.MALE,
        desc: 'patata',
        breed: 'patata',
        color: ColorFur.BLACK,
        eyes: ColorEyes.BLUE,
        species: Species.CAT,
        size: Size.LARGE,
        sizeFur: SizeFur.LARGE
      }
    }
  }
}

/*
interface Animal {
  id?: string;
  name: string;
  bday?: Date;
  sex: Sex;
  desc: string;
  breed: string;
  color: ColorFur;
  eyes: ColorEyes;
  species: Species;
  size: Size;
  sizeFur: SizeFur;
}
*/
</script>

<style>

</style>