<template>
  <v-container>
    <v-row>
      <v-col :class="$style.breadcrumbs" cols="12">
        <template 
          v-for="(page, index) in breadcrumbs" 
          v-bind:key="page.name"
        >
          <span v-if="index < breadcrumbs.length - 1">
            <span><router-link :to="page.link">{{page.name}}</router-link></span>
          </span>
          <span v-if="index < breadcrumbs.length - 1">/</span>
          <span v-if="index === breadcrumbs.length - 1">{{page.name}}</span>
        </template>
      </v-col>
      <v-col cols="12">
        <h1 class="text-h3">{{ title }}</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <slot></slot>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    title: String,
    breadcrumbs: Array,
  }
}
</script>

<style module scoped>
.breadcrumbs {
  display: flex;
  gap: 0.3rem;
}
</style>