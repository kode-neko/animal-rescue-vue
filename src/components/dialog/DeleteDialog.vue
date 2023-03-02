<template>
  <v-dialog
    v-model="isOpenData"
    transition="dialog-top-transition"
    width="auto"
  >
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
  </v-dialog>
</template>

<script>
export default {
  props: {
    isOpen: Boolean
  },
  data() {
    return {
      isOpenData: this.isOpen
    }
  },
  watch: {
    isOpen(val) {
      console.log('isOpen', val);
      this.isOpenData = val;
    },
    isOpenData(val) {
      console.log('isOpenData', val);
    }
  },
  methods: {
    handleClose() {
      this.$emit('close');
    },
    handleDelete() {
      this.$emit('delete');
    },
    handleCancel() {
      this.$emit('cancel');
    }
  },
  emits: ['close', 'delete', 'cancel']
}
</script>

<style>

</style>