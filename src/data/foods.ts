import { FoodItem, CategoryTab } from "@/types";

export const foods: FoodItem[] = [
  {
    id: "hyderabadi-biryani",
    name: "Hyderabadi Biryani",
    category: "Biryani",
    price: 7.50,
    calories: 450,
    diameterCm: 15.05,
    rating: 4.8,
    reviewCount: 1050,
    description:
      "Hyderabadi biryani is a culinary masterplace that tantalizes the senses with its aromatic spices, tender meat, and fragrant basmati rice. Originating from the vibrant city of Hyaderabad in india, this iconic dish......",
    image: "https://www.figma.com/api/mcp/asset/1effe879-2f3d-42a8-948a-b556d6e41d65",
    distanceKm: 2.5,
    deliveryMinutes: 20,
  },
  {
    id: "bombay-biryani",
    name: "Bombay Biryani",
    category: "Biryani",
    price: 8.50,
    calories: 380,
    diameterCm: 15.05,
    rating: 4.5,
    reviewCount: 1320,
    description:
      "Bombay biryani is a delightful fusion of Mughal and Maharashtrian culinary traditions. This aromatic rice dish is cooked with spiced meat, caramelized onions, and a unique blend of spices that make it distinct from other biryanis......",
    image: "https://www.figma.com/api/mcp/asset/4230a7d5-ae21-497a-8365-c50f160091f4",
    distanceKm: 3.5,
    deliveryMinutes: 25,
  },
  {
    id: "onion-capsicum-pizza",
    name: "Onion Capsicum Pizza",
    category: "Pizza",
    price: 10.50,
    calories: 480,
    diameterCm: 18.05,
    rating: 4.9,
    reviewCount: 1550,
    description:
      "A crispy thin-crust pizza loaded with fresh onions, capsicum, mozzarella cheese and house tomato sauce. The perfect balance of crunch and flavour in every bite......",
    image: "https://www.figma.com/api/mcp/asset/23d34b97-389d-48fd-b5f3-9b5225307c34",
    distanceKm: 1.8,
    deliveryMinutes: 18,
  },
  {
    id: "paneer-matar-pizza",
    name: "Paneer & Matar Pizza",
    category: "Pizza",
    price: 9.50,
    calories: 460,
    diameterCm: 12.05,
    rating: 4.2,
    reviewCount: 1130,
    description:
      "A rich and satisfying pizza topped with fresh paneer cubes, green peas, and aromatic spices on a crispy base with a creamy sauce. A vegetarian delight......",
    image: "https://www.figma.com/api/mcp/asset/23d34b97-389d-48fd-b5f3-9b5225307c34",
    distanceKm: 2.1,
    deliveryMinutes: 22,
  },
  {
    id: "veg-burger",
    name: "Veg Burger",
    category: "Burger",
    price: 12.50,
    calories: 560,
    diameterCm: 6.05,
    rating: 4.2,
    reviewCount: 1130,
    description:
      "A hearty veggie burger packed with a crispy patty, fresh lettuce, tomatoes, onions, and our special sauce, all sandwiched in a toasted sesame bun......",
    image: "https://www.figma.com/api/mcp/asset/5d67f1a6-54cd-42cf-aee7-dfa5b2383ba6",
    distanceKm: 1.2,
    deliveryMinutes: 15,
  },
  {
    id: "paneer-burger",
    name: "Paneer Burger",
    category: "Burger",
    price: 8.50,
    calories: 460,
    diameterCm: 4.00,
    rating: 4.6,
    reviewCount: 1230,
    description:
      "A grilled paneer patty burger with fresh vegetables, mint chutney and cheese in a soft sesame bun. Light, flavourful and deeply satisfying......",
    image: "https://www.figma.com/api/mcp/asset/5d67f1a6-54cd-42cf-aee7-dfa5b2383ba6",
    distanceKm: 1.5,
    deliveryMinutes: 17,
  },
  {
    id: "veg-sandwich",
    name: "Veg Sandwich",
    category: "Sandwich",
    price: 7.50,
    calories: 460,
    diameterCm: 4.00,
    rating: 4.6,
    reviewCount: 1230,
    description:
      "A fresh and crunchy sandwich layered with seasonal vegetables, cheese, and a house spread on toasted multigrain bread. Perfect for a quick and healthy bite......",
    image: "https://www.figma.com/api/mcp/asset/7264a2b9-7e5b-4cec-aa53-7329d176bc67",
    distanceKm: 0.8,
    deliveryMinutes: 12,
  },
  {
    id: "potato-sandwich",
    name: "Potato Sandwich",
    category: "Sandwich",
    price: 6.50,
    calories: 460,
    diameterCm: 4.00,
    rating: 4.6,
    reviewCount: 1343,
    description:
      "A classic potato sandwich made with spiced mashed potatoes, green chutney, and toasted bread. A beloved street-food favourite brought to your doorstep......",
    image: "https://www.figma.com/api/mcp/asset/7264a2b9-7e5b-4cec-aa53-7329d176bc67",
    distanceKm: 0.9,
    deliveryMinutes: 13,
  },
];

export const categoryTabs: CategoryTab[] = [
  { label: "Biryani",      image: "https://www.figma.com/api/mcp/asset/2ad22256-96ab-4726-9233-164aaf3cb8fc" },
  { label: "Pizza",        image: "https://www.figma.com/api/mcp/asset/23d34b97-389d-48fd-b5f3-9b5225307c34" },
  { label: "Burger",       image: "https://www.figma.com/api/mcp/asset/5d67f1a6-54cd-42cf-aee7-dfa5b2383ba6" },
  { label: "Sandwich",     image: "https://www.figma.com/api/mcp/asset/7264a2b9-7e5b-4cec-aa53-7329d176bc67" },
  { label: "Momos",        image: "https://www.figma.com/api/mcp/asset/fbe5ee2c-9e9e-4b9e-b633-0d196a8e6422" },
  { label: "Spring Roll",  image: "https://www.figma.com/api/mcp/asset/df7c60c7-e486-4db8-bbd1-b0f3ce999955" },
  { label: "French Frise", image: "https://www.figma.com/api/mcp/asset/1090f134-3683-4694-a264-f9fd1601ed4b" },
  { label: "Salad",        image: "https://www.figma.com/api/mcp/asset/3ba06ba0-67af-4a6b-8e38-8f8aa120025a" },
];

export const splashImages = [
  "https://www.figma.com/api/mcp/asset/b653776f-434e-4c02-b44f-4a5df8f19698", // momos (circle 3, bottom-left)
  "https://www.figma.com/api/mcp/asset/c6add519-6e66-40c0-b7e7-5912fd10b9ce", // spring roll (circle 5, right-mid)
  "https://www.figma.com/api/mcp/asset/204cdfb9-b018-4d52-a1a9-9ac7177b76d4", // burger (circle 4, center-bottom)
  "https://www.figma.com/api/mcp/asset/289f23d0-b500-4362-a43b-9c12a940f250", // pizza (circle 2, center)
  "https://www.figma.com/api/mcp/asset/c0d48b44-17d1-4bdb-b976-793784120b89", // biryani (circle 1, top-right)
  "https://www.figma.com/api/mcp/asset/a34a270d-e75b-4c40-828d-2251dd52fd39", // rotated food (circle 6, top-left)
];
