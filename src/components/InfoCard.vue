<template>
  <v-card :prepend-avatar="avatar">
    <template v-slot:title>
      <v-icon v-if="false" class="gender female" icon="mdi-gender-female"></v-icon>
      <v-icon v-if="true" class="gender male" icon="mdi-gender-male"></v-icon>
      <span>Eladio</span>
    </template>
    <template v-slot:text>
      <v-row>
      <v-col cols="3">
        <v-list lines="one">
          <v-list-item
            v-for="attr in attrAnimalCol01"
            :key="attr"
            :title="attr"
            :subtitle="attr"
          ></v-list-item>
        </v-list>
      </v-col>
      <v-col cols="3">
        <v-list lines="one">
          <v-list-item
            v-for="attr in attrAnimalCol02"
            :key="attr"
            :title="attr"
            :subtitle="attr"
          ></v-list-item>
        </v-list>
      </v-col>
      <v-col sm="12" md="6">
        <p class="mx-3"><v-icon icon="mdi-message-processing" class="mr-2"></v-icon> Similique nostrum nostrum maxime maxime. Impedit ea recusandae rem distinctio corporis nostrum vero. Dolorem quod nemo ut aliquam animi molestias tempore eaque. Delectus veritatis molestiae quibusdam necessitatibus molestias dolore. Placeat aut esse voluptatibus adipisci quis.</p>
      </v-col>
    </v-row>
    </template>
  </v-card>
</template>

<script>
import { attrAnimalCol01, attrAnimalCol02 } from '../constants.js'

export default {
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

<style lang="scss">
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