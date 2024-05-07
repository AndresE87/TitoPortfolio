import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const FIRST_SKILL = [{
  skill_name: "solidity",
  image: "solidity.svg",
  width: 80,
  height: 80,
}]

export const SECOND_SKILL = [
  {
    skill_name: "ethereum",
    image: "ethereum.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "web3",
    image: "web3.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "truffle",
    image: "truffle.png",
    width: 80,
    height: 80,
  },
]

export const THIRD_SKILL = [
  {
    skill_name: "ganache",
    image: "ganache.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "bitcoin",
    image: "bitcoin.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "python",
    image: "python.svg",
    width: 80,
    height: 80,
  },
  // {
  //   skill_name: "hyperledger",
  //   image: "hyperledger.svg",
  //   width: 80,
  //   height: 80,
  // },
  {
    skill_name: "go",
    image: "go.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "rust",
    image: "rust.svg",
    width: 80,
    height: 80,
  },
  // {
  //   skill_name: "cryptocurrency",
  //   image: "cryptocurrency.svg",
  //   width: 80,
  //   height: 80,
  // },
  {
    skill_name: "ipfs",
    image: "ipfs.png",
    width: 80,
    height: 80,
  },
]

export const FORTH_SKILL = [
  {
    skill_name: "cryptography",
    image: "cryptography.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Quorum",
    image: "quorum.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Corda",
    image: "corda.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "tezos",
    image: "tezos.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "ts",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  // {
  //   skill_name: "react",
  //   image: "react.png",
  //   width: 80,
  //   height: 80,
  // },
  {
    skill_name: "vue",
    image: "vue.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "html",
    image: "html.png",
    width: 80,
    height: 80,
  },
  // {
  //   skill_name: "css",
  //   image: "css.png",
  //   width: 80,
  //   height: 80,
  // },
  // {
  //   skill_name: "redux",
  //   image: "redux.png",
  //   width: 80,
  //   height: 80,
  // },
  {
    skill_name: "express",
    image: "express.png",
    width: 80,
    height: 80,
  },
]
export const FIFTH_SKILL = [
  {
    skill_name: "mysql",
    image: "mysql.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "potgres",
    image: "potgres.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "firebase",
    image: "firebase.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "git",
    image: "git.svg",
    width: 80,
    height: 80,
  },
  // {
  //   skill_name: "docker",
  //   image: "docker.png",
  //   width: 80,
  //   height: 80,
  // },
  {
    skill_name: "next",
    image: "next.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "nest",
    image: "nest.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "socket",
    image: "socket.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "webpack",
    image: "webpack.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "django",
    image: "django.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "c++",
    image: "c++.svg",
    width: 80,
    height: 80,
  },
]

export const OTHER_SKILL = [
  {
    skill_name: "Go",
    image: "go.png",
    width: 60,
    height: 60,
  },
] as const;

export const PROJECTS = [
  {
    title: "BlockTopia!",
    description:
      'Bloktopia is the one-stop shop for everything Cryptocurrency and NFTs. Learn the basics or study advanced topics, earn money, play games, make connections, and much more in an immersive virtual environment!',
    image: "/projects/bloktopia.com.png",
    link: "https://bloktopia.com",
  },
  {
    title: "DecentralLand!",
    description:
      'Decentraland is a world built by YOU where the only limit is your imagination. Create and sell Wearables & Emotes, construct captivating scenes and interactive experiences, or set up a personal space in your own World.',
    image: "/projects/decentraland.org.png",
    link: "https://decentraland.org",
  },
  {
    title: "Sensoriumarc!",
    description:
      'Discover the new frontier of digital entertainment with Sensorium Arc - a decentralized platform where the global Web3 community comes together to shape engaging and participatory digital experiences leveraging cutting-edge blockchain innovations',
    image: "/projects/sensoriumarc.com.png",
    link: "https://sensoriumarc.com",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      {
        name: "YouTube",
        icon: FaYoutube,
        link: "https://youtube.com",
      },
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com",
      },
      {
        name: "Discord",
        icon: RxDiscordLogo,
        link: "https://discord.com",
      },
    ],
  },
  {
    title: "Social Media",
    data: [
      {
        name: "Instagram",
        icon: RxInstagramLogo,
        link: "https://instagram.com",
      },
      {
        name: "Twitter",
        icon: RxTwitterLogo,
        link: "https://twitter.com",
      },
      {
        name: "Linkedin",
        icon: RxLinkedinLogo,
        link: "https://linkedin.com",
      },
    ],
  },
  {
    title: "About",
    data: [
      {
        name: "Become Sponsor",
        icon: null,
        link: "https://youtube.com",
      },
      {
        name: "Learning about me",
        icon: null,
        link: "https://example.com",
      },
      {
        name: "Contact Me",
        icon: null,
        link: "mailto:contact@example.com",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/sanidhyy/space-portfolio",
};
