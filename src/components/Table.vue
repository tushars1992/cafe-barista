<template>
  <div class="m-8 rounded overflow-hidden">
    <div
      class="
        bg-gray-700
        flex
        justify-between
        px-4
        py-5
        items-center
        text-gray-50
        pr-10
        relative
        font-bold
      "
    >
      <slot></slot>
    </div>
    <slot name="content"></slot>
  </div>
</template>

<script>
export default {
  name: 'Table',
};
</script>
