<template>
  <TheContainer>
    <HeroSection
      title="Beyond Colors: The Art of Painting &amp; Staining"
      description="UNLEASH THE POTENTIAL OF YOUR SURFACES WITH US"
      url="https://nuxtjs.org"
      image="/img/handyman-painting-window-banner.jpg"
    />
    <Breadcrumbs
      currentPageTitle="Painting &amp; Staining"
      parentTitle="Services"
      parentUrl="/Services/"
    />

    <GridTwoColumns>
      <div>
        <h1
          class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
        >
          YOUR EXPERT PAINTING CONTRACTOR SERVING THE GREATER LAKELAND AREA!
        </h1>
        <p
          class="mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400"
        >
          Welcome to the world of interior painting, where creativity meets
          craftsmanship to transform the very essence of your living spaces. At
          [Your Company Name], we understand that your home is a canvas waiting
          to be adorned with colors that reflect your personality and style.
        </p>

        <p
          class="mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400"
        >
          Our dedicated team of skilled painters is here to bring your vision to
          life, one brushstroke at a time. Whether you're looking to revitalize
          a single room or undertake a complete interior makeover, our expertise
          and passion for painting will ensure that your home becomes a
          masterpiece of color and design.
        </p>
      </div>
      <div>
        <ContactForm tag="drywallrepair" />
      </div>
    </GridTwoColumns>

    <ServiceArea />

    <GridTwoColumns>
      <div>
        <h1
          class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
        >
          Our Interior Painting Services
        </h1>
        <p
          class="mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400"
        >
          Whether you're looking to enhance your favorite room in your home with
          a beautiful splash of color or you're looking to update the walls in
          your home to give them a fresh, modern look, Amerus Pro Painting can
          help! We can bring palates with endless options and will help you
          select that perfect hue. Once the color and level of sheen are
          selected, we'll get to work preparing your walls and ceilings to
          receive the paint. Amerus Pro Painting provides a wide range of
          interior painting services.
        </p>
        <GridTwoColumns>
          <ul>
            <li
              class="flex font-normal text-gray-500 lg:text-xl dark:text-gray-400"
              v-for="item in listAmenities1"
              :key="item.title"
            >
              <Icon name="uil:check" color="green" size="2em" /><span>{{
                item.title
              }}</span>
            </li>
          </ul>
          <ul>
            <li
              class="flex font-normal text-gray-500 lg:text-xl dark:text-gray-400"
              v-for="item in listAmenities2"
              :key="item.title"
            >
              <Icon name="uil:check" color="green" size="2em" /><span>{{
                item.title
              }}</span>
            </li>
          </ul>
        </GridTwoColumns>
      </div>
      <div>
        <img src="/img/interior-painting.jpg" />
      </div>
    </GridTwoColumns>

    <GridTwoColumns>
      <div>
        <!-- <img :src="`/img/drivers.jpg`" /> -->
        <img src="/img/exterior-painting.jpg" />
      </div>
      <div>
        <h1
          class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
        >
          The Painting Process
        </h1>
        <p
          class="mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400"
        >
          An eye-catching exterior makes a statement! When it comes to house
          painting and exterior painting, no one delivers like Amerus Pro
          Painting. We won't cut corners on the prep work because we know that
          sets the foundation for a professional, lasting exterior paint job.
          And when the job is complete, Amerus Pro Painting wants you to have
          just as much pride and joy in the final result as we do in creating it
          for you. Custom Painting By Dale's professional painters maximize the
          curb appeal of your property!
        </p>
      </div>
    </GridTwoColumns>

    <GridTwoColumns>
      <div>
        <h1
          class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
        >
          Selecting the Perfect Colors
        </h1>
        <p
          class="mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400"
        >
          Whether you're looking to enhance your favorite room in your home with
          a beautiful splash of color or you're looking to update the walls in
          your home to give them a fresh, modern look, Amerus Pro Painting can
          help! We can bring palates with endless options and will help you
          select that perfect hue. Once the color and level of sheen are
          selected, we'll get to work preparing your walls and ceilings to
          receive the paint. Amerus Pro Painting provides a wide range of
          interior painting services.
        </p>
        <GridTwoColumns>
          <ul>
            <li
              class="flex font-normal text-gray-500 lg:text-xl dark:text-gray-400"
              v-for="item in listAmenities1"
              :key="item.title"
            >
              <Icon name="uil:check" color="green" size="2em" /><span>{{
                item.title
              }}</span>
            </li>
          </ul>
          <ul>
            <li
              class="flex font-normal text-gray-500 lg:text-xl dark:text-gray-400"
              v-for="item in listAmenities2"
              :key="item.title"
            >
              <Icon name="uil:check" color="green" size="2em" /><span>{{
                item.title
              }}</span>
            </li>
          </ul>
        </GridTwoColumns>
      </div>
      <div>
        <img src="/img/drywal-repair.jpg" />
      </div>
    </GridTwoColumns>

    <GridTwoColumns>
      <div>
        <!-- <img :src="`/img/drivers.jpg`" /> -->
        <img src="/img/epoxy-garage-flooring.jpg" />
      </div>
      <div>
        <h1
          class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
        >
          Interior Paint Finishes
        </h1>
        <p
          class="mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400"
        >
          An eye-catching exterior makes a statement! When it comes to house
          painting and exterior painting, no one delivers like Amerus Pro
          Painting. We won't cut corners on the prep work because we know that
          sets the foundation for a professional, lasting exterior paint job.
          And when the job is complete, Amerus Pro Painting wants you to have
          just as much pride and joy in the final result as we do in creating it
          for you. Custom Painting By Dale's professional painters maximize the
          curb appeal of your property!
        </p>
      </div>
    </GridTwoColumns>

    <GetAnswersToYourQuestions />
  </TheContainer>
</template>

<script>
export default {
  name: "Home Page",
  data() {
    return {
      listAmenities1: [
        { title: "Lorem ipsum dolor sit amet" },
        { title: "Lorem ipsum dolor sit amet" },
        { title: "Lorem ipsum dolor sit amet" },
        { title: "Lorem ipsum dolor sit amet" },
        { title: "Lorem ipsum dolor sit amet" },
      ],
      listAmenities2: [
        { title: "Lorem ipsum dolor sit amet" },
        { title: "Lorem ipsum dolor sit amet" },
        { title: "Lorem ipsum dolor sit amet" },
        { title: "Lorem ipsum dolor sit amet" },
      ],
    };
  },
};
</script>
<style>
ul li span {
  /*
     * We want the bullets outside of the list,
     * so the text is aligned. Now the actual bullet
     * is outside of the list’s container
     */
  list-style-position: outside !important;

  /*
     * Because the bullet is outside of the list’s
     * container, indent the list entirely
     */
  /* margin-left: 1em; */
}
.svg svg {
  width: 100px;
}
.logoSection {
  height: 300px;
}
</style>