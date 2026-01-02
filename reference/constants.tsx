
import { Product, Testimonial, PortfolioItem } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Ocean Breeze Resin Tray',
    category: 'Trays',
    price: 45.00,
    description: 'Hand-poured resin art capturing the serenity of the ocean waves. Each piece is unique, crafted with passion, and features layers of translucent blue resin and real sand to bring the beach to your home.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBK9H3mFjSZSvHxSp8ySTeqKzJ0W6mnXZG7b4snYtNCabpM-diac6Ev1BjvHbX_pL8o5OR6NCg8xzFN5VLQxTjyNJAy-jJd6-xOsl1HP4MxlDUlrs-degX0kErZUwIhNf7LaIe7pldIEJXJ2wELsSqgO8abJPjrt4o4PBW5i2Tz-fUu52bJd7zSpZ4AnDqOKdpa3qKniKwTZlICVrzVnmgUZTSQgXphM4DgjEfniEzK4c8hrQYhxhrx9o78ypSlpK6Ip2CH_CtBNzbT',
    isNew: true,
    details: ['Diameter: 12 inches', 'Heat resistant up to 120°F', 'Real sand and pigments']
  },
  {
    id: 'p2',
    name: 'Ocean Coasters (Set of 4)',
    category: 'Coasters',
    price: 28.00,
    description: 'Deep teal and gold resin coasters with a realistic geode aesthetic.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDqHhRzYnZJwj7HSrqduEi7sbCRp5B-lyes_PwNRrPqSO2-iXXVQ1qx2LuyjF-sr35PmjiIGp3JsPqdOCx2s7QS1hIEIA3R-SXO6HpiCXs2bibA61STN4lqzek-ATrwzMbEGgNX0tu_xiH36GXV-cRhLZz5WA1IzTEKlm-Lo_zbX3dDg3xkiyHxPstlRO0J_X55zIWsmgq4tfe4qzXyVCQmOQpcIN5_APqLgsTXo9XR4HOBSf8a02iJhmt7N9RFZpBOQqBVegNtB2Yp'
  },
  {
    id: 'p3',
    name: 'Sea Salt & Orchid Candle',
    category: 'Candles',
    price: 18.00,
    oldPrice: 22.00,
    description: 'A soothing mix of sea salt and orchid in a minimal glass jar.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAVFzlTZlivav6i8SriL8i6Yd_AB219pc-vQfSztS3gZRnGz57-uHJLk4oUy2EtScIP7sNKhoRnE1lTmijvq5n5AHwABFRk5_L3vXDzZh2gBBv4NWgjiRrWfLy39gqtUoI0W6M0msS_0KIJZX-9H2WbXF9EbcmubvHZuEz2HvEPZ7fCp-6dQvI7o16yQxQsinLmeNFsNSFF1LcbY_bCP9uz8JJ_2XMo3ltHQzgNKMwWl9OWjFTV-Xf0oBAD7Z2i1hIM3FueEJ38yiZ1'
  },
  {
    id: 'p4',
    name: 'Cheese Board w/ Resin',
    category: 'Trays',
    price: 55.00,
    description: 'Natural wood cheese board with a wave-patterned resin handle.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuADjrd5Q7OiLTLnv6yhAIyvg_AxWe26X-mkDyyzND8kl6gpVArZ9oDJDLixzWh1g38-cKhkIL9xM2XcignLBvWrfkVfgw-ZqJvPKIGqjuTCPdm08rukdL3PX2828YZI55uu0LRbmZr18fYeMHdWIVMMk1PvG5Fq1qaJsMWKyN6P_Mtcj4g_NycP9HxchguYVFUQpW9n44cxXDYJHsAYzByZqmtZMSOZ2vPHAxcVEZqn-Gp6T264rTLod_kX3UaUGZsdbQHZgtcIuIde'
  },
  {
    id: 'p5',
    name: 'Seashell Trinket Dish',
    category: 'Resin Art',
    price: 15.00,
    description: 'A delicate white shell-shaped dish with elegant gold edging.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHxSf76gY-yWM5tpRUOsARGT7FmwyYV0xOKYItetsRd3KTIswfEp4vrbc0k-QNqBEB_5k2gHXt6KPSxlg851r5sLSQIKP5xo7DUlZv5ESLAmkJakFDqEojk3J2LVGgfq73_mqjWw3LdQ1l_ulkIRJVUpAVohfR8wuKT_nug2PUczeK_sE90YmFTvct7s0PMelBfRy8uhO4RYrt4gKVZrZAQguBzgra3-_PAfUBF-_F26OqDIUh1PbC81Gp4XO8dQEeNpOk7q52MZJc'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah Jenkins',
    location: 'Mumbai',
    text: '"I ordered a custom resin ocean tray for my sister\'s wedding, and it was absolutely stunning. The depth of the colors is incredible!"',
    avatar: 'https://picsum.photos/seed/sarah/100/100'
  },
  {
    id: 't2',
    name: 'Rohan Mehta',
    location: 'Bangalore',
    text: '"The scented candles from Art Tales are a vibe. They burn cleanly and the scent is just perfect for my evening reading."',
    avatar: 'https://picsum.photos/seed/rohan/100/100'
  }
];

