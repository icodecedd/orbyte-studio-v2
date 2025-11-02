import { FaFacebook, FaGithub } from 'react-icons/fa';
import { IoMail } from 'react-icons/io5';
import delapeña from '@/assets/pii-dela-peña.webp';
import florida from '@/assets/pii-florida.webp';
import mariano from '@/assets/pii-mariano.webp';
import masculino from '@/assets/pii-masculino.webp';

export const ORBYTE_CORE_TEAM = [
  {
    image: florida,
    title: 'Rj Jack Florida',
    subtitle: 'Chief Executive Officer',
    social: [
      {
        icon: <IoMail />,
        link: 'mailto:rjjackflorida7@gmail.com',
        label: 'Email',
      },
      {
        icon: <FaGithub />,
        link: 'https://github.com/Rjjackflorida',
        label: 'Github',
      },

      {
        icon: <FaFacebook />,
        link: 'https://www.facebook.com/sh.izu.355138',
        label: 'Facebook',
      },
    ],
    borderColor: '#3B82F6',
    gradient: 'linear-gradient(145deg, #3B82F6, #000)',
  },
  {
    image: mariano,
    title: 'Cedrick Joseph Mariano',
    subtitle: 'Project Manager',
    social: [
      {
        icon: <IoMail />,
        link: 'mailto:marianocedrick3@gmail.com',
        label: 'Email',
      },
      {
        icon: <FaGithub />,
        link: 'https://github.com/icodecedd',
        label: 'Github',
      },
      {
        icon: <FaFacebook />,
        link: 'https://www.facebook.com/cedrickjosephmariano',
        label: 'Facebook',
      },
    ],
    borderColor: '#3B82F6',
    gradient: 'linear-gradient(145deg, #3B82F6, #000)',
  },
  {
    image: masculino,
    title: 'Paulo Masculino',
    subtitle: 'Creative Director',
    social: [
      {
        icon: <IoMail />,
        link: 'mailto:paulomasculino1022@gmail.com',
        label: 'Email',
      },
      {
        icon: <FaGithub />,
        link: 'https://github.com/paulomscln',
        label: 'Github',
      },
      {
        icon: <FaFacebook />,
        link: 'https://www.facebook.com/paulomscln',
        label: 'Facebook',
      },
    ],
    borderColor: '#3B82F6',
    gradient: 'linear-gradient(145deg, #3B82F6, #000)',
  },
  {
    image: delapeña,
    title: 'Harold Prince dela Peña',
    subtitle: 'IT Specialist',
    social: [
      {
        icon: <IoMail />,
        link: 'mailto:harolddelapena.11@gmail.com',
        label: 'Email',
      },
      {
        icon: <FaGithub />,
        link: 'https://github.com/Harowwld',
        label: 'Github',
      },
      {
        icon: <FaFacebook />,
        link: 'https://www.facebook.com/harold.delapena.927',
        label: 'Facebook',
      },
    ],
    borderColor: '#3B82F6',
    gradient: 'linear-gradient(145deg, #3B82F6, #000)',
  },
];
