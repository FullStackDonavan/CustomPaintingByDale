<template>
  <BasicSection class="container mx-auto mt-2">
    <div class="px-4 pt-4 sm:px-8">
      <HeadlineTwo>{{ IntroText.Heading }}</HeadlineTwo>
      <ParagraphDescription>
        {{ IntroText.description }}
      </ParagraphDescription>
    </div>
    <div class="px-4 sm:px-8">
      <CardDeckFourColumns>
        <ServiceCard
          v-for="Service in Services"
          :key="Service.id"
          :title="Service.title"
          :image="Service.image"
          :description="Service.description"
          :url="Service.url"
        />
      </CardDeckFourColumns>
    </div>
  </BasicSection>
</template>

<script>
export default {
  name: "Our Services",
  data() {
    return {
      IntroText: {
        Heading:
          "YOUR EXPERT PAINTING CONTRACTOR SERVING THE GREATER LAKELAND AREA!",
        description:
          "Applying a fresh coat of paint is a quick way of improving your home or office space and increasing its value! Whether you are turning over an office or updating your own home, Custom Painting by Dale has been providing interior and exterior painting services since 1983.",
      },
      Services: [
        {
          id: 1,
          title: "Interior Painting",
          image: "/img/interior-painting.jpg",
          description:
            "Refreshing a room or updating walls? Custom Painting by Dale offers endless palettes and expert guidance. We prep walls for flawless results. Choose us for all your interior painting needs.",
          url: "/Services/Interior-Painting/",
        },
        {
          id: 2,
          title: "Exterior Painting",
          image: "/img/exterior-painting.jpg",
          description:
            "Trust Custom Painting by Dale for impactful exterior painting. We focus on thorough prep for a durable finish. Your satisfaction is our goal. Let our pros boost your property's curb appeal!",
          url: "/Services/Interior-Painting/",
        },
        {
          id: 3,
          title: "Drywall Repair",
          image: "/img/drywal-repair.jpg",
          description:
            "Refresh or modernize with Custom Painting by Dale! We offer diverse palettes and expert guidance. After choosing, we prep for flawless results. Choose us for all your interior painting needs.",
          url: "/Services/Interior-Painting/",
        },
        {
          id: 4,
          title: "Epoxy Coatings",
          image: "/img/epoxy-garage-flooring.jpg",
          description:
            "With Custom Painting by Dale, expect unparalleled expertise in house and exterior painting. We prioritize meticulous prep work, ensuring a durable, professional finish. Trust us to elevate your property's curb appeal with skilled painters who take pride in your satisfaction!",
          url: "/Services/Interior-Painting/",
        },
        {
          id: 5,
          title: "Deck Painting & Staining",
          image: "/img/deck-staining.jpg",
          description:
            "Transform your deck with Custom Painting by Dale's expert services! We specialize in deck painting and staining, offering vibrant colors or rich stains to enhance your outdoor space. Prioritizing durability and protection ensures lasting beauty.",
          url: "/Services/Interior-Painting/",
        },
        {
          id: 6,
          title: "Popcorn Ceiling Removal",
          image: "/img/popcorn-ceiling-removal.jpg",
          description:
            "Say goodbye to outdated popcorn ceilings with Custom Painting by Dale! We specialize in popcorn ceiling removal, delivering a modern, sleek finish. Our skilled team ensures smooth, clean surfaces. Welcome a fresh, updated look to your home!",
          url: "/Services/Interior-Painting/",
        },
        {
          id: 7,
          title: "Concrete Painting Service",
          image: "/img/concrete-painting.jpg",
          description:
            "Transform your concrete surfaces with Custom Painting by Dale's expertise! We specialize in concrete painting, revitalizing driveways, patios, and more with durable coatings. Whether enhancing curb appeal or refreshing outdoor spaces, trust us for exceptional results.",
          url: "/Services/Interior-Painting/",
        },
        {
          id: 8,
          title: "Commercial Painting",
          image: "/img/commercial-painting.jpg",
          description:
            "Enhance your commercial space with Custom Painting by Dale! We specialize in precise commercial painting, minimizing disruptions while delivering top-quality results. Trust us for a refreshed commercial property.",
          url: "/Services/Interior-Painting/",
        },
      ],
    };
  },
};
</script>