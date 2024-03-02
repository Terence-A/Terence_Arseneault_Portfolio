import atlanticImg from "./assets/atlanticGlamping.jpeg";
import factVImg from "./assets/factv.png";
import dinnerImg from "./assets/whatsForDinner.png";
import weatherImg from "./assets/weatherDashboard.png";
import workImg from "./assets/workDayScheduler.png";

const portfolioData = [
  {
    id: 0,
    title: "Atlantic Glamping",
    image: atlanticImg,
    description:
      "Welcome to Atlantic Glamping, where luxury meets adventure! Our platform offers curated glamping experiences in the Atlantic region, blending the beauty of nature with the comforts of luxury lodging. Discover unique spots, from serene coastal retreats to hidden forest hideaways, all vetted for quality to ensure a memorable stay. With cutting-edge web technologies and a focus on premium experiences, Atlantic Glamping is your gateway to unforgettable adventures.",
    tools: [
      "MySQL",
      "Sequelize",
      "JavaScript",
      "Github Projects",
      "Node.js",
      "Heroku",
      "express.js",
      "bcrypt",
      "EJS",
    ],
    role: [
      "Project management with Github projects",
      "Partials with EJS",
      "Created Gamp bot to help discover locations based on your personality throug a series of questions",
    ],
    deploy: null,
    github: "https://github.com/Terence-A/Atlantic-Glamping",
  },
  {
    id: 1,
    title: "Fact-V-Tech-Lounge",
    image: factVImg,
    description:
      "As a tech enthusiast and frequent visitor to the Tech Lounge, I want to effortlessly browse and purchase food, drinks, and event tickets through a seamless online platform. This way, I can enjoy the unique tech-inspired beverages the lounge is known for, explore a diverse menu, and conveniently secure tickets for upcoming events without leaving the comfort of my seat. The user story includes a user-friendly interface, clear categorization of offerings, and a secure and efficient payment system to enhance my overall experience at the Tech Lounge.",
    tools: [
      "ReactJS",
      "Bootstrap",
      "Cloudinary",
      "GraphQL",
      "Apollo",
      "Mongoose",
      "MongoDB",
    ],
    role: [
      "Shopping cart/pop out",
      "Menu cards",
      "Front-end",
      "Coudinary",
      "Helped varioius parts of back-end",
    ],
    deploy: null,
    github: "https://github.com/Terence-A/fact-v-tech-lounge",
  },
  {
    id: 2,
    title: "Whats for Dinner",
    image: dinnerImg,
    description:
      "Introducing What's for Dinner – your go-to kitchen companion for effortless meal planning and creative cooking using ingredients already in your pantry. Say goodbye to mealtime indecision and hello to a world of delicious possibilities right at your fingertips.",
    tools: ["HTML", "CSS", "JavaScript", "Bootstrap", "API", "Figma"],
    role: ["Mock-up using Figma", "Vegan portion with API's", "Front-end"],
    deploy: "https://terence-a.github.io/WhatsForDinner/index.html",
    github: "https://github.com/Terence-A/WhatsForDinner",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    image: weatherImg,
    description:
      "Introducing Weather Dashboard, the essential tool for travelers seeking a comprehensive 5-day weather forecast for their destination city. With Weather Dashboard, you can effortlessly plan your trip with confidence, knowing what weather conditions to expect throughout your stay. Say goodbye to uncertainty and hello to seamless travel planning with Weather Dashboard.",
    tools: ["HTML", "CSS", "Bootstrap", "Day.js Library", "Openweathermap API"],
    role: ["Sole Developer"],
    deploy: "https://terence-a.github.io/WeatherDashboard/",
    github: "https://github.com/Terence-A/WeatherDashboard",
  },
  {
    id: 4,
    title: "Work Day Scheduler",
    image: workImg,
    description:
      "Introducing the Work Day Scheduler app: your go-to tool for organizing daily tasks. With time blocks, local storage saving, and a display of the current day and working hours (9 AM - 5 PM), stay on top of your schedule effortlessly.",
    tools: ["HTML", "CSS", "Bootstrap", "Day.js Library", "Jquery"],
    role: ["Sole Developer"],
    deploy: "https://terence-a.github.io/workDayScheduler/",
    github: "https://github.com/Terence-A/workDayScheduler",
  },
];

export default portfolioData;
