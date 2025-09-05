import { FaMedal,FaClipboardCheck,FaHandshake } from "react-icons/fa";
import { FaPersonDigging } from "react-icons/fa6";

const progressItemsData = [
  {
    id: 'years-on-market', // ID único para a key do React
    icon: FaMedal, // Componente React do ícone
    targetValue: 5, // O valor final da contagem
    description: "Anos no mercado"
  },
  {
    id: 'projects-delivered',
    icon: FaClipboardCheck,
    targetValue: 513,
    description: "Projetos entregues"
  },
  {
    id: 'works-completed',
    icon: FaPersonDigging,
    targetValue: 230,
    description: "Obras realizadas"
  },
  {
    id: 'satisfied-clients',
    icon: FaHandshake,
    targetValue: 823,
    description: "Clientes satisfeitos"
  }
];

export default progressItemsData