import { useState, useEffect, useRef } from 'react'; // Adicionado useEffect e useRef de volta
import CollapseButtonPanel from './ButtonPanel'; // Ajuste o caminho

const collapseItemsData = [
  { 
    id: 'missao', 
    title: 'Missão', 
    content: (
      <>
        <h4 className="text-2xl text-center text-secondary-color font-semibold mb-2">Missão</h4> 
        <p className='text-center'>Garantir segurança, eficiência e conformidade na prevenção e combate a incêndios, oferecendo soluções personalizadas para cada cliente.</p>
      </>
    ) 
  },
  { 
    id: 'visao', 
    title: 'Visão', 
    content: (
      <>
        <h4 className="text-2xl text-center text-secondary-color font-semibold mb-2">Visão</h4> 
        <p className='text-center'>Ser referência nacional em engenharia e arquitetura contra incêndio e pânico, promovendo segurança, inovação e responsabilidade no setor.</p>
      </>
    ) 
  },
  { 
    id: 'valores', 
    title: 'Valores', 
    content: (
      <>
        <h4 className="text-2xl ml-4 text-secondary-color font-semibold mb-2">Valores</h4> 
        <ul className="list-disc pl-8 text-gray-700">
          <li>Segurança em primeiro lugar</li>
          <li>Compromisso com a excelência</li>
          <li>Inovação contínua</li>
          <li>Transparência e confiança</li>
          <li>Sustentabilidade</li>
          <li>Ética e inclusão</li>
        </ul>         
      </>
    ) 
  },
  { 
    id: 'servicos', 
    title: 'Serviços', 
    content: (
      <>
        <h4 className="text-2xl ml-4 text-secondary-color font-semibold mb-2">Serviços</h4> 
        <ul className="list-disc pl-8 text-gray-700">
          <li>Legalização junto ao Corpo de Bombeiros</li>
          <li>Projetos de segurança contra incêndio e pânico</li>
          <li>Instalação e manutenção de sistemas</li>
          <li>Contratos de manutenção preventiva</li>
          <li>Treinamento de brigada de incêndio</li>
          <li>Recarga de extintores e testes de mangueiras</li>
        </ul>         
      </>
    ) 
  },
];

// --- Componente: Gerencia o conteúdo colapsável individual com FADE IN ---
function CollapseContentItem({ id, content, isOpen }) {
    const [shouldRender, setShouldRender] = useState(isOpen); // Controla se o componente está no DOM
    const contentRef = useRef(null); // Ref para o próprio div do conteúdo

    useEffect(() => {
        if (isOpen) {
            setShouldRender(true); // Se deve abrir, renderize no DOM
        } else {
            // Se deve fechar, adicione a classe 'hidden' após a transição
            const timer = setTimeout(() => {
                setShouldRender(false); // Remove do DOM após a transição
            }, 500); // Deve ser igual à duração da transição no CSS
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    // Não renderiza no DOM se não deve estar lá
    if (!shouldRender && !isOpen) return null;

    return (
        <div 
            id={`collapse-content-${id}`} 
            ref={contentRef}
            className={`
                card border border-gray-300 rounded-xl shadow-lg 
                w-full pb-6 px-6 bg-white mx-auto
                fade-in 
                ${isOpen ? 'visible' : ''} 
                ${!isOpen && shouldRender ? 'fade-out-active' : ''} /* Adicione uma classe para animar o fade-out se for preciso */
            `}
        >
            {content}
        </div>
    );
}

// --- Componente Principal ---
export default function VisionCollapse (){
    const [activeItemIds, setActiveItemIds] = useState([]); 

    const toggleItem = (id) => {
        setActiveItemIds(prevIds => {
            if (prevIds.includes(id)) {
                // Se o ID já está no array, remove (fecha)
                return prevIds.filter(itemId => itemId !== id);
            } else {
                // Se o ID não está no array, adiciona (abre)
                return [...prevIds, id];
            }
        });
    };
    
    return (
        <div className="about-collapse container mx-auto p-4 max-w-5xl md:max-w-7xl">
            <h3 className="main-title text-2xl font-bold mb-8 text-center">Sobre a Safety Fire</h3> 

            {/* Container dos Botões com Conector */}
            <div className="button-container grid grid-cols-2 md:grid-cols-4 md:max-w-[90%] lg:max-w-[80%] xl:max-w-[60%] mx-auto relative justify-center flex-wrap gap-6 mb-8 py-2 px-12">
                
                <span className="hidden md:block absolute top-1/2 left-0 right-0 h-[1.5px] bg-secondary-color -z-10"></span>
                <span className="hidden md:block absolute top-1/2 left-0 -translate-y-1/2 w-[10px] h-[10px] rounded-full bg-secondary-color -z-10"></span>
                <span className="hidden md:block absolute top-1/2 right-0 -translate-y-1/2 w-[10px] h-[10px] rounded-full bg-secondary-color -z-10"></span>
                
                {collapseItemsData.map(item => (
                    <CollapseButtonPanel
                        key={item.id}
                        title={item.title}
                        onClick={() => toggleItem(item.id)}
                        isActive={activeItemIds.includes(item.id)}
                        buttonClassName="py-3 px-5 rounded-lg border border-gray-300 min-w-[120px] text-base" 
                    />
                ))}
            </div>

            {/* Seção do Conteúdo - GRID FIXO DE 2 COLUNAS */}
            {/* Sempre grid-cols-1 em mobile, e md:grid-cols-2 a partir de md */}
            <div className={`content-section mx-3 grid grid-cols-1 md:grid-cols-2 gap-6 items-start`}> 
                {collapseItemsData.map(item => (
                    // Renderiza o item de conteúdo baseado na flag `shouldRender` no CollapseContentItem
                    <CollapseContentItem
                        key={item.id}
                        id={item.id}
                        content={item.content}
                        isOpen={activeItemIds.includes(item.id)} 
                    />
                ))}
            </div>
        </div>
    );
}