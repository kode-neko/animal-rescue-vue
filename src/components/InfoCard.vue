<template>
  <v-card>
    <template v-slot:title>
      <v-avatar class="ml-3">
        <v-img
          :src="avatar"
          alt="avatar"
        ></v-img>
      </v-avatar>
      <v-icon v-if="false" class="gender female ml-3" icon="mdi-gender-female"></v-icon>
      <v-icon v-if="true" class="gender male ml-3" icon="mdi-gender-male"></v-icon>
      <span>Eladio</span>
    </template>
    <v-card-text>
      <v-row>
        <v-col cols="6" md="3">
          <v-list lines="one">
            <v-list-item
              v-for="attr in attrAnimalCol01"
              :key="attr"
              :title="attr"
              :subtitle="attr"
            ></v-list-item>
          </v-list>
        </v-col>
        <v-col cols="6" md="3">
          <v-list lines="one">
            <v-list-item
              v-for="attr in attrAnimalCol02"
              :key="attr"
              :title="attr"
              :subtitle="attr"
            ></v-list-item>
          </v-list>
        </v-col>
        <v-col cols="12" md="6">
          <p class="mx-3 text-justify"><v-icon icon="mdi-message-processing" class="mr-2"></v-icon> Similique nostrum nostrum maxime maxime. Impedit ea recusandae rem distinctio corporis nostrum vero. Dolorem quod nemo ut aliquam animi molestias tempore eaque. Delectus veritatis molestiae quibusdam necessitatibus molestias dolore. Placeat aut esse voluptatibus adipisci quis.</p>
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-actions class="d-flex justify-end mr-4 mb-2">
      <DeleteDialog />
      <v-btn 
        @click="$router.push('/edit/333')"
        variant="outlined"
        prepend-icon="mdi-pencil"
        color="primary"
        class="ml-3"
      >
        Edit
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { attrAnimalCol01, attrAnimalCol02 } from '../constants.js';
import DeleteDialog from './dialog/DeleteDialog.vue';

export default {
  components: {DeleteDialog},
  data() {
    const imgUrl = new URL(`../assets/cat.png`, import.meta.url).href;
    return {
      attrAnimalCol01,
      attrAnimalCol02,
      avatar: imgUrl,
    }
  }
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