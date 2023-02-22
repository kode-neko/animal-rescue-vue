<template>
  <v-card>
    <template v-slot:title>
      <v-avatar class="ml-3">
        <v-img
          :src="getAvatar(animal.species)"
          alt="avatar"
        ></v-img>
      </v-avatar>
      <v-icon v-if="animal.sex === 'female'" class="gender female ml-3" icon="mdi-gender-female"></v-icon>
      <v-icon v-if="animal.sex === 'male'" class="gender male ml-3" icon="mdi-gender-male"></v-icon>
      <span>{{ animal.name }}</span>
    </template>
    <v-card-text>
      <v-row>
        <v-col cols="6" md="3">
          <v-list lines="one">
            <v-list-item
              v-for="attr in attrAnimalCol01"
              :key="attr"
              :title="attr"
              :subtitle="parseAttr(attr, animal[attr])"
            ></v-list-item>
          </v-list>
        </v-col>
        <v-col cols="6" md="3">
          <v-list lines="one">
            <v-list-item
              v-for="attr in attrAnimalCol02"
              :key="attr"
              :title="attr"
              :subtitle="parseAttr(attr, animal[attr])"
            ></v-list-item>
          </v-list>
        </v-col>
        <v-col cols="12" md="6">
          <p class="mx-3 text-justify"><v-icon icon="mdi-message-processing" class="mr-2"></v-icon> Similique nostrum nostrum maxime maxime. Impedit ea recusandae rem distinctio corporis nostrum vero. Dolorem quod nemo ut aliquam animi molestias tempore eaque. Delectus veritatis molestiae quibusdam necessitatibus molestias dolore. Placeat aut esse voluptatibus adipisci quis.</p>
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-actions class="d-flex justify-end mr-4 mb-2">
      <v-btn 
        @click="$emit('delete', animal)"
        variant="outlined"
        prepend-icon="mdi-delete"
        color="primary"
        class="ml-3"
      >
        delete
      </v-btn>
      <v-btn 
        @click="$router.push('/edit/333')"
        variant="outlined"
        prepend-icon="mdi-pencil"
        color="primary"
        class="ml-3"
      >
        edit
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { attrAnimalCol01, attrAnimalCol02 } from '../constants.js';
import DeleteDialog from './dialog/DeleteDialog.vue';
import * as dayjs from 'dayjs'

export default {
  components: {DeleteDialog},
  props: {
    animal: Object,
  },
  data() {
    const imgUrl = new URL(`../assets/cat.png`, import.meta.url).href;
    return {
      attrAnimalCol01,
      attrAnimalCol02,
      avatar: imgUrl,
    }
  },
  methods: {
    getAvatar(species) {
      return new URL(`../assets/${species}.png`, import.meta.url).href;
    },
    parseAttr(attr, val) {
      if('bday' === attr)
        return this.formatDate(val);
      else
        return val;
    },
    formatDate(bday) {
      dayjs(bday).format('DD/MM/YYYY');
    }
  },
  emits: ['delete']
}
</script>

<style scoped lang="scss">
.gender {
  margin-right: 10px;
}
.female {
  color: hotpink;
  fill: hotpink;
}
.male {
  color: royalblue;
  fill: royalblue
}
</style>