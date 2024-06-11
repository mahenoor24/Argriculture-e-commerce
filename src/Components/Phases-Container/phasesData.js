import soil from '../../assets/home/soil.jpg';
import sowing from '../../assets/home/sowing.jpg';
import irrigation from '../../assets/home/Irrigation.jpg';
import crop from '../../assets/home/crop.jpg';
import harvest from '../../assets/home/harvesting.jpeg';
import pharvest from '../../assets/home/postHarvest.webp';

const PHASES_DATA = [
    {
      title: 'Soil Preparation',
      description:
        'Soil preparation involves loosening the soil, adding organic matter, and adjusting pH to create optimal conditions for planting and healthy plant growth.',
      image: soil,
      imagePosition: 'left',
    },
    {
      title: 'Sowing',
      description:
        'Sowing in agriculture involves planting seeds in prepared soil at the right depth and spacing to ensure optimal germination, growth, and crop yield.',
      image: sowing,
      imagePosition: 'right',
    },
    {
      title: 'Irrigation',
      description:
        'Irrigation in agriculture involves supplying water to crops through various methods, ensuring consistent moisture levels for optimal growth, higher yields, and improved crop quality.',
      image: irrigation,
      imagePosition: 'left',
    },
    {
      title: 'Crop Maintenance',
      description:
        'Crop maintenance in agriculture involves regular watering, weeding, pest control, fertilization, and monitoring plant health to ensure optimal growth and high yields.',
      image: crop,
      imagePosition: 'right',
    },
    {
      title: 'Harvesting',
      description:
        'Harvesting in agriculture is the process of gathering mature crops from fields, orchards, or gardens for consumption, sale, or storage, crucial for food supply and economic sustenance.',
      image: harvest,
      imagePosition: 'left',
    },
    {
      title: 'Post Harvest',
      description:
        'Post-harvesting in agriculture encompasses activities after crop harvesting, including processing, storage, packaging, and distribution, ensuring quality, safety, and market readiness for agricultural products.',
      image: pharvest,
      imagePosition: 'right',
    },
  ];
  
  export default PHASES_DATA;
  