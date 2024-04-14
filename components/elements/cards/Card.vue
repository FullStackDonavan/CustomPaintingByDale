<template>
  <div>
    <HeadlineFour>{{ title }}</HeadlineFour>
    <ParagraphDescriptionHero>{{ description }}</ParagraphDescriptionHero>
  </div>
</template>
      

<script>
export default {
  name: "Card",
  props: {
    title: String,
    description: String,
  },
};
</script>

<style>
</style>