import {
  people01,
  people02,
  people03,
  facebook,
  instagram,
  linkedin,
  twitter,
  airbnb,
  binance,
  coinbase,
  dropbox,
  send,
  shield,
  star,
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "billing",
    title: "Billing",
  },

  {
    id: "clients",
    title: "Testimonials",
  },
];

export const about = [
  {
    id: "feature-1",
    icon: star,
    title: "100% Secure",
    content:
      "Our devices have encryption features to safeguard user data and enable remote wipe in the case of device theft or loss.",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "Reliable Software",
    content:
      "We take proactive steps make sure our software gives top notch user experience.",
  },
  {
    id: "feature-3",
    icon: send,
    title: "File Transfer",
    content:
      "File Transfer between Apple devices is super easy since everything is connected on a single network.",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "I used to use Android, but now that I've switched to iOS, I can't go back.",
    name: "Herman Jensen",
    title: "Customer",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "The inter-connectivity of Apple devices makes managing everything super easy.",
    name: "Steve Mark",
    title: "Customer",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "It just looks so good! The whole aesthetic of Apple products is emmaculate.",
    name: "Kenn Gallagher",
    title: "Customer",
    img: people03,
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "Active Users",
    value: "1.2 Billion+",
  },
  {
    id: "stats-2",
    title: "Most Trusted Brand",
    value: "2022",
  },
  {
    id: "stats-3",
    title: "Valuation",
    value: "$2.28 Trillion+",
  },
];

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "About Us",
        link: "",
      },
      {
        name: "Products",
        link: "",
      },
      {
        name: "Services",
        link: "",
      },
      {
        name: "Explore",
        link: "",
      },
      {
        name: "Terms & Conditions",
        link: "",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "",
      },
      {
        name: "Partners",
        link: "",
      },
      {
        name: "Suggestions",
        link: "",
      },
      {
        name: "Blog",
        link: "",
      },
      {
        name: "Newsletters",
        link: "",
      },
    ],
  },
  {
    title: "For Business",
    links: [
      {
        name: "Apple and Business",
        link: "",
      },
      {
        name: "Shop for Business",
        link: "",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
];
