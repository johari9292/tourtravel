import { Experience } from '../types';

export const experiences: Experience[] = [
  {
    id: 'trekking',
    title: 'Mountain Trekking',
    description: 'Explore stunning trails that lead to majestic peaks, pristine lakes, and remote villages, offering unforgettable experiences for both beginners and experienced trekkers.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/M_Rainier.jpg/500px-M_Rainier.jpg',
    alt: 'Trekking in the mountains of Skardu',
    fullDescription: 'Experience the thrill of trekking through some of the most breathtaking landscapes in the world. Our guided treks take you through pristine valleys, past crystal-clear lakes, and up to stunning viewpoints that offer panoramic views of the Karakoram range. Whether you\'re a beginner or an experienced trekker, we have routes that will challenge and inspire you.',
    duration: '3-7 days depending on the route',
    difficulty: 'Moderate to Challenging',
    requirements: [
      'Good physical fitness',
      'Previous trekking experience recommended',
      'Proper trekking gear',
      'Medical clearance for high-altitude trekking'
    ],
    whatToBring: [
      'Sturdy trekking boots',
      'Weather-appropriate clothing',
      'Sleeping bag',
      'Personal first aid kit',
      'Water bottles',
      'Sunscreen and sunglasses'
    ],
    tips: [
      'Start training at least 2-3 months before the trek',
      'Acclimatize properly to the altitude',
      'Stay hydrated throughout the trek',
      'Follow the guide\'s instructions carefully',
      'Respect local customs and environment'
    ]
  },
  {
    id: 'cultural',
    title: 'Cultural Immersion',
    description: 'Experience the unique Balti culture through traditional music, dance, cuisine, and handicrafts. Visit local markets and interact with friendly locals to learn about their way of life.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Gulmit_-_GB_-_04_-_Nasr_Rahman.jpg/500px-Gulmit_-_GB_-_04_-_Nasr_Rahman.jpg',
    alt: 'Cultural experience in a Balti village',
    fullDescription: 'Immerse yourself in the rich cultural heritage of Baltistan. This experience takes you deep into the heart of local communities, where you\'ll learn about traditional crafts, music, and cuisine. Visit ancient mosques, participate in local festivals, and enjoy the warm hospitality of the Balti people.',
    duration: '2-3 days',
    difficulty: 'Easy',
    requirements: [
      'Open mind and cultural sensitivity',
      'Comfortable walking shoes',
      'Respect for local customs'
    ],
    whatToBring: [
      'Camera for capturing memories',
      'Comfortable clothing',
      'Small gifts for hosts (optional)',
      'Notebook for learning local phrases'
    ],
    tips: [
      'Learn a few basic Balti phrases',
      'Ask permission before taking photos',
      'Try local dishes and drinks',
      'Participate in cultural activities',
      'Respect local dress codes'
    ]
  },
  {
    id: 'camping',
    title: 'Wilderness Camping',
    description: 'Camp under the star-studded skies of Skardu, surrounded by breathtaking mountain vistas, enjoying the peaceful solitude and connection with nature.',
    image: 'https://images.pexels.com/photos/6271625/pexels-photo-6271625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Camping in the wilderness of Skardu',
    fullDescription: 'Experience the magic of camping in the wilderness of Skardu. Set up your tent under the vast starry sky, surrounded by majestic mountains and pristine nature. This experience combines adventure with tranquility, offering a unique way to connect with the natural beauty of the region.',
    duration: '1-3 nights',
    difficulty: 'Easy to Moderate',
    requirements: [
      'Basic camping experience',
      'Comfort with outdoor living',
      'Good physical condition'
    ],
    whatToBring: [
      'Tent and sleeping bag',
      'Warm clothing',
      'Cooking equipment',
      'First aid kit',
      'Water purification tablets',
      'Headlamp or flashlight'
    ],
    tips: [
      'Check weather conditions before camping',
      'Set up camp before sunset',
      'Keep food properly stored',
      'Follow Leave No Trace principles',
      'Be prepared for temperature changes'
    ]
  },
  {
    id: 'photography',
    title: 'Photography Tours',
    description: 'Capture the spectacular landscapes of Skardu, from snow-capped peaks and crystal-clear lakes to lush valleys and unique geological formations.',
    image: 'https://images.pexels.com/photos/3265460/pexels-photo-3265460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Photographer capturing Skardu landscapes',
    fullDescription: 'Join our photography tours to capture the stunning beauty of Skardu. Led by experienced photographers, these tours take you to the best locations for landscape, wildlife, and cultural photography. Learn new techniques while documenting the breathtaking scenery and unique moments of your journey.',
    duration: '1-5 days',
    difficulty: 'Easy to Moderate',
    requirements: [
      'Basic photography knowledge',
      'Camera equipment',
      'Comfort with walking'
    ],
    whatToBring: [
      'Camera and lenses',
      'Tripod',
      'Extra batteries and memory cards',
      'Lens cleaning kit',
      'Camera rain cover',
      'Portable hard drive'
    ],
    tips: [
      'Research best times for golden hour',
      'Protect your equipment from weather',
      'Back up photos daily',
      'Be patient for the perfect shot',
      'Respect local photography restrictions'
    ]
  }
];