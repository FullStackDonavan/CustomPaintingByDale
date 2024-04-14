<template>
  <div
    id="ServiceArea"
    class="map-image flex items-center relative bg-gray-100 text-gray-800"
  >
    <PaintDripTop fill="fff" v-if="$colorMode.value == 'light'" />
    <PaintDripTop fill="1E1B4B" v-if="$colorMode.value == 'dark'" />
    <div class="container my-25 mx-auto">
      <div class="grid grid-cols-1 gap-4 items-center">
        <div class="px-4 md:block">
          <div class="mt-auto">
            <div class="text-center">
              <h2
                class="text-5xl font-black font-serif max-w-3xl mx-auto mb-8 text-white"
              >
                CHECK OUT OUR RECENT PAINTING PROJECTS
              </h2>
              <SectionContainer>
                <div class="grid grid-cols-1 gap-4 items-center">
                  <CardDeckThreeColumns>
                    <ProductCard
                      title="Pressure Washing"
                      image="pressure-washing"
                      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                      url=""
                    />
                    <ProductCard
                      title="Deck Painting &amp; Deck Staining"
                      image="deck-staining"
                      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                      url=""
                    />
                    <ProductCard
                      title="Commercial Painting"
                      image="commercial-painting"
                      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                      url=""
                    />
                  </CardDeckThreeColumns>
                </div>
              </SectionContainer>
              <Button to="https://nuxtjs.org" name="FIND OUT MORE" />
              <!-- <ContactForm />-->
            </div>
          </div>
        </div>
      </div>
    </div>
    <PaintDripBottom fill="fff" v-if="$colorMode.value == 'light'" />
    <PaintDripBottom fill="1E1B4B" v-if="$colorMode.value == 'dark'" />
  </div>
</template>

<script>
export default {
  name: "Service Area Page",
  data() {
    return {
      listAmenities1: [
        { title: "Lakeland, FL", url: "http://localhost:3000/" },
        { title: "Winter Haven, FL", url: "http://localhost:3000/" },
        { title: "Haines City, FL", url: "http://localhost:3000/" },
        { title: "Reclining Seats, FL", url: "http://localhost:3000/" },
        { title: "Bartow, FL", url: "http://localhost:3000/" },
      ],
      listAmenities2: [
        { title: "Lake Wales, FL", url: "http://localhost:3000/" },
        { title: "Aurbrndale, FL", url: "http://localhost:3000/" },
        { title: "Highland Park, FL", url: "http://localhost:3000/" },
        { title: "Highland City, FL", url: "http://localhost:3000/" },
        { title: "Lakeland Highlands, FL", url: "http://localhost:3000/" },
      ],
    };
  },
};
</script>

<style scoped>
.my-25 {
  margin-top: 25rem;
  margin-bottom: 25rem;
}
.map-image {
  background-image: url("~/assets/images/project-bg.jpg");

  /* Set a specific height */
  min-height: 700px;

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>


