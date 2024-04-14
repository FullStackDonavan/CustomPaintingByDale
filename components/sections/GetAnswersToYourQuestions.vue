<template>
  <div
    id="ServiceArea"
    class="map-image flex flex-col justify-center items-center relative bg-gray-400 dark:bg-indigo-600 text-gray-800"
  >
    <PaintDripTop fill="fff" v-if="$colorMode.value == 'light'" />
    <PaintDripTop fill="1E1B4B" v-if="$colorMode.value == 'dark'" />
    <div class="container my-25 mx-auto mt-60">
      <GridTwoColumns>
        <BasicSection class="container mx-auto">
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
        <div><RegisterForm /></div>
      </GridTwoColumns>
    </div>
    <div class="spacer h-40"></div>
    <!-- Adjust height as needed -->
    <PaintDripBottom fill="fff" v-if="$colorMode.value == 'light'" />
    <PaintDripBottom fill="1E1B4B" v-if="$colorMode.value == 'dark'" />
  </div>
</template>


<script>
export default {
  name: "Get Answers to Your Questions",
  data() {
    return {
      IntroText: {
        Heading: "Get Answers to Your Questions with Custom Painting by Dale",
        description:
          "Feeling uncertain about your painting project? At Custom Painting by Dale, we're here to help. Sign up to ask any questions you may have about our services. Our skilled team is dedicated to providing expert guidance and exceptional service. Trust us to address your concerns and make your painting project a success.",
      },
    };
  },
};
</script>