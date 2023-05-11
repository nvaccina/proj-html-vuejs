const mainMenu = [
  {
    href: "#",
    text: "HOME",
    isActive: true,
    isdrop: false
  },
  {
    href: "#",
    text: "ABOUT",
    isActive: false,
    isdrop: false
  },
  {
    href: "#",
    text: "PRICES",
    isActive: false,
    isdrop: false
  },
  {
    href: "#",
    text: "COURSES",
    isActive: false,
    isdrop: true,
    dropdownMenu: ['Intensive', 'Pass Plus', 'Instructor']
  },
  {
    href: "#",
    text: "LOCATIONS",
    isActive: false,
    isdrop: false
  },
  {
    href: "#",
    text: "BLOG",
    isActive: false,
    isdrop: false
  }
];

const contactDetails = [
  {
    icon: "fa-solid fa-house",
    href: "#",
    text: "12345 North Main Street, New York, NY 555555",
  },
  {
    icon: "fa-solid fa-phone",
    href: "#",
    text: "1.800.555.6789",
  },
  {
    icon: "fa-regular fa-envelope",
    href: "#",
    text: "info@your-domain.com",
  },
  {
    icon: "fa-solid fa-link",
    href: "#",
    text: "Theme-Fusion.com",
  }
];
const listCourses = [
  {
    icon: "fa-regular fa-circle-right",
    href: "#",
    text: "Pass Plus",
  },
  {
    icon: "fa-regular fa-circle-right",
    href: "#",
    text: "Intensive Course",
  },
  {
    icon: "fa-regular fa-circle-right",
    href: "#",
    text: "Automatic",
  },
  {
    icon: "fa-regular fa-circle-right",
    href: "#",
    text: "Instructor Training",
  }
];
const iconSocial = [
  {
    icon: "fa-brands fa-facebook-f",
    href: "#",
  },
  {
    icon: "fa-brands fa-twitter",
    href: "#",
  },
  {
    icon: "fa-brands fa-youtube",
    href: "#",
  },
  {
    icon: "fa-brands fa-instagram",
    href: "#",
  }
];
const instructors = [
  {
    image: 'instructor-mikehart',
    name: 'Mike Hart',
    icons: ['fa-brands fa-facebook-f','fa-brands fa-twitter', 'fa-brands fa-instagram'],
    href: "#",
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    image: 'instructor-johnsmith',
    name: 'John Smith',
    icons: ['fa-brands fa-facebook-f','fa-brands fa-twitter', 'fa-brands fa-instagram'],
    href: "#",
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    image: 'instructor-angelahart',
    name: 'Angela Hart',
    icons: ['fa-brands fa-facebook-f','fa-brands fa-twitter', 'fa-brands fa-instagram'],
    href: "#",
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  }
];
const listTestimonial = [
  {
    image: 'testimonial-kate',
    name: 'Kate Lewis',
    text: 'Avada Driving School really helped build my confidence behind the wheel and with driving in general, and they got me a first time pass! Highly recommended.'
  },
  {
    image: 'testimonial-harold',
    name: 'Harold Green',
    text: 'Avada Driving School really helped build my confidence behind the wheel and with driving in general, and they got me a first time pass! Highly recommended.'
  },
  {
    image: 'testimonial-kelly',
    name: 'Kelly Johnson',
    text: 'Avada Driving School really helped build my confidence behind the wheel and with driving in general, and they got me a first time pass! Highly recommended.'
  },
  {
    image: 'testimonial-grant',
    name: 'Grant Harvey',
    text: 'Avada Driving School really helped build my confidence behind the wheel and with driving in general, and they got me a first time pass! Highly recommended.'
  },
  {
    image: 'testimonial-sophia',
    name: 'Sophia Jones',
    text: 'Avada Driving School really helped build my confidence behind the wheel and with driving in general, and they got me a first time pass! Highly recommended.'
  }
]


export {mainMenu, contactDetails, listCourses, iconSocial, instructors, listTestimonial};