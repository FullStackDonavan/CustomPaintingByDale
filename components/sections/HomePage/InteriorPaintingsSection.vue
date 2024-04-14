<template>
  <BasicSection class="container mx-auto mt-20">
    <GridTwoColumns>
      <div class="px-4 sm:px-8">
        <!-- <NuxtImg
          format="webp"
          src="/images/happy-kids.jpg"
          sizes="sm:217px md:323px lg:376px xl:504px xxl:632px 2xl:700px"
          alt="Happy Kids"
          quality="80"
          loading="lazy"
        /> -->
        <img src="/img/interior-painting.jpg" alt="Happy Kids" />
      </div>
      <div class="px-4 sm:px-8">
        <HeadlineTwo>{{ IntroText.Headline }}</HeadlineTwo>
        <ParagraphDescription>
          {{ IntroText.description }}
        </ParagraphDescription>
      </div>
    </GridTwoColumns>
  </BasicSection>
</template>

<script>
export default {
  name: "Ideal Customers Section",
  props: {
    title: String,
    description: String,
    mediaFirst: Boolean,
    subTitle: String,
  },
  data() {
    return {
      IntroText: {
        Headline: "Interior Painting",
        description:
          "Whether you're looking to enhance your favorite room in your home with a beautiful splash of color or you're looking to update the walls in your home to give them a fresh, modern look, Amerus Pro Painting can help! We can bring palates with endless options and will help you select that perfect hue. Once the color and level of sheen are selected, we'll get to work preparing your walls and ceilings to receive the paint. Amerus Pro Painting provides a wide range of interior painting services.",
      },
    };
  },
};
</script>