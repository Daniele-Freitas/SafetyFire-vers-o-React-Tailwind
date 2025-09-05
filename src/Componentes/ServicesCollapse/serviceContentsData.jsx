import { FaCheck } from 'react-icons/fa';
import MainButton from "../MainButton/MainButton"; 


const SafetyFireContato = '552130125051'; 

const createWhatsAppLink = (message) => {
    return `https://api.whatsapp.com/send?phone=${SafetyFireContato}&text=${encodeURIComponent(message)}`;
};


const serviceContentsData = [
    {
        id: 'legalizacao',
        title: 'Legalização junto ao Corpo de Bombeiros', // Título para o card de conteúdo
        content: (
            <div>
                <h5 className="card-title text-xl font-semibold mb-2">Legalização junto ao Corpo de Bombeiros</h5>
                <p>Sua empresa ou condomínio precisa de aprovação junto ao Corpo de Bombeiros Militar do Estado do Rio de Janeiro (CBMERJ) para estar de acordo com as normas estipuladas pelo novo Código de Segurança contra Incêndio e Pânico (COSCIP n°42/18).</p>
                <hr className="my-4 border-gray-300" />
                <h6 className="text-lg font-semibold mb-2">Nossos serviços de PSCIP incluem:</h6>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ul>
                        <li className="flex items-start mb-2"><FaCheck className="min-w-5 mr-2 mt-1 text-secondary-color" /> Tramitação de processo para obtenção de Laudo de Exigências;</li>
                        <li className="flex items-start mb-2"><FaCheck className="min-w-5 mr-2 mt-1 text-secondary-color" /> Modificação de itens ou de projeto aprovado;</li>
                        <li className="flex items-start mb-2"><FaCheck className="min-w-5 mr-2 mt-1 text-secondary-color" /> Assessoramento para obtenção do Certificado de Aprovação Assistido (CAA);</li>
                    </ul>
                    <ul>
                        <li className="flex items-start mb-2"><FaCheck className="min-w-5 mr-2 mt-1 text-secondary-color" /> Assessoria para obtenção de Certificado de Vistoria Anual (Casas de Show, Festas e Eventos) – CVA;</li>
                        <li className="flex items-start mb-2"><FaCheck className="min-w-5 mr-2 mt-1 text-secondary-color" /> Vistoria técnica;</li>
                        <li className="flex items-start mb-2"><FaCheck className="min-w-5 mr-2 mt-1 text-secondary-color" /> PAE (Plano de Atendimento a Emergência);</li>
                    </ul>
                </div>
                <div className="text-center mt-auto">
                    <MainButton className='whitespace-nowrap w-[80%] lg:max-w-[50%] align-bottom' to="#" onClick={() => window.open(createWhatsAppLink('Olá, gostaria de um orçamento para Legalização junto ao Corpo de Bombeiros'), '_blank')}>Faça seu orçamento</MainButton>
                </div>
            </div>
        ),
    },
    {
        id: 'projetos',
        title: 'Projetos de segurança contra incêndio e pânico',
        content: (
            <div>
                <h5 className="card-title text-xl font-semibold mb-2">Elaboração e implementação de Projetos de Segurança Contra Incêndio e Pânico</h5>
                <p>Elaboramos projetos de proteção e combate a incêndio e pânico, de acordo com as necessidades e riscos do local, dimensionando os equipamentos necessários e atendendo às normas técnicas dos órgãos responsáveis e certificadores, tais como ABNT, NFPA, FM, COSCIP, Corpo de Bombeiros Militar e outras normas vigentes.</p>
                <hr className="my-4 border-gray-300" />
                <h6 className="text-lg font-semibold mb-2">Nossos serviços incluem:</h6>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <p className="font-bold mb-2"><strong>Projetos de segurança contra incêndio</strong></p>
                        <ul>
                            <li className="flex items-start mb-2"><FaCheck className="min-w-5 mr-2 mt-1 text-secondary-color" /> Levantamento arquitetônico (Legal);</li>
                            <li className="flex items-start mb-2"><FaCheck className="min-w-5 mr-2 mt-1 text-secondary-color" /> Estudo de viabilidade técnica;</li>
                            <li className="flex items-start mb-2"><FaCheck className="min-w-5 mr-2 mt-1 text-secondary-color" /> Elaboração de projetos de segurança contra incêndio (PSCIP);</li>
                        </ul>
                    </div>
                    <div>
                        <p className="font-bold mb-2"><strong>Projetos complementares</strong></p>
                        <ul>
                            <li className="flex items-start mb-2"><FaCheck className="min-w-5 mr-2 mt-1 text-secondary-color" /> Elaboração de plano de emergência contra incêndio (PECIP);</li>
                            <li className="flex items-start mb-2"><FaCheck className="min-w-5 mr-2 mt-1 text-secondary-color" /> Elaboração de um mapa de risco;</li>
                            <li className="flex items-start mb-2"><FaCheck className="min-w-5 mr-2 mt-1 text-secondary-color" /> Projetos de Exaustão Mecânica (Legal);</li>
                            <li className="flex items-start mb-2"><FaCheck className="min-w-5 mr-2 mt-1 text-secondary-color" /> Sistema de Prevenção e Combate a Incêndio por Agente Limpo (FM-200, HFC-227, etc.);</li>
                            <li className="flex items-start mb-2"><FaCheck className="min-w-5 mr-2 mt-1 text-secondary-color" /> Sistema de Pressurização de Escada;</li>
                        </ul>
                    </div>
                </div>
                <div className="text-center mt-auto">
                    <MainButton className='whitespace-nowrap w-[80%] lg:max-w-[50%] align-bottom-bottom' to="#" onClick={() => window.open(createWhatsAppLink('Olá, gostaria de um orçamento para Elaboração e implementação de Projetos de Segurança Contra Incêndio e Pânico'), '_blank')}>Faça seu orçamento</MainButton>
                </div>
            </div>
        ),
    },
    {
        id: 'instalacao',
        title: 'Instalação e Manutenção de Sistemas de Combate a Incêndio',
        content: (
            <div>
                <h5 className="card-title text-xl font-semibold mb-2">Instalação e Manutenção de Sistemas de Combate a Incêndio</h5>
                <p>Realizamos serviços de instalação e manutenção de todos os sistemas voltados à prevenção e combate a incêndio.</p>
                <hr className="my-4 border-gray-300" />
                <h6 className="text-lg font-semibold mb-2">Manutenção Preventiva</h6>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ul>
                        <li className="flex items-start mb-2"><FaCheck className="min-w-5 mr-2 mt-1 text-secondary-color" /> Acompanhamento da validade da recarga dos extintores de incêndio;</li>
                        <li className="flex items-start mb-2"><FaCheck className="min-w-5 mr-2 mt-1 text-secondary-color" /> Recarga e reteste dos cilindros;</li>
                        <li className="flex items-start mb-2"><FaCheck className="min-w-5 mr-2 mt-1 text-secondary-color" /> Reteste das Mangueiras de Incêndio;</li>
                        <li className="flex items-start mb-2"><FaCheck className="min-w-5 mr-2 mt-1 text-secondary-color" /> Vazamento na tubulação de incêndio;</li>
                    </ul>
                    <ul>
                        <li className="flex items-start mb-2"><FaCheck className="min-w-5 mr-2 mt-1 text-secondary-color" /> Revisão do sistema de pressurização – Bombas de Incêndio;</li>
                        <li className="flex items-start mb-2"><FaCheck className="min-w-5 mr-2 mt-1 text-secondary-color" /> Funcionamento do Sistema de Para-raios;</li>
                        <li className="flex items-start mb-2"><FaCheck className="min-w-5 mr-2 mt-1 text-secondary-color" /> Assessoramento técnico quanto à legislação vigente;</li>
                    </ul>
                </div>
                <hr className="my-4 border-gray-300" />
                <h6 className="text-lg font-semibold mb-2">Sistemas Hidráulicos</h6>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ul>
                        <li className="flex items-start mb-2"><FaCheck className="min-w-5 mr-2 mt-1 text-secondary-color" /> Sistema de Pressurização Automático – Casa de Máquinas de Incêndio;</li>
                        <li className="flex items-start mb-2"><FaCheck className="min-w-5 mr-2 mt-1 text-secondary-color" /> Rede Preventiva de combate a incêndios;</li>
                        <li className="flex items-start mb-2"><FaCheck className="min-w-5 mr-2 mt-1 text-secondary-color" /> Hidrantes de Incêndio;</li>
                    </ul>
                    <ul>
                        <li className="flex items-start mb-2"><FaCheck className="min-w-5 mr-2 mt-1 text-secondary-color" /> Pressurização das redes de hidrantes e de chuveiros automáticos – Sprinklers;</li>
                        <li className="flex items-start mb-2"><FaCheck className="min-w-5 mr-2 mt-1 text-secondary-color" /> Sistema Proporcionador de Espuma;</li>
                        <li className="flex items-start mb-2"><FaCheck className="min-w-5 mr-2 mt-1 text-secondary-color" /> Teste Hidrostático.</li>
                    </ul>
                </div>
                <hr className="my-4 border-gray-300" />
                <h6 className="text-lg font-semibold mb-2">Serviços Elétricos & Diversos</h6>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ul>
                        <li className="flex items-start mb-2"><FaCheck className="min-w-5 mr-2 mt-1 text-secondary-color" /> Instalação de Quadro de Comando Elétrico para Sistemas Automáticos;</li>
                        <li className="flex items-start mb-2"><FaCheck className="min-w-5 mr-2 mt-1 text-secondary-color" /> Sistema de Proteção contra Descargas Atmosféricas – Para-raios;</li>
                        <li className="flex items-start mb-2"><FaCheck className="min-w-5 mr-2 mt-1 text-secondary-color" /> Sistema de Detecção e Alarme de Incêndio;</li>
                        <li className="flex items-start mb-2"><FaCheck className="min-w-5 mr-2 mt-1 text-secondary-color" /> Sistema de Prevenção e Combate a Incêndio por Agente Limpo (FM-200, HFC-227, etc.);</li>
                    </ul>
                    <ul>
                        <li className="flex items-start mb-2"><FaCheck className="min-w-5 mr-2 mt-1 text-secondary-color" /> Instalação de Sinalização de Emergência;</li>
                        <li className="flex items-start mb-2"><FaCheck className="min-w-5 mr-2 mt-1 text-secondary-color" /> Instalação e manutenção de portas corta-fogo e seus componentes;</li>
                        <li className="flex items-start mb-2"><FaCheck className="min-w-5 mr-2 mt-1 text-secondary-color" /> Sistema de Pressurização de Escada;</li>
                        <li className="flex items-start mb-2"><FaCheck className="min-w-5 mr-2 mt-1 text-secondary-color" /> Teste de Estanqueidade do Gás.</li>
                    </ul>
                </div>
                <div className="text-center mt-auto">
                    <MainButton className='whitespace-nowrap w-[80%] lg:max-w-[50%] align-bottom-bottom'  to="#" onClick={() => window.open(createWhatsAppLink('Olá, gostaria de um orçamento para Instalação e Manutenção de Sistemas de Combate a Incêndio'), '_blank')}>Faça seu orçamento</MainButton>
                </div>
            </div>
        ),
    },
    {
        id: 'contrato',
        title: 'Contrato de Manutenção Preventiva',
        content: (
            <div>
                <h5 className="card-title text-xl font-semibold mb-2">Contrato de Manutenção Preventiva</h5>
                <p>Oferecemos um serviço completo de manutenção preventiva, com soluções personalizadas para garantir a operação eficiente dos sistemas de segurança e combate a incêndio.</p>
                <hr className="my-4 border-gray-300" />
                <h6 className="text-lg font-semibold mb-2">Serviços incluídos:</h6>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ul>
                        <li className="flex items-start mb-2"><FaCheck className="min-w-5 mr-2 mt-1 text-secondary-color" /> Avaliação de Riscos</li>
                        <li className="flex items-start mb-2"><FaCheck className="min-w-5 mr-2 mt-1 text-secondary-color" /> Acompanhamento da validade da recarga dos extintores</li>
                        <li className="flex items-start mb-2"><FaCheck className="min-w-5 mr-2 mt-1 text-secondary-color" /> Recarga e reteste dos cilindros</li>
                        <li className="flex items-start mb-2"><FaCheck className="min-w-5 mr-2 mt-1 text-secondary-color" /> Reteste das Mangueiras de Incêndio</li>
                    </ul>
                    <ul>
                        <li className="flex items-start mb-2"><FaCheck className="min-w-5 mr-2 mt-1 text-secondary-color" /> Identificação e reparo de vazamentos na tubulação</li>
                        <li className="flex items-start mb-2"><FaCheck className="min-w-5 mr-2 mt-1 text-secondary-color" /> Revisão do sistema de pressurização – Bombas de Incêndio;</li>
                        <li className="flex items-start mb-2"><FaCheck className="min-w-5 mr-2 mt-1 text-secondary-color" /> Verificação do funcionamento do Sistema de Para-raios</li>
                        <li className="flex items-start mb-2"><FaCheck className="min-w-5 mr-2 mt-1 text-secondary-color" /> Assessoramento técnico quanto à legislação vigente</li>
                    </ul>
                </div>
                <div className="text-center mt-auto">
                    <MainButton className='whitespace-nowrap w-[80%] lg:max-w-[50%] align-bottom-bottom' to="#" onClick={() => window.open(createWhatsAppLink('Olá, gostaria de um orçamento para Contrato de Manutenção Preventiva'), '_blank')}>Faça seu orçamento</MainButton>
                </div>
            </div>
        ),
    },
    {
        id: 'brigada',
        title: 'Brigada de incêndio e guardião de piscina',
        content: (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <h5 className="card-title text-xl font-semibold mb-2">Brigada de Incêndio</h5>
                    <hr className="my-4 border-gray-300" />
                    <p>Contratos de brigada de incêndio com profissionais qualificados para atuar na prevenção, combate a incêndios e atendimento a emergências em edificações públicas e privadas.</p>
                    <p>Os profissionais são treinados para primeiros socorros, combate a princípios de incêndio e evacuação segura de pessoas. Além disso, realizam o acompanhamento do estado de conservação dos sistemas de segurança contra incêndios.</p>
                    <div className="text-center mt-auto">
                        <MainButton className='whitespace-nowrap w-[80%] lg:max-w-[50%] align-bottom-bottom' to="#" onClick={() => window.open(createWhatsAppLink('Olá, gostaria de um orçamento para Brigada de Incêndio'), '_blank')}>Faça seu orçamento</MainButton>
                    </div>
                </div>
                <div>
                    <h5 className="card-title text-xl font-semibold mb-2">Guardião de Piscina</h5>
                    <hr className="my-4 border-gray-300" />
                    <p>Nossos colaboradores são treinados conforme a estrutura do local para orientar e socorrer banhistas. Os profissionais são habilitados pelo Grupamento Marítimo do Corpo de Bombeiros.</p>
                    <p>O guardião de piscina é obrigatório para piscinas coletivas conforme o Decreto Lei 4447/81, garantindo a segurança dos usuários e prevenindo acidentes aquáticos.</p>
                    <div className="text-center mt-auto">
                        <MainButton className='whitespace-nowrap w-[80%] lg:max-w-[50%] align-bottom-bottom' to="#" onClick={() => window.open(createWhatsAppLink('Olá, gostaria de um orçamento para Guardião da piscina'), '_blank')}>Faça seu orçamento</MainButton>
                    </div>
                </div>
            </div>
        ),
    },
    {
        id: 'extintor',
        title: 'Recarga de extintor e reteste de mangueiras',
        content: (
            <div className="grid text-justify grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <h5 className="card-title text-xl font-semibold mb-2">Recarga de Extintores</h5>
                    <hr className="my-4 border-gray-300" />
                    <p>Nossas recargas são homologadas pelo INMETRO, garantindo qualidade e segurança. Oferecemos serviços de recarga, reteste e pintura de extintores portáteis, cilindros do sistema fixo de CO² e sistemas de combate por agente limpo, como o FM-200.</p>
                    <div className="text-center mt-auto">
                        <MainButton className='whitespace-nowrap w-[80%] lg:max-w-[50%] align-bottom-bottom' to="#" onClick={() => window.open(createWhatsAppLink('Olá, gostaria de um orçamento para Recarga de extintores'), '_blank')}>Faça seu orçamento</MainButton>
                    </div>
                </div>
                <div>
                    <h5 className="card-title text-xl font-semibold mb-2">Reteste de Mangueiras</h5>
                    <hr className="my-4 border-gray-300" />
                    <p>Oferecemos reteste de mangueiras para garantir conformidade com normas de segurança e melhor uso em emergências. como também, realizamos testes hidrostáticos para assegurar a integridade das mangueiras de incêndio para atestar sua conformidade e garantir sua melhor utilização em caso de necessidade de combate. Além de oferecermos teste hidrostático de mangueiras de incêndio. Realize suas revisões anuais com a nossa empresa.</p>
                    <div className="text-center mt-auto">
                        <MainButton className='whitespace-nowrap w-[80%] lg:max-w-[50%] align-bottom-bottom' to="#" onClick={() => window.open(createWhatsAppLink('Olá, gostaria de um orçamento para Reteste de mangueiras'), '_blank')}>Faça seu orçamento</MainButton>
                    </div>
                </div>
            </div>
        ),
    },
];

export default serviceContentsData