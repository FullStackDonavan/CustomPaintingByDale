<template>
  <NuxtLink
    class="text-white p-3 outline outline-offset-2 outline-1 rounded-full focus:ring-4 focus:ring-blue-300 font-medium text-2xl px-2 ml-4 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
    :to="location"
  >
    <i class="mr-3" :class="icon"></i>{{ name }}</NuxtLink
  >
</template>

<script>
export default {
  data() {
    return {
      href: "",
      buttonIcon: "",
    };
  },
  props: {
    location: String,
    name: String,
    icon: String,
  },
};
</script>

<style scoped>
.btn-primary {
  border-left: 0;
  border-right: 0;

  text-align: left;
}
</style>
