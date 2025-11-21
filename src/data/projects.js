import todoVintageImg from '../assets/images/todo-vintage.png';
import movieShuffleImg from '../assets/images/movieshuffle.png';
const comingSoonImg = 'https://placehold.co/600x400/001159/FCFBFA?text=Coming+Soon';


export const projectData = [
  {
    id: 1,
    title: 'Vintage To-Do List',
    description: 'A full-stack task manager with a unique, playful 90s-inspired retro aesthetic.',
    fullDescription: 'The Vintage To-Do List is a full-stack task manager I built to combine powerful, modern functionality with a unique and playful 90s-inspired retro aesthetic. This is a fully-featured application designed to be a standout portfolio project, demonstrating skills in both front-end and back-end development.',
    imageUrl: todoVintageImg,
    liveDemoUrl: 'https://todo-vintage.vercel.app/',
    githubUrl: 'https://github.com/KhairunnisaIsma/todo-vintage',
    technologies: [
      'React.js',
      'Vite',
      'CSS',
      'Vercel Serverless',
      'Supabase',
    ],
    features: [
      'Full CRUD functionality for managing daily tasks.',
      'Advanced filtering system by status (Overdue, Due Today, etc.).',
      'Fully responsive design with a horizontal scrolling filter on mobile.',
      'Persistent data storage in the cloud.',
    ],
  },
  {
    id: 2,
    title: 'MovieShuffle',
    description: 'An intelligent random movie picker designed to cure decision fatigue.',
    fullDescription: 'MovieShuffle is an interactive movie discovery platform engineered to solve the common problem of "analysis paralysis." By leveraging the extensive TMDB database, it allows users to discover hidden gems or popular hits based on specific criteria like mood (genre), time availability (duration), and release era. The app features seamless trailer integration, real-time synopsis translation, and robust history management.',
    imageUrl: movieShuffleImg, 
    liveDemoUrl: 'https://shufflemovie.netlify.app',
    githubUrl: 'https://github.com/KhairunnisaIsma/movie-shuffle',
    technologies: ['React', 'Tailwind CSS', 'Vite', 'Framer Motion', 'TMDB API'],
    features: [
      'Smart Randomizer Algorithm with Genre, Duration, and Release Era filters.',
      'Intelligent YouTube Trailer integration with fallback search logic.',
      'Real-time Synopsis Auto-Translation (English <-> Indonesian).',
      'Advanced History Management with batch selection and deletion.',
      'Cinematic, Fully Responsive UI with smooth Framer Motion animations.'
    ],
  },
  {
    id: 3,
    title: 'Coming Soon',
    description: 'This project is coming soon.',
    imageUrl: comingSoonImg,
    liveDemoUrl: '#',
    detailsUrl: '#',
    fullDescription: 'This project is currently under development. Stay tuned for updates.',
    technologies: [],
    features: []
  },
];