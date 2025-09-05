import {
    FaFireBurner,
    FaCompassDrafting,
    FaScrewdriverWrench,
    FaFileSignature,
    FaFilePen,
    FaFireExtinguisher
} from 'react-icons/fa6'; // Verifique se seus ícones são todos da v5 ou se precisa de 'react-icons/fa6'

const serviceButtonsData = [
    {
        id: 'legalizacao',
        icon: FaFireBurner,
        title: 'Legalização junto ao Corpo de Bombeiros',
    },
    {
        id: 'projetos',
        icon: FaCompassDrafting,
        title: 'Projetos de segurança contra incêndio e pânico',
    },
    {
        id: 'instalacao',
        icon: FaScrewdriverWrench,
        title: 'Instalação e manutenção de sistemas de combate a incêndio',
    },
    {
        id: 'contrato',
        icon: FaFileSignature,
        title: 'Contrato de manutenção preventiva',
    },
    {
        id: 'brigada',
        icon: FaFilePen,
        title: 'Brigada de incêndio e guardião de piscina',
    },
    {
        id: 'extintor',
        icon: FaFireExtinguisher,
        title: 'Recarga de extintor e reteste de mangueiras',
    },
];

export default serviceButtonsData;