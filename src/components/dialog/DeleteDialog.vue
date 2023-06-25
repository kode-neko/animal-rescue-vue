<template>
  <v-dialog
    v-model="isOpenData"
    :close-on-back="false"
    :close-on-content-click="false"
    :persistent="true"
    transition="dialog-top-transition"
    width="auto"
  >
    <v-card>
      <v-toolbar
        color="primary"
        :title="$t('modal.title.delete', {species: animalData.species})"
      ></v-toolbar>
      <v-card-text>
        <div class="pa-12">{{ $t('modal.body.delete', {species: animalData.species, name: animalData.name}) }}</div>
      </v-card-text>
      <v-card-actions class="justify-end">
        <v-btn
          variant="text"
          @click="handleDelete"
        >
          {{ $t('labels.delete') }}
        </v-btn>
        <v-btn
          variant="text"
          @click="handleCancel"
        >
          {{ $t('labels.cancel') }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    isOpen: Boolean,
    animal: Object
  },
  data() {
    return {
      isOpenData: this.isOpen,
      animalData: this.animal
    }
  },
  watch: {
    isOpen(val) {
      this.isOpenData = val;
    },
    animal(val) {
      this.animalData = val;
    }
  },
  methods: {
    handleDelete() {
      this.$emit('delete', this.animal);
    },
    handleCancel() {
      this.$emit('cancel');
    }
  },
  emits: ['delete', 'cancel']
}
</script>

<style>

</style>