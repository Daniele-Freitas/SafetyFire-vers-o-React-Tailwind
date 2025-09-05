import Diferenciais from '../Componentes/Diferenciais/Diferenciais';
import ProgressSection from '../Componentes/Progress-container/Progress-container';
import TeamSection from '../Componentes/TeamSection/TeamSection';
import VisionCollapse from '../Componentes/VisionCollapse/VisionCollapse';

export default function Empresa() {
  return (
    <div className="flex justify-center items-center m-auto flex-col pt-32 lg:pt-38 xl:pt-36">
      <div className='xl:grid xl:grid-cols-2 mb-10'>
        <section className='px-6 xl:px-12'>
          <h2 className='main-title after:left-7 lg:'>Quem somos</h2>
          <p className='text-justify mt-4 xl:mt-8'>A Safety Fire é especializada em engenharia e arquitetura contra incêndios, oferecendo soluções inovadoras e seguras para proteger vidas e patrimônios. Com uma equipe altamente qualificada, desenvolvemos projetos preventivos e corretivos que garantem conformidade com as normas técnicas e legislações vigentes. Na Safety Fire, acreditamos que segurança não é uma opção, é uma prioridade. Nosso compromisso é oferecer soluções eficientes, econômicas e personalizadas para cada tipo de edificação, garantindo proteção e tranquilidade aos nossos clientes. Proteja seu empreendimento com quem entende do assunto.</p>
        </section>
        <div className='hidden xl:flex relative pt-10'>
          <img src="/assets/sobre-img.jpg"  className="absolute z-20 h-auto top-1/3 left-1/20 max-h-[80%] max-w-[65%] block rounded-2xl"/>
          <img src='/assets/engenharia-empresa.jpeg' alt='Engenheiros planejando' className='absolute z-10 h-auto top-1/12 left-1/3  max-h-[70%] max-w-[60%] rounded-2xl block' />
        </div>
      </div>
      <ProgressSection />
      <VisionCollapse />
      <TeamSection />
      <Diferenciais />
    </div>
  );
}

