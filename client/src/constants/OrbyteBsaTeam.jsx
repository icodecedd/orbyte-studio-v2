import { FaFacebook, FaGithub } from 'react-icons/fa';
import { IoMail } from 'react-icons/io5';
import lumibao from '@/assets/pii-lumibao.webp';
import lina from '@/assets/pii-lina.webp';
import evangelista from '@/assets/pii-evangelista.webp';
import mendoza from '@/assets/pii-mendoza.webp';

export const ORBYTE_BSA_TEAM = [
  {
    image: lumibao,
    title: 'Monina Junielle Lumibao',
    subtitle: 'Finance Manager',
    social: [
      {
        icon: <FaGithub />,
        link: 'https://github.com/Rjjackflorida',
        label: 'Github',
      },
      {
        icon: <IoMail />,
        link: 'mailto:rjjackflorida7@gmail.com',
        label: 'Email',
      },
      {
        icon: <FaFacebook />,
        link: 'https://www.facebook.com/sh.izu.355138',
        label: 'Facebook',
      },
    ],
    borderColor: '#EF4444',
    gradient: 'linear-gradient(195deg, #EF4444, #000)',
  },
  {
    image: lina,
    title: 'Neil Aedrian Lina',
    subtitle: 'Production Coordinator',
    social: [
      {
        icon: <FaGithub />,
        link: 'https://github.com/icodecedd',
        label: 'Github',
      },
      {
        icon: <IoMail />,
        link: 'mailto:marianocedrick3@gmail.com',
        label: 'Email',
      },
      {
        icon: <FaFacebook />,
        link: 'https://www.facebook.com/cedrickjosephmariano',
        label: 'Facebook',
      },
    ],
    borderColor: '#EF4444',
    gradient: 'linear-gradient(195deg, #EF4444, #000)',
  },
  {
    image: evangelista,
    title: 'Patricia Evangelista',
    subtitle: 'Logistics Coordinator',
    social: [
      {
        icon: <FaGithub />,
        link: 'https://github.com/paulomscln',
        label: 'Github',
      },
      {
        icon: <IoMail />,
        link: 'mailto:paulomasculino1022@gmail.com',
        label: 'Email',
      },
      {
        icon: <FaFacebook />,
        link: 'https://www.facebook.com/paulomscln',
        label: 'Facebook',
      },
    ],
    borderColor: '#EF4444',
    gradient: 'linear-gradient(195deg, #EF4444, #000)',
  },
  {
    image: mendoza,
    title: 'Margaret Mendoza',
    subtitle: 'Executive Assistant',
    social: [
      {
        icon: <FaGithub />,
        link: 'https://github.com/Harowwld',
        label: 'Github',
      },
      {
        icon: <IoMail />,
        link: 'mailto:harolddelapena.11@gmail.com',
        label: 'Email',
      },
      {
        icon: <FaFacebook />,
        link: 'https://www.facebook.com/harold.delapena.927',
        label: 'Facebook',
      },
    ],
    borderColor: '#EF4444',
    gradient: 'linear-gradient(195deg, #EF4444, #000)',
  },
];
