<template>
  <BasicSection class="container mx-auto mt-20">
    <div class="px-4 pb-8 sm:px-8">
      <!-- <ParagraphSubHeading>
        {{ IntroText.SubHeading }}
      </ParagraphSubHeading> -->
      <HeadlineTwo>{{ IntroText.Heading }}</HeadlineTwo>
      <ParagraphDescription>
        {{ IntroText.description }}
      </ParagraphDescription>
    </div>
  </BasicSection>
</template>

<script>
export default {
  name: "Industries We Serve",
  data() {
    return {
      IntroText: {
        Heading: "Experience Excellence with Custom Painting by Dale",
        description:
          "In conclusion, Custom Painting by Dale offers a comprehensive range of professional painting services tailored to meet your needs. Whether you're seeking interior or exterior painting, deck staining, popcorn ceiling removal, concrete painting, or commercial painting, our skilled team is committed to delivering exceptional results. With a focus on precision, expertise, and customer satisfaction, we strive to enhance the beauty and longevity of your spaces. Trust Custom Painting by Dale for all your painting needs and experience the difference of quality craftsmanship and dedicated service.",
      },
    };
  },
};
</script>