import MyCarousel from "../Componentes/Caroussel/Caroussel.jsx";
import { Link } from "react-router-dom";
import ServicesPreview from "../Componentes/ServicesPreview/ServicesPreview.jsx";
import MainButton from "../Componentes/MainButton/MainButton.jsx";

const empresasLogos = [
  {
    src: "assets/beldfordroxo-logo.png",
    alt: "Logo Beldford Roxo"
  },
  {
    src: "assets/thorax-logo.png",
    alt: "Logo Thorax"
  },
  {
    src: "assets/Flamengo_braz_logo.svg.png",
    alt: "Logo Flamengo"
  },
  {
    src: "assets/vogue-logo.png",
    alt: "Logo Vogue"
  },
  {
    src: "assets/chiquinho-logo.png",
    alt: "Logo Chiquinho"
  },
  {
    src: "assets/supergasbras-logo.png",
    alt: "Logo Supergasbras"
  },
  {
    src: "assets/logoredeeconomia.png",
    alt: "Logo Rede Economia"
  },
  {
    src: "assets/Fasano_Logo.png",
    alt: "Logo Fasano"
  },
  {
    src: "assets/rj-logo.png",
    alt: "Logo RJ"
  },
  {
    src: "assets/comtex-logo.png",
    alt: "Logo Comtex"
  },
  {
    src: "assets/Especifarma-logo.png",
    alt: "Logo Especifarma"
  },
  {
    src: "assets/espetocarioca-logo.png",
    alt: "Logo Espeto Carioca"
  },
  {
    src: "assets/estacio-logo.png",
    alt: "Logo Estácio"
  },
  {
    src: "assets/ipiranga-logo.png",
    alt: "Logo Ipiranga"
  },
  {
    src: "assets/masterchef-logo.png",
    alt: "Logo Masterchef"
  },
  {
    src: "assets/novaihuacu-logo.png",
    alt: "Logo Nova Iguaçu"
  }
];

export default function Home(){
    return (
        <div className="flex flex-col w-full h-auto m-auto align-middle justify-center pt-28 lg:pt-32 xl:pt-36">
            <div className="flex justify-center w-full h-70 md:h-110 p-3 gap-2 flex-col lg:flex-row">
                <MyCarousel />
                <div className="hidden h-full lg:flex lg:flex-col w-auto max-h-full gap-2 font-semibold">
                    <div className="relative flex h-1/2 items-end w-full overflow-hidden rounded-2xl">
                        <Link className="w-full h-full" to="/servicos">
                            <img className="block object-cover w-full h-full" src="/assets/banner(10).jpg" alt="Imagem lateral 1" />
                        </Link>
                        <p className="overlay-text text-[0.8rem] font-bold rounded-xl p-2 absolute bottom-4 left-4 bg-black bg-opacity-60 text-white">
                            Projeto totalmente personalizado por nossos arquitetos e engenheiros para atender as suas necessidades.
                        </p>
                    </div>
                    <div className="relative flex items-end w-full h-1/2 overflow-hidden rounded-2xl">
                        <Link className="w-full h-full" to="/produtos">
                            <img className="block object-cover w-full h-full" src="/assets/banner(8).jpg" alt="Imagem lateral 2" />
                        </Link>
                        <p className="overlay-text text-[0.8rem] font-bold rounded-xl p-2 absolute bottom-4 left-4 bg-black bg-opacity-60 text-white">
                            Confira nossa linha de produtos para combate e prevenção de incêndios. Entregas em todo o Brasil.
                        </p>
                    </div>
                </div>
            </div>
            <ServicesPreview />
            <div className="text-gray-900 flex flex-col gap-2 m-auto align-middle justify-center text-justify w-full px-4 md:px-10">
                <h3 className="text-xl text-center main-title">Por que confiar na <span className="text-secondary-color text-2xl">SAFETY</span> <span className="text-2xl">FIRE?</span></h3>
                <p className="text-xl">Com mais de 5 anos de experiência no seguimento de prevenção contra incêndio e pânico, nossa empresa tem como missão oferecer serviços personalizados que atendem suas necessidades com agilidade, eficiência e total conformidade com as normas de segurança.</p>
                <p className="font-extralight">Empresa credenciada nos órgãos reguladores:</p>
                <div className="flex flex-col md:flex-row md:gap-x-8 gap-4 m-auto align-middle justify-center w-full">
                    <div className="w-full md:w-1/2 xl:max-h-[250px] grid grid-cols-4 grid-rows-2 gap-x-2 items-center justify-items-center">
                        <div className="col-span-2 flex justify-center items-center">
                            <img src="/assets/crea-rj.png" alt="CREA-RJ Logo" className="m-auto" />
                        </div>

                        <div className="col-span-2 flex justify-center items-center">
                            <img src="/assets/cau-br.png" alt="CAU-BR Logo" className="m-auto" />
                        </div>

                        <div className="flex justify-center items-center">
                            <img src="/assets/inmetro.webp" alt="INMETRO Logo" className="m-auto" />
                        </div>

                        <div className="flex justify-center items-center">
                            <img src="/assets/sicaf.webp" alt="SICAF Logo" className="m-auto" />
                        </div>

                        <div className="flex justify-center items-center">
                            <img src="/assets/naturgy.webp" alt="Naturgy Logo" className="m-auto" />
                        </div>

                        <div className="flex justify-center items-center">
                            <img src="/assets/selo-cbrj.png" alt="Selo CBRJ Logo" className="m-auto" />
                        </div>
                    </div>
                    <div className="md:w-1/2 md:text-[1rem] xl:pt-4">
                        <p>Os Projetos de Segurança Contra Incêndio e Pânico são sistemas avançados para detecção, alarme e combate a incêndios, essenciais para proteger vidas e patrimônios. Também oferecemos suporte completo para a legalização e o licenciamento dos projetos, em conformidade com as normas da DGST/DDP/CBMERJ. Escolher nossos serviços significa investir em soluções integradas de proteção contra incêndios, sempre alinhadas com as melhores práticas do setor e comprometidas com a preservação da vida e do patrimônio.</p>
                        <MainButton to="/empresa">Saiba Mais Sobre</MainButton>
                    </div>
                </div>
            </div>
            <div className="overflow-hidden my-8">
                <h4 className="text-xl font-semibold p-2">Seja mais uma das empresas que confiam sua segurança na Safety Fire!</h4>
                <div className="logos-container w-max flex h-[100px] justify-start bg-[#f0f0f0]">
                    {empresasLogos.map((logo, index) =>
                    <img key={index} className="w-auto py-2 max-w-[200px] h-auto object-contain mr-5" src={`${logo.src}`} alt ={`${logo.alt}`}></img>
                    )}
                </div>
            </div>        
        </div>
    );
}