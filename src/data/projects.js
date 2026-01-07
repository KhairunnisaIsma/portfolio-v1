import todoVintageImg from '../assets/images/todo-vintage.png';
import movieShuffleImg from '../assets/images/movieshuffle.PNG';
import qrGeneratorImg from '../assets/images/qrgenerator.png';
import flowInvoiceImg from '../assets/images/flowinvoice.png';

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
    title: 'Wireframe QR Generator',
    description: 'A robust PHP-based QR code generator featuring a distinct Neo-Brutalism "Line Art" aesthetic.',
    fullDescription: 'The Wireframe QR Generator is a high-performance, API-driven application built with native PHP to generate customizable QR codes. Departing from standard designs, I implemented a unique "Line Art" / Neo-Brutalism user interface using Tailwind CSS. The backend leverages the Endroid library to handle complex image processing, allowing users to generate high-resolution codes in vector (SVG) and raster (PNG, JPG) formats with logo integration and transparency support.',
    imageUrl: qrGeneratorImg, 
    liveDemoUrl: 'https://qr-generator--nisaisma2799.replit.app/', 
    githubUrl: 'https://github.com/KhairunnisaIsma/qr-generator',
    technologies: [
      'PHP 8.2 (Native)',
      'Tailwind CSS',
      'JavaScript (Vanilla)',
      'Composer',
      'Endroid QR Library',
    ],
    features: [
      'Multi-format export support (SVG for print, PNG/JPG for web).',
      'Advanced customization: Custom colors, transparency, and logo embedding.',
      'Unique "Line Art" / Wireframe UI design with Tailwind CSS.',
      'Smart download logic that auto-detects file formats.',
      'Server-side image processing using GD and XML extensions.',
    ],
  },
  {
    id: 4,
    title: 'FlowInvoice',
    description: 'A streamlined professional invoice generator for freelancers with real-time PDF rendering.',
    fullDescription: 'FlowInvoice is a robust billing utility designed to simplify the invoicing process for freelancers and small business owners. It features a modern Flat Design with high-contrast visual hierarchy. The application enables users to create professional documents with dynamic segmented identifiers, multi-language support (English/Indonesian), and precise time-management including GMT offsets. Built with a focus on performance, the app generates high-quality PDF files directly in the browser.',
    imageUrl: flowInvoiceImg, 
    liveDemoUrl: 'https://flowinvoice.netlify.app',
    githubUrl: 'https://github.com/KhairunnisaIsma/FlowInvoice', 
    technologies: ['React', 'Tailwind CSS', 'Vite', '@react-pdf/renderer', 'Lucide React'],
    features: [
      'Advanced Segmented Invoice ID system (INV-Code-Year-Sequence) for professional record-keeping.',
      'Bilingual PDF Generation (English & Indonesian) for international and local clients.',
      'Real-time Interactive Preview with automatic calculations for Tax, Discounts, and Grand Totals.',
      'Precision Time & Timezone integration with standardized GMT offsets for global compliance.',
      'Persistent State Management with LocalStorage to safeguard drafts against browser refreshes.'
    ],
  },
  {
    id: 5,
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