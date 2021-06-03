<template>
  <nav class="bg-gray-800">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div
          class="absolute inset-y-0 left-0 flex items-center sm:hidden"
        ></div>
        <div class="flex-1 flex items-center justify-end">
          <div class="flex space-x-4">
            <router-link
              id="link"
              class="
                text-gray-300 text-white
                px-3
                py-2
                rounded-md
                text-sm
                font-medium
              "
              :to="{ name: 'Home' }"
              >Home</router-link
            >
            <router-link
              id="link"
              class="
                text-gray-300
                hover:bg-gray-700
                hover:text-white
                px-3
                py-2
                rounded-md
                text-sm
                font-medium
              "
              :to="{ name: 'Orders' }"
              >Orders</router-link
            >
            <router-link
              id="link"
              class="
                text-gray-300
                hover:bg-gray-700
                hover:text-white
                px-3
                py-2
                rounded-md
                text-sm
                font-medium
              "
              :to="{ name: 'Prices' }"
              >Prices</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Nav',
};
</script>

<style scoped>
.router-link-exact-active {
  background-color: rgb(17, 24, 39) !important;
}
</style>
