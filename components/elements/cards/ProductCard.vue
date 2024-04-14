<template>
  <div>
    <div class="container mx-auto">
      <div class="flex items-stretch">
        <div class="flex-1 px-4 py-0">
          <div class="block bg-white overflow-hidden border-2 h-full">
            <div class="p-4 bg-indigo-600">
              <h2
                class="mt-2 mb-2 font-bold text-2xl font-Heading text-center text-white"
              >
                {{ title }}
              </h2>
            </div>
            <!-- <img :src="`/images/${image}.jpg`" /> -->
            <NuxtImg
              format="webp"
              :src="`/images/${image}.jpg`"
              sizes="sm:200px md:300px lg:350px xl:388px xxl:295px 2xl:465px"
              :alt="`${image}`"
              quality="80"
              loading="lazy"
            />
            <p
              class="p-4 mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400"
            >
              {{ description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "ProductCard",
  props: {
    title: String,
    image: String,
    description: String,
    url: String,
  },
};
</script>