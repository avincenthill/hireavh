import hilbert from 'assets/img/projects/hilbert.jpg';
import nsa from 'assets/img/projects/nsa.jpg';
import petals from 'assets/img/projects/petals.jpg';

const graphicDesign = {
  title: '🎨 Check out some of my graphic design pieces!',
  data: [
    // *************************************************************************
    {
      title: 'Educate Yourself',
      url: 'http://shirt.woot.com/offers/educate-yourself',
      displayUrl: 'shirt.woot.com/offers/educate-yourself',
      description: 'Graphic design for woot.com.',
      longDescription:
        'A liberty themed t-shirt design following the Snowden NSA leaks.  To date it is my most popular graphic design, with over 3,000 sold!',
      img: {
        hasImg: true,
        module: nsa,
        emoji: '📦️',
      },
    },
    // *************************************************************************
    {
      title: 'Grand Hilbert',
      url: 'http://shirt.woot.com/offers/hilberts-grand-infinite-hotel',
      displayUrl: 'shirt.woot.com/offers/hilberts-grand-infinite-hotel',
      description: 'Graphic design for woot.com.',
      longDescription:
        'A Wes Anderson-inspired math joke t-shirt design about the number theory thought-experiment: Hilbert’s Paradox of the Grand Hotel.',
      img: {
        hasImg: true,
        module: hilbert,
        emoji: '📦️',
      },
    },
    // *************************************************************************
    {
      title: 'Petals Logo',
      url: 'http://www.pictureperfectpetals.com/about',
      displayUrl: 'pictureperfectpetals.com',
      description: 'Graphic design for Picture Perfect Petals.',
      longDescription:
        'A logo design for a florist, currently live on his landing page.',
      img: {
        hasImg: true,
        module: petals,
        emoji: '📦️',
      },
    },
  ],
};

export default graphicDesign;
