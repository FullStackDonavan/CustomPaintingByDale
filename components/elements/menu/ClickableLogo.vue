<template>
  <div class="py-3 flex items-center justify-center">
    <nuxt-link to="/">
      <span class="sr-only">Home</span>
      <div class="flex items-center">
        <div class="">
          <!-- <img
        src="@/assets/images/logo_white.png"
        class="h-16 md:h-24 w-auto scale-110"
        v-if="$colorMode.value == 'dark'"
      /> -->
          <!-- <img
        src="@/assets/images/logo.png"
        class="h-16 md:h-24 w-auto scale-110"
        v-if="$colorMode.value == 'light'"
      /> -->
          <!-- <GridTwoColumns>
        <Icon name="oui:paint" color="white" size="5em" />
        <p>Custom Painting by Dale</p>
      </GridTwoColumns> -->
          <Icon
            name="oui:paint"
            color="white"
            size="5em"
            v-if="$colorMode.value == 'dark'"
          />
          <Icon
            name="oui:paint"
            color="1E1B4B"
            size="5em"
            v-if="$colorMode.value == 'light'"
          />
        </div>
        <p class="text-lg font-bold text-indigo-950 lg:text-xl dark:text-white">
          Custom Painting by Dale
        </p>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: "Clickable Logo",
};
</script>