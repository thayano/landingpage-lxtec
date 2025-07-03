import type { StaticImageData } from 'next/image';

import image_processos from '@/public/processos.png';

export type servicosProps = {
  id: number;
  title: string;
  descricao: string;
  title2: string;
  description2: string;
  image: StaticImageData;
  image2: StaticImageData;
  subtitle: string;
};

export const servicos: servicosProps[] = [
  {
    id: 1,
    title: 'Administração de Servidores',
    subtitle: 'Consultoria de T.I.',
    descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, voluptate quasi amet quis doloremque delectus atque animi nisi provident tempora quos a consequatur error laudantium nostrum hic? Magni, tempora consectetur',
    title2: 'Descrição maneira do sistema',
    description2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, voluptate quasi amet quis doloremque delectus atque animi nisi provident tempora quos a consequatur error laudantium nostrum hic? Magni, tempora consectetur.',
    image: image_processos,
    image2: image_processos,
  },
  {
    id: 2,
    title: 'Administração de Redes',
    subtitle: 'Suporte especializado',

    descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, voluptate quasi amet quis doloremque delectus atque animi nisi provident tempora quos a consequatur error laudantium nostrum hic? Magni, tempora consectetur',
    title2: 'Descrição maneira do sistema',
    description2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, voluptate quasi amet quis doloremque delectus atque animi nisi provident tempora quos a consequatur error laudantium nostrum hic? Magni, tempora consectetur.',
    image: image_processos,
    image2: image_processos,
  },
  {
    id: 3,
    title: 'Locação de Servidores e Impressoras',
    subtitle: 'Outsourcing de Hardware',

    descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, voluptate quasi amet quis doloremque delectus atque animi nisi provident tempora quos a consequatur error laudantium nostrum hic? Magni, tempora consectetur',
    title2: 'Descrição maneira do sistema',
    description2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, voluptate quasi amet quis doloremque delectus atque animi nisi provident tempora quos a consequatur error laudantium nostrum hic? Magni, tempora consectetur.',
    image: image_processos,
    image2: image_processos,
  },
  {
    id: 4,
    title: 'Gestão de Processos Eletrônicos',
    subtitle: 'Lorem ipsum dolor sit amet consectetu',

    descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, voluptate quasi amet quis doloremque delectus atque animi nisi provident tempora quos a consequatur error laudantium nostrum hic? Magni, tempora consectetur',
    title2: 'Descrição maneira do sistema',
    description2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, voluptate quasi amet quis doloremque delectus atque animi nisi provident tempora quos a consequatur error laudantium nostrum hic? Magni, tempora consectetur.',
    image: image_processos,
    image2: image_processos,
  },
  {
    id: 5,
    title: 'Gestão de Processos Eletrônicos',
    subtitle: 'Lorem ipsum dolor sit amet consectetu',

    descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, voluptate quasi amet quis doloremque delectus atque animi nisi provident tempora quos a consequatur error laudantium nostrum hic? Magni, tempora consectetur',
    title2: 'Descrição maneira do sistema',
    description2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, voluptate quasi amet quis doloremque delectus atque animi nisi provident tempora quos a consequatur error laudantium nostrum hic? Magni, tempora consectetur.',
    image: image_processos,
    image2: image_processos,
  },
];