export const PORTFOLIO: PortfolioItem[] = [
  {
    id: 'pf1',
    title: 'Cerulean Tide Coffee Table',
    category: 'Furniture',
    description: 'Large scale ocean pour with deep cerulean and turquoise pigments.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBK9H3mFjSZSvHxSp8ySTeqKzJ0W6mnXZG7b4snYtNCabpM-diac6Ev1BjvHbX_pL8o5OR6NCg8xzFN5VLQxTjyNJAy-jJd6-xOsl1HP4MxlDUlrs-degX0kErZUwIhNf7LaIe7pldIEJXJ2wELsSqgO8abJPjrt4o4PBW5i2Tz-fUu52bJd7zSpZ4AnDqOKdpa3qKniKwTZlICVrzVnmgUZTSQgXphM4DgjEfniEzK4c8hrQYhxhrx9o78ypSlpK6Ip2CH_CtBNzbT'
  },
  {
    id: 'pf2',
    title: 'Floral Preservation Cube',
    category: 'Botanical',
    description: 'Preserving a wedding bouquet in high-clarity crystal resin.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHxSf76gY-yWM5tpRUOsARGT7FmwyYV0xOKYItetsRd3KTIswfEp4vrbc0k-QNqBEB_5k2gHXt6KPSxlg851r5sLSQIKP5xo7DUlZv5ESLAmkJakFDqEojk3J2LVGgfq73_mqjWw3LdQ1l_ulkIRJVUpAVohfR8wuKT_nug2PUczeK_sE90YmFTvct7s0PMelBfRy8uhO4RYrt4gKVZrZAQguBzgra3-_PAfUBF-_F26OqDIUh1PbC81Gp4XO8dQEeNpOk7q52MZJc'
  },
  {
    id: 'pf3',
    title: 'Midnight Galaxy Tray',
    category: 'Trays',
    description: 'Custom pour featuring holographic glitter and midnight blacks.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBtBMUDwV57i2q5NZWVGKgTyKKvJHzAP8loKAuOsQHOHPtWSYnFiPxVH7nzUGU_Ue1VA-_XSmIy-01TxyxiCzKSWgEp6DSwuzNBVPeshfcPinvPsL0bJCoO-osURzLZzH2A8btrhvs5mJI6BMsv57dUz2axcVQbaNoPfQgymTGohzyswXPveDVUhGi4o7dQd5ZLVpWMaSfMD0sErgd5ZcvmW_T5gaOCHw41ZcayXhsPmtiLCoicENqD8AiSMeF5rIdaJ-3rSUEvPYM8'
  },
  {
    id: 'pf4',
    title: 'Midnight Blue Clock',
    category: 'Clocks',
    description: 'Functional art piece with gold hands and numbering.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCA8m181iTygEATB_cVVIOC3vJuriC1eEo4w2-J4YzW-OwoqaHoODSvcNweV3tYY14hZMiJ_hY8wosYKJk7hxym0eiCqVR3cC-SkIoyjPR_pNce1XaapCN8BH2SDeAWqWKetrCRgwyhGSyyn_igrATT23boxh5GOfjcGFU4cyU_-SYdmvsIEZ_FW3M13wNXnPMXn4s8af-ADvI9THqvWv4VTOS8C8XcR7QOzpIkhiQj6YJZEdnNgu7HFrLL8g_a5aptjGanqDL9s0Nq'
  },
  {
    id: 'pf5',
    title: 'Lavender Mist Candle',
    category: 'Candles',
    description: 'Hand-poured soy wax with calming essential oils.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB6GhjvOOefO4Yr1G8sFKf7kux9LYo9XV16xtlfoVWUjAkjeyFioxmUN-SH179pzTOkJZ8B7mMgDbh2xVclLfB3fBf3Pp1TuKdct__ngh5kkw6vRW36PUOZaGM4M-gVNGgzvJSAGYM3Biuubez6UlX5gFwXPPq0M-28IQaIofafViGY-ZNuPh0qEjiOJTmu6Ij3jh9AXSllPcOJU-CFkrZdDHZLhvJ8pHj2YEu4DIILvJVexpw4F3QgjH8T41XF-jfZS1eFlkSdN5n1'
  },
  {
    id: 'pf6',
    title: 'Noir Gold Coaster Set',
    category: 'Trays',
    description: 'Abstract gold and black resin coaster set.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC8dWo4WTBnBgeiB39ePRPS0G_0Mkw6w4JD5zM1X07wiUF9ZpuAXP-c_FmIxqRE1so8NIxdPhJjm_vXQaDeaghIKRoujPO6eP6jdaMUadBcLP9WlXvMNBigvhpfVrCtBcV1jpEbH-MExmuzc3qdZcCmS84WM-2jvrwwFVQWW5-aiheWMpbEFR2n1Th0iovDynFCpXo3zTn8SgVlZ854L4DUqEgpY0uLhSMEljL4c_KdrO9q13pc88S2l0i18_sWIvxrMeka9L3IxrfS'
  }
];
