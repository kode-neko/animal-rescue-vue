<template>
  <v-dialog
    transition="dialog-top-transition"
    width="auto"
  >
    <template v-slot:activator="{ props }">
      <v-btn 
        variant="outlined"
        prepend-icon="mdi-delete"
        color="primary"
        class="ml-3"
        v-bind="props"
      >
        delete
      </v-btn>
    </template>
    <template v-slot:default="{ isActive }">
      <v-card>
        <v-toolbar
          color="primary"
          title="dialog.delete-title"
        ></v-toolbar>
        <v-card-text>
          <div class="pa-12">dialog.delete-body</div>
        </v-card-text>
        <v-card-actions class="justify-end">
          <v-btn
            variant="text"
            @click="handleDelete(isActive)"
          >
            delete
          </v-btn>
          <v-btn
            variant="text"
            @click="isActive.value = false"
          >
            close
          </v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<script>
export default {
  methods: {
    handleDelete(isActive) {
      isActive.value = false;
    }
  }
}
</script>

<style>

</style>