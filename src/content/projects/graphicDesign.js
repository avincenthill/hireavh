import nsa from "assets/img/projects/nsa.jpg";
import hilbert from "assets/img/projects/hilbert.jpg";
import petals from "assets/img/projects/petals.jpg";

const graphicDesign = {
  title: "🎨 Check out some of my graphic design pieces!",
  data: [
    // *************************************************************************
    {
      title: "Educate Yourself",
      url: "http://shirt.woot.com/offers/educate-yourself",
      displayUrl: "shirt.woot.com/offers/educate-yourself",
      description: "Graphic design for woot.com.",
      longDescription:
        "I created this liberty-themed t-shirt after the Snowden NSA leaks. It's my most-popular graphic design product, with over 3,000 sold!",
      img: {
        hasImg: true,
        module: nsa,
        emoji: "📦️",
      },
    },
    // *************************************************************************
    {
      title: "Grand Hilbert",
      url: "http://shirt.woot.com/offers/hilberts-grand-infinite-hotel",
      displayUrl: "shirt.woot.com/offers/hilberts-grand-infinite-hotel",
      description: "Graphic design for woot.com.",
      longDescription:
        "Here is a Wes Anderson-inspired nerdy math joke t-shirt I designed about the number theory thought-experiment Hilbert's Paradox of the Grand Hotel https://en.wikipedia.org/wiki/Hilbert%27s_paradox_of_the_Grand_Hotel",
      img: {
        hasImg: true,
        module: hilbert,
        emoji: "📦️",
      },
    },
    // *************************************************************************
    {
      title: "Petals Logo",
      url: "http://www.pictureperfectpetals.com/about",
      displayUrl: "pictureperfectpetals.com",
      description: "Graphic design for Picture Perfect Petals.",
      longDescription:
        "This is a logo I made for a florist. You can see it on the top-left of his landing page.",
      img: {
        hasImg: true,
        module: petals,
        emoji: "📦️",
      },
    },
  ],
};

export default graphicDesign;
