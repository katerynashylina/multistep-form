export const steps = [
  {
    number: 1,
    text: 'your info',
  },
  {
    number: 2,
    text: 'select plan',
  },
  {
    number: 3,
    text: 'add-ons',
  },
  {
    number: 4,
    text: 'summary',
  },
];

export const plans = [
  {
    id: 1,
    image: "icon-arcade.svg",
    name: "Arcade",
    price: 9,
  },
  {
    id: 2,
    image: "icon-advanced.svg",
    name: "Advanced",
    price: 12,
  },
  {
    id: 3,
    image: "icon-pro.svg",
    name: "Pro",
    price: 15,
  },
];

export const terms = ['monthly', 'yearly'];

export const addOns = [
  {
    id: 1,
    name: 'Online service',
    text: 'Access to multiplayer games',
    price: 1,
  },
  {
    id: 2,
    name: 'Larger storage',
    text: 'Extra 1TB of cloud save',
    price: 2,
  },
  {
    id: 3,
    name: 'Customizable Profile',
    text: 'Custom theme on your profile',
    price: 2,
  },
]

export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const phoneRegex = /^\+?\d{1,3}[-\s]?\d{3,}[-\s]?\d{3,}[-\s]?\d{3,}$/;
