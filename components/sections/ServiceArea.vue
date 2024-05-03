<template>
  <div
    id="ServiceArea"
    class="map-image flex items-center relative bg-gray-100 text-gray-800"
  >
    <PaintDripTop fill="fff" v-if="$colorMode.value == 'light'" />
    <PaintDripTop fill="1E1B4B" v-if="$colorMode.value == 'dark'" />
    <div class="container mx-auto w-[800px]">
      <div class="grid grid-cols-1 gap-4 items-center">
        <div class="px-4 md:block">
          <div class="pb-8 mt-auto">
            <div class="text-center">
              <h2
                class="text-5xl font-black font-serif max-w-3xl mx-auto mb-8 text-white"
              >
                AREAS WE SERVE IN CENTRAL FLORIDA
              </h2>
              <!-- <GridTwoColumns class="mb-8">
                <ul>
                  <li
                    class="font-normal text-white lg:text-xl"
                    v-for="item in listAmenities1"
                    :key="item.title"
                  >
                    <Icon name="uil:paint-tool" color="white" size="2em" /><span
                      ><a :href="item.url">{{ item.title }}</a></span
                    >
                  </li>
                </ul>
                <ul>
                  <li
                    class="font-normal text-white lg:text-xl"
                    v-for="item in listAmenities2"
                    :key="item.title"
                  >
                    <Icon name="uil:paint-tool" color="white" size="2em" /><a
                      :href="item.url"
                      >{{ item.title }}</a
                    >
                  </li>
                </ul>
              </GridTwoColumns> -->

              <GridTwoColumns class="mb-8">
                <ul>
                  <li
                    class="font-normal text-white lg:text-xl"
                    v-for="item in listAmenities1"
                    :key="item.title"
                  >
                    <Icon
                      name="uil:paint-tool"
                      color="white"
                      size="2em"
                    /><span>{{ item.title }}</span>
                  </li>
                </ul>
                <ul>
                  <li
                    class="font-normal text-white lg:text-xl"
                    v-for="item in listAmenities2"
                    :key="item.title"
                  >
                    <Icon name="uil:paint-tool" color="white" size="2em" /><a
                      :href="item.url"
                      >{{ item.title }}</a
                    >
                  </li>
                </ul>
              </GridTwoColumns>
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
.map-image {
  background-image: url("~/assets/images/map.jpg");

  /* Set a specific height */
  min-height: 700px;

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>