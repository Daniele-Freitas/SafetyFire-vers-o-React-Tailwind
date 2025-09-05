import { MdEngineering } from "react-icons/md";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules'; // Não precisamos de Autoplay se os serviços não rodam automaticamente
import { Link } from 'react-router-dom'; // CORREÇÃO: Usar react-router-dom

// Importe os componentes de ícone do react-icons
import { 
  FaFireBurner as FaFireBurner6, 
  FaScrewdriverWrench as FaScrewdriverWrench6, 
  FaFilePen as FaFilePen6 ,
  FaHelmetSafety as FaHelmetSafety6
} from "react-icons/fa6"; 

import {
  FaFileSignature,
  FaFireExtinguisher,
  FaAngleLeft
} from "react-icons/fa"; 

import DataPreview from "./DataPreview.json"; // Seu arquivo JSON de serviços

// --- Mapeamento dos Ícones ---
const iconMap = {
    "fa-solid fa-fire-burner": FaFireBurner6,
    "fa-solid fa-helmet-safety": FaHelmetSafety6, 
    "fa-solid fa-screwdriver-wrench": FaScrewdriverWrench6, 
    "fa-solid fa-file-signature": FaFileSignature, 
    "fa-solid fa-file-pen": FaFilePen6, 
    "fa-solid fa-fire-extinguisher": FaFireExtinguisher,
};

// --- Estilos CSS do Swiper ---
import 'swiper/css';
import 'swiper/css/navigation'; 
import 'swiper/css/pagination'; 
// import 'swiper/css/autoplay'; // Se os serviços tiverem autoplay, mantenha

function ServicesPreview() {
  return (
    <section className="services-preview pt-4 pb-12">
      <div className="container md:max-w-[90%] mx-auto px-4 lg:px-0 xl:w-[85%] relative"> {/* Adicionado relative para os botões e paginação */}
        <h2 className="main-title text-xl md:text-2xl font-bold text-center mb-10">Uma prévia dos nossos serviços</h2>

        <Swiper
          // Módulos que você quer usar
          modules={[Navigation, Pagination]} // Autoplay se for o caso
          
          // Configurações base
          slidesPerView={1}
          spaceBetween={30} // Espaçamento entre os slides
          loop={false} // Geralmente carrosséis de serviço não são em loop infinito, mas você pode mudar para true
          
          // Configuração de Paginação
          pagination={{ clickable: true }}

          // Configuração de Navegação
          navigation={{
            prevEl: '.swiper-button-prev-custom', // Aponta para um botão customizado
            nextEl: '.swiper-button-next-custom', // Aponta para um botão customizado
          }}

          // Breakpoints para quantos slides mostrar por tela
          breakpoints={{
            // Mobile (0px e acima)
            0: {
              slidesPerView: 1,
            },
            // Tablets (768px e acima)
            768: {
              slidesPerView: 2, // 2 itens por vez
            },
            // Desktops (992px e acima)
            1200: {
              slidesPerView: 3, // 3 itens por vez
            },
          }}
          
          className="mySwiper w-full h-auto" // Adicione uma classe para estilização Swiper geral
        >
          {DataPreview.map((service) => {
            const ServiceIcon = iconMap[service.iconClass]; // Mapeia a string para o componente de ícone

            return (
              <SwiperSlide key={service.id}>
                <div className="service-item flex h-auto sm:h-[340px] sm:w-[95%] flex-col justify-center items-center w-[85%] mx-auto mb-10 sm:mb-12 border border-gray-300 px-8 py-8 rounded-2xl text-center shadow-lg">
                  <Link to={service.href} className="block text-center w-full"> {/* Link envolvendo o conteúdo do item */}
                    {ServiceIcon && <ServiceIcon className="text-4xl mx-auto text-black" />}
                    <h3 className="font-semibold mb-2 text-[1.1rem]">{service.title}</h3> {/* Corrigi o font-600 para font-semibold */}
                    <p className="text-gray-600 text-[1rem]">{service.description}</p>
                  </Link>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* Botões de Navegação Customizados (FORA do Swiper, mas dentro do pai relativo) */}
        <button id="prev" className="swiper-button-prev-custom absolute left-[-30px] lg:left-[-60px] top-1/2 -translate-y-1/2 z-10 p-2 text-gray-400 hover:text-gray-600 transition-colors hidden md:block">
            <FaAngleLeft className="text-4xl" /> {/* Usando o componente de ícone */}
        </button>
        <button id="next" className="swiper-button-next-custom absolute right-[-30px] lg:right-[-60px] top-1/2 -translate-y-1/2 z-10 p-2 text-gray-400 hover:text-gray-600 transition-colors hidden md:block">
            <FaAngleLeft className="text-4xl rotate-180" /> {/* Usando o componente de ícone e rotacionando */}
        </button>

        {/* Paginação Padrão do Swiper (será injetada automaticamente, mas precisa de CSS) */}
        {/* Você pode estilizar o '.swiper-pagination' no seu CSS global */}
        {/* Se precisar de um elemento customizado para a paginação (bullets), você teria que habilitar o 'el' na prop pagination novamente */}
        
      </div>
    </section>
  );
}

export default ServicesPreview;