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
              <a
                href="tel:1-863-899-4254"
                class="text-slate-100 hover:text-slate-300 dark:hover:text-slate-100 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-amber-800 bg-blue-400 hover:bg-blue-800 dark:bg-amber-500 dark:hover:bg-amber-600 font-medium text-sm rounded-lg px-5 py-2.5 mx-2 mb-2"
              >
                <Icon name="uil:phone-alt" color="white" size="2em" />(863)
                899-4254
              </a>
              <!-- <ContactForm />-->
            </div>
          </div>
        </div>
      </div>
    </div>
    <PaintDripBottom fill="fff" v-if="$colorMode.value == 'light'" />
    <PaintDripBottom fill="111827" v-if="$colorMode.value == 'dark'" />
  </div>
  <Discounts class="mb-8">
    <CardDeckFourColumns>
      <template v-slot:one>
        <div
          class="flex items-center p-4 bg-indigo-600 rounded-lg border-dashed border-4 border-indigo-900"
        >
          <Icon name="ic:baseline-discount" class="text-white" size="10em" />
          <div>
            <p class="text-white text-3xl font-black">Discounts and Coupons</p>
          </div>
        </div>
      </template>

      <template v-slot:two>
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
      </template>

      <template v-slot:three>
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
      </template>

      <template v-slot:four>
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
      </template>
    </CardDeckFourColumns>
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