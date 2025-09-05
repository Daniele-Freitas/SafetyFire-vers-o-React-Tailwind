import { FaClock, FaCalendarCheck } from 'react-icons/fa';
import { FaPeopleLine, FaRankingStar, FaPenToSquare, FaHandHoldingDollar } from 'react-icons/fa6';
import useScrollAnimation from '../Hooks/useScrollAnimation';

const iconMap = {
  "fa-solid fa-people-line": FaPeopleLine,
  "fa-solid fa-ranking-star": FaRankingStar,
  "fa-solid fa-hand-holding-dollar": FaHandHoldingDollar,
  "fa-solid fa-clock": FaClock,
  "fa-solid fa-pen-to-square": FaPenToSquare,
  "fa-solid fa-calendar-check": FaCalendarCheck,
};

const diferenciais = [
  { icon: FaPeopleLine, text: "Equipe técnica altamente especializada", animation: 'fade-in' }, // Adicione a animação desejada aqui
  { icon: FaRankingStar, text: "Alta qualidade e garantia nos projetos entregues", animation: 'fade-in' },
  { icon: FaHandHoldingDollar, text: "Atendimento personalizado a preço justo", animation: 'fade-in' },
  { icon: FaClock, text: "Respostas em até de 24H", animation: 'fade-in' },
  { icon: FaPenToSquare, text: "Projetos exclusivos", animation: 'fade-in' },
  { icon: FaCalendarCheck, text: "Pontualidade de prazos", animation: 'fade-in' }
];

export default function Diferenciais (){
    return(
        <>
            <h4 className='xl:text-2xl main-title'>Nossos diferenciais</h4>
            <section className='w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 p-4 xl:max-w-[95%]'>
                {diferenciais.map((diferencial, index) => { 
                const IconComponent = iconMap[diferencial.icon.name] || diferencial.icon; 
                const animationClass = diferencial.animation || 'fade-in'; 
                const { ref: differentialItemRef, isIntersecting } = useScrollAnimation({ threshold: 0.2 }, animationClass);

                return (
                    <div 
                    key={index} 
                    ref={differentialItemRef} 
                    className={`
                        bg-secondary-color 
                        m-auto w-[85%] md:w-[90%] xl:w-90
                        p-6 flex flex-row items-center gap-4 rounded-lg shadow-md 
                        ${animationClass} 
                        ${isIntersecting ? 'visible' : ''}  
                    `}
                    >
                    <div className="bg-white p-4 rounded-[0.5rem]">
                        {IconComponent && <IconComponent className='text-secondary-color text-4xl' />}
                    </div> 
                    <p className='text-white text-lg font-semibold xl:text-[1rem]'>{diferencial.text}</p>
                    </div>
                );
                })}
            </section>
        </>
    )
}