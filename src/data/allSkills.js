// Impor hanya ikon yang kita butuhkan sebagai string (atau hapus import ikon jika tidak digunakan di sini)
import { 
  FiCode, FiServer, FiCloud, 
  FiMessageSquare, FiTarget, FiAward, FiRefreshCw, FiUsers, FiEye,
  FiTool, FiEdit, FiSettings
} from 'react-icons/fi';

// Catatan: Karena kita tidak menggunakan JSX di sini, kita tidak perlu mengimpor 'React'
export const allSkillsData = {
  technical: [
    {
      id: 1,
      categoryTitle: 'Frontend Development',
      icon: 'Code',
      skills: [
        'React',
        'Next.js',
        'JavaScript',
        'TypeScript',
        'HTML',
        'CSS',
        'Tailwind CSS',
        'Vite',
        'Framer Motion'
      ],
    },
    {
      id: 2,
      categoryTitle: 'Backend Development',
      icon: 'Server',
      skills: [
        'Node.js',
        'Express.js',
        'Socket.io',
        'RESTful APIs',
        'Java',
        'C#',
      ],
    },
    {
      id: 3,
      categoryTitle: 'Database & Cloud',
      icon: 'Cloud',
      skills: [
        'SQL',
        'PostgreSQL',
        'MySQL',
        'MongoDB',
        'Supabase',
        'Docker',
      ],
    },
  ],

  softSkills: [
    {
      id: 1,
      categoryTitle: 'Communication',
      icon: 'MessageSquare',
      description: 'Able to communicate clearly with team members, users, and stakeholders.',
    },
    {
      id: 2,
      categoryTitle: 'Problem Solving',
      icon: 'Target',
      description: 'Strong analytical thinking to solve technical and user experience problems.',
    },
    {
      id: 3,
      categoryTitle: 'Adaptability',
      icon: 'RefreshCw',
      description: 'Quick to learn new tools and technologies when needed.',
    },
    {
      id: 4,
      categoryTitle: 'Team Collaboration',
      icon: 'Users',
      description: 'Comfortable working in agile teams and collaborating across roles.',
    },
    {
      id: 5,
      categoryTitle: 'Attention to Detail',
      icon: 'Eye',
      description: 'Focused on quality, usability, and consistency in UI and code.',
    },
  ],

  tools: [
    {
      id: 1,
      categoryTitle: 'Development Tools',
      icon: 'Code',
      skills: [
        'VS Code',
        'Git',
        'GitHub',
        'npm',
        'Postman',
        'Vite',
        'Node.js',
      ],
    },
    {
      id: 2,
      categoryTitle: 'Design Tools',
      icon: 'Edit',
      skills: [
        'Figma',
        'Canva'
      ],
    },
    {
      id: 3,
      categoryTitle: 'Deployment',
      icon: 'Settings',
      skills: [
        'Vercel',
        'Netlify',
        'Docker'
      ],
    },
  ],
};
