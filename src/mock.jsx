import banner1 from './assets/banners/BANNER1.jpg';
import banner2 from './assets/banners/BANNER2.jpg';
import banner3 from './assets/banners/BANNER3.jpg';
import banner4 from './assets/banners/BANNER4.jpg';
import banner5 from './assets/banners/BANNER5.jpg';
import banner6 from './assets/banners/BANNER6.jpg';

import food1 from './assets/images/food1.jpeg';
import food2 from './assets/images/food2.jpeg';
import food3 from './assets/images/food3.jpg';
import food4 from './assets/images/food4.jpg';
import food5 from './assets/images/food5.jpg';
import food6 from './assets/images/food6.jpeg';
import food7 from './assets/images/food7.png';
import food8 from './assets/images/food8.png';
import food9 from './assets/images/food9.png';
import food10 from './assets/images/food10.png';
import food11 from './assets/images/food11.jpg';
import food12 from './assets/images/food12.jpeg';
import food13 from './assets/images/food13.jpeg';
import food14 from './assets/images/food14.jpeg';
import food15 from './assets/images/food15.jpg';
import food16 from './assets/images/food16.jpeg';
import food17 from './assets/images/food17.jpg';
import food18 from './assets/images/food18.jpeg';
import food19 from './assets/images/food19.jpeg';
import food20 from './assets/images/food20.jpeg';
import food21 from './assets/images/food21.jpeg';

// Mock data for Madras Cafe (South Indian restaurant)

export const signatureDishes = [
  {
    id: 1,
    name: "Masala Dosa",
    desc: "Crispy golden crepe filled with spiced potato masala. Served with sambar & three chutneys.",
    price: "\u20b9 180",
    image: food12,
    tag: "Bestseller",
  },
  {
    id: 2,
    name: "Idli & Sambar",
    desc: "Steamed rice cakes, soft as cloud, drowned in lentil sambar with coconut chutney.",
    price: "\u20b9 120",
    image: food12,
    tag: "Classic",
  },
  {
    id: 3,
    name: "Mini Tiffin",
    desc: "A taste of everything \u2014 idli, vada, mini dosa, pongal, sambar & chutney platter.",
    price: "\u20b9 220",
    image: "https://images.pexels.com/photos/35351659/pexels-photo-35351659.jpeg",
    tag: "Popular",
  },
  {
    id: 4,
    name: "Meals (Banana Leaf)",
    desc: "Traditional unlimited South Indian thali on a banana leaf. Rice, sambar, rasam, curries, sweets.",
    price: "\u20b9 320",
    image: "https://images.pexels.com/photos/5410418/pexels-photo-5410418.jpeg",
    tag: "Heritage",
  },
];

export const menuCategories = {
  Breakfast: [
    { name: "Masala Dosa", image: food12, price: "\u20b9 180" },
    { name: "Idli Vada", image: food12, price: "\u20b9 140" },
    { name: "Pongal", image: "https://images.pexels.com/photos/5410418/pexels-photo-5410418.jpeg", price: "\u20b9 150" },
    { name: "Rava Dosa", image: "https://images.pexels.com/photos/32229637/pexels-photo-32229637.png", price: "\u20b9 170" },
    { name: "Upma", image: food12, price: "\u20b9 110" },
  ],
  Lunch: [
    { name: "Banana Leaf Meals", image: "https://images.pexels.com/photos/35351659/pexels-photo-35351659.jpeg", price: "\u20b9 320" },
    { name: "Curd Rice", image: food3, price: "\u20b9 140" },
    { name: "Sambar Rice", image: "https://images.pexels.com/photos/20422121/pexels-photo-20422121.jpeg", price: "\u20b9 160" },
    { name: "Hyderabadi Biryani", image: food12, price: "\u20b9 320" },
    { name: "Vegetable Kuzhambu", image: "https://images.pexels.com/photos/35287413/pexels-photo-35287413.jpeg", price: "\u20b9 220" },
  ],
  Snacks: [
    { name: "Medu Vada", image: food12, price: "\u20b9 90" },
    { name: "Bonda", image: "https://images.pexels.com/photos/11887844/pexels-photo-11887844.jpeg", price: "\u20b9 80" },
    { name: "Onion Pakora", image: "https://images.pexels.com/photos/33947401/pexels-photo-33947401.jpeg", price: "\u20b9 100" },
    { name: "Mysore Bonda", image: food12, price: "\u20b9 110" },
    { name: "Banana Bajji", image: "https://images.pexels.com/photos/20446398/pexels-photo-20446398.jpeg", price: "\u20b9 90" },
  ],
  Beverages: [
    { name: "Madras Filter Coffee", image: food12, price: "\u20b9 90" },
    { name: "Masala Chai", image: food12, price: "\u20b9 70" },
    { name: "Tender Coconut", image: food12, price: "\u20b9 80" },
    { name: "Buttermilk", image: food12, price: "\u20b9 60" },
    { name: "Rose Milk", image: "https://images.pexels.com/photos/20446398/pexels-photo-20446398.jpeg", price: "\u20b9 90" },
  ],
};

export const aboutContent = {
  eyebrow: "Our Heritage",
  title: "Our Story",
  paragraphs: [
    "Madras Cafe began on a quiet morning in Mylapore, Chennai \u2014 with a brass dabarah of frothy filter coffee and a recipe handed down four generations. What started as a single counter has grown into a sanctuary of authentic South Indian flavours.",
    "Every dosa we serve is hand-spread on a seasoned cast-iron tawa. Every chutney is ground fresh on stone. We believe taste is memory \u2014 and we cook to keep yours alive.",
  ],
  images: [
    food3,
    food12,
  ],
};

export const galleryImages = [
  { src: "https://images.pexels.com/photos/35351659/pexels-photo-35351659.jpeg", h: "tall" },
  { src: food12, h: "short" },
  { src: food12, h: "short" },
  { src: "https://images.pexels.com/photos/5410418/pexels-photo-5410418.jpeg", h: "tall" },
  { src: food3, h: "short" },
  { src: "https://images.pexels.com/photos/20422121/pexels-photo-20422121.jpeg", h: "tall" },
  { src: food12, h: "short" },
  { src: food12, h: "tall" },
];

export const locations = [
  { city: "Chennai", area: "Mylapore", address: "23 Royapettah High Road, Mylapore, Chennai 600004", hours: "7:00 AM \u2013 11:00 PM" },
  { city: "Bengaluru", area: "Indiranagar", address: "100 Feet Road, 12th Main, Indiranagar, Bengaluru 560038", hours: "7:30 AM \u2013 11:30 PM" },
  { city: "Mumbai", area: "Bandra West", address: "Linking Road, Bandra West, Mumbai 400050", hours: "8:00 AM \u2013 12:00 AM" },
  { city: "Hyderabad", area: "Jubilee Hills", address: "Road No. 36, Jubilee Hills, Hyderabad 500033", hours: "7:30 AM \u2013 11:30 PM" },
];

export const testimonials = [
  {
    name: "Priya Ramaswamy",
    role: "Food Blogger \u2014 Chennai",
    quote: "The masala dosa transported me straight back to my paati's kitchen. Every bite is a memory.",
    rating: 5,
    initials: "PR",
  },
  {
    name: "Arjun Krishnan",
    role: "Software Engineer \u2014 Bangalore",
    quote: "Filter coffee here is unmatched. The frothy decoction in a brass tumbler is poetry in a cup.",
    rating: 5,
    initials: "AK",
  },
  {
    name: "Meera Nair",
    role: "Architect \u2014 Mumbai",
    quote: "Their banana leaf meals are pure tradition. Service feels like a warm hug from grandma.",
    rating: 5,
    initials: "MN",
  },
  {
    name: "Vikram Iyer",
    role: "Restaurateur \u2014 Hyderabad",
    quote: "Authentic, no shortcuts, every chutney ground fresh. This is how South Indian food should taste.",
    rating: 5,
    initials: "VI",
  },
  {
    name: "Lakshmi Venkat",
    role: "Homemaker \u2014 Chennai",
    quote: "The pongal here reminds me of festival mornings at home. Perfectly buttery and peppery.",
    rating: 5,
    initials: "LV",
  },
];

export const heroData = {
  eyebrow: "\u2726 Authentic Since 1962 \u2726",
  heading: "AUTHENTIC SOUTH INDIAN FLAVOURS",
  subtext: "From crispy dosas to filter coffee \u2014 experience tradition in every bite.",
  bg: "https://images.pexels.com/photos/35351659/pexels-photo-35351659.jpeg",
};

export const storyPanel = {
  eyebrow: "01 / 02 \u2014 Our Heritage",
  heading: "OUR STORY",
  subheading: "Born on the streets of Madras.",
  body: "From a single brass dabarah of frothy filter coffee in Mylapore to a quiet movement \u2014 four generations have served South India in every cup. We don't reinvent the classics. We protect them.",
  stats: [
    { value: "62+", label: "Years" },
    { value: "08", label: "Outlets" },
    { value: "100%", label: "Banana Leaf" },
    { value: "\u221e", label: "Filter Coffee" },
  ],
  image: "https://images.pexels.com/photos/35351659/pexels-photo-35351659.jpeg",
  badge: "Est. Madras",
};

export const menuPanel = {
  eyebrow: "02 / 02 \u2014 The Madras Menu",
  heading: "THE MENU",
  subheading: "Hand-spread. Stone-ground. Slow-brewed.",
  body: "Every dosa is a confession. Every biryani is a sermon. Every coffee is a small religion. Crafted by hand, served on banana leaf, with love and decoction.",
  highlights: [
    "Hand-Spread Dosas",
    "Stone-Ground Chutneys",
    "Brass Tumbler Coffee",
    "Banana-Leaf Meals",
  ],
  image: "https://images.pexels.com/photos/20422121/pexels-photo-20422121.jpeg",
  badge: "Crafted Slow",
};



