import {
    information,
    connect,
    tutorials,
    sunny_image,
    mostly_sunny_image,
    partly_cloudy_image,
    sunny_audio,
    mostly_sunny_audio,
    partly_cloudy_audio,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "home",
      title: "Home",
    },
    {
      id: "tutorials",
      title: "Tutorial",
    },
    {
      id: "about",
      title: "About",
    },
    {
      id: "language",
      title: "Language",
    },
  ];

  const services = [
    {
      title: "Real-Time Market Information",
      icon: information,
    },
    {
      title: "Connect With Farmers",
      icon: connect,
    },
    {
      title: "Tutorials To Maximize Yield",
      icon: tutorials,
    },
    
  ];
  
  const experiences = [
    {
      title: "DAY 1 - Irrigation",
      company_name: "Sunny",
      icon: sunny_image,
      iconBg: "#383E56",
      date: "41°C",
      audio : sunny_audio,
      points: [
        "With temperatures above 40C, it is important to keep the crops well hydrated. Watering should be done either early in the morning or late in the evening to avoid excessive evaporation"
      ],
    },
    {
      title: "DAY 2 - Shade & Harvest",
      company_name: "Mostly Sunny",
      icon: mostly_sunny_image,
      iconBg: "#E6DEDD",
      date: "40°C",
      audio : mostly_sunny_audio,
      points: [
        "For crops that are sensitive to direct sunlight, you can provide shade using nets or other materials to protect them from the sun's intense heat",
      ],
    },
    {
      title: "DAY 3 - Stress Monitoring",
      company_name: "Partly Cloudy",
      icon: partly_cloudy_image,
      iconBg: "#383E56",
      date: "37°C",
      audio : partly_cloudy_audio,
      points: [
        "If there are any crops that are ripe and ready to harvest, it is best to do so in the early morning hours before the temperature starts to rise",
      ],
    },
    // {
    //   title: "Checking Irrigation",
    //   company_name: "Partly Cloudy",
    //   // icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "34°C",
    //   points: [
    //     "The farmer should ensure that the irrigation systems are functioning properly and that there are no leaks or clogs that could lead to water wastage",
    //   ],
    // },
  ];
  
  // // const testimonials = [
  // //   {
  // //     testimonial:
  // //       "I thought it was impossible to make a connectsite as beautiful as our product, but Rick proved me wrong.",
  // //     name: "Sara Lee",
  // //     designation: "CFO",
  // //     company: "Acme Co",
  // //     image: "https://randomuser.me/api/portraits/women/4.jpg",
  // //   },
  // //   {
  // //     testimonial:
  // //       "I've never met a connect developer who truly cares about their clients' success like Rick does.",
  // //     name: "Chris Brown",
  // //     designation: "COO",
  // //     company: "DEF Corp",
  // //     image: "https://randomuser.me/api/portraits/men/5.jpg",
  // //   },
  // //   {
  // //     testimonial:
  // //       "After Rick optimized our connectsite, our traffic increased by 50%. We can't thank them enough!",
  // //     name: "Lisa Wang",
  // //     designation: "CTO",
  // //     company: "456 Enterprises",
  // //     image: "https://randomuser.me/api/portraits/women/6.jpg",
  // //   },
  // // ];
  
  // const projects = [
  //   {
  //     name: "BingeHub",
  //     description:
  //       "An API based project, which helps you in keeping a track of all the movies,shoes and animes you have watched, want's to watch, your favourites and many more features.",
  //     tags: [
  //       {
  //         name: "react",
  //       },
  //       {
  //         name: "Node.js",
  //       },
  //     ],
  //     image: bingeHub,
  //     source_code_link: "https://github.com/mahanshAdtiya/BingeHub.git",
  //   },
  //   {
  //     name: "msh-custom shell",
  //     description:
  //       "It's a custom shell made by me in C language which runs all the basic commands of linux and also use emoticons to give a sense of friendly enviornment",
  //     tags: [
  //       {
  //         name: "C-Language",
  //       },
  //       {
  //         name: "Linux",
  //       },
  //     ],
  //     image: mshCustomShell,
  //     source_code_link: "https://github.com/mahanshAdtiya/Msh-Custom-Shell.git",
  //   },
  //   {
  //     name: "Tank-Start",
  //     description:
  //       "A game called Tanks stars which is a player versus player experience. In creating this game, we utilized object-oriented programming concepts and applied design principles utilizing the Libgdx library.",
  //     tags: [
  //       {
  //         name: "Java-Language",
  //       },
  //       {
  //         name: "Libgdx Library",
  //       },
        
  //     ],
  //     image: tankStar,
  //     source_code_link: "https://github.com/AaravBalachandran/Game.git",
  //   },
  // ];
  
  // export { services, experiences, projects }; 
export {services,experiences,};