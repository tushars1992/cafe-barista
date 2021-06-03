<template>
  <div
    class="
      flex
      h-96
      w-4/5
      flex-col
      m-auto
      items-center
      justify-center
      bg-gray-50
    "
  >
    <font-awesome-icon icon="exclamation-triangle" class="h-32 w-32" />
    <p class="font-bold mt-8">Something went wrong please reload</p>
    <button
      @click="triggerReload"
      class="
        h-12
        w-40
        mt-12
        rounded-md
        bg-gray-700
        text-white
        flex
        items-center
        justify-center
        font-bold
      "
    >
      Reload
    </button>
  </div>
</template>

<script>
export default {
  name: 'ErrorBlock',
  methods: {
    triggerReload() {
      this.$emit('reload');
    },
  },
};
</script>

<style></style>
