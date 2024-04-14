<template>
  <div class="p-4">
    <NuxtLink :to="url">
      <div
        class="block overflow-hidden rounded-t-lg rounded-b-lg h-full shadow-lg bg-gray-50 text-gray-800 dark:bg-indigo-600 dark:text-gray-100"
      >
        <div class="p-4 bg-blue-400 dark:bg-indigo-400">
          <h2
            class="mt-2 mb-2 font-bold text-2xl font-Heading text-center text-white"
          >
            {{ title }}
          </h2>
          <p class="text-center">Learn More</p>
        </div>
        <div>
          <img :src="image" />
        </div>

        <p class="text-md text-center p-3">
          {{ description }}
        </p>
      </div>
    </NuxtLink>
  </div>
</template>


<script>
export default {
  name: "IndustryCard",
  props: {
    title: String,
    image: String,
    description: String,
    url: String,
  },
};
</script>

<style>
</style>