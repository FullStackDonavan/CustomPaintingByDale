<template>
  <div
    id="app"
    class="parallax flex items-center relative bg-gray-100 text-gray-800"
    :style="style"
  >
    <!-- <PaintDripTop fill="60A5FA" /> -->
    <div class="container mx-auto">
      <div class="grid grid-cols-1 gap-4 items-center">
        <div class="px-4 md:block">
          <div class="pb-8 mt-auto">
            <div class="text-center">
              <h1
                class="text-5xl drop-shadow font-black font-serif mx-auto text-white"
              >
                {{ title }}
              </h1>
              <p
                class="mb-8 drop-shadow text-lg font-normal text-white lg:text-xl"
              >
                {{ description }}
              </p>
              <Button to="https://nuxtjs.org" name="Request a Free Estimate" />
              <!-- <ContactForm />-->
            </div>
          </div>
        </div>
      </div>
    </div>
    <PaintDripBottom fill="fff" v-if="$colorMode.value == 'light'" />
    <PaintDripBottom fill="1E1B4B" v-if="$colorMode.value == 'dark'" />
  </div>
  <Discounts class="mb-8">
    <div
      class="flex items-center p-4 bg-indigo-600 rounded-lg border-dashed border-4 border-indigo-900"
    >
      <Icon name="ic:baseline-discount" class="text-white" size="10em" />
      <div>
        <p class="text-white text-3xl font-black">Discounts and Coupons</p>
      </div>
    </div>

    <div
      class="flex items-center p-4 bg-indigo-600 rounded-lg border-dashed border-4 border-indigo-900"
    >
      <Icon
        name="ic:baseline-cleaning-services"
        class="text-white"
        size="10em"
      />
      <p class="text-white text-3xl font-black">FREE Sidewalk Cleaning</p>
    </div>

    <div
      class="flex items-center p-4 bg-indigo-600 rounded-lg border-dashed border-4 border-indigo-900"
    >
      <Icon
        name="material-symbols:google-guarantee"
        class="text-white"
        size="10em"
      />
      <p class="text-white text-3xl font-black">Labor Guarantee</p>
    </div>

    <div
      class="flex items-center p-4 bg-indigo-600 rounded-lg border-dashed border-4 border-indigo-900"
    >
      <Icon
        name="material-symbols:calendar-month"
        class="text-white"
        size="10em"
      />
      <p class="text-white text-3xl font-black">5-Year Warranty</p>
    </div>
  </Discounts>
</template>

<script>
export default {
  name: "HeroSection",
  props: {
    title: String,
    description: String,
    url: String,
    image: String,
  },
  computed: {
    style() {
      return "background-image: url(" + this.image + ")";
    },
  },
};
</script>

<style scoped>
.hero-image {
  /* background-image: url("~/assets/images/exterior-painted-house.jpg"); */
  background-position: center;
  background-size: cover;
  height: 700px;
  display: flex;
  align-items: center;
}

.parallax {
  /* The image used */
  /* background-image: url("~/assets/images/exterior-painted-house.jpg"); */

  /* Set a specific height */
  min-height: 700px;

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

input:focus,
textarea:focus {
  color: #ffffff !important;
}
</style>