import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import useWindowWidth from '../Hooks/WindowWidth'; // Importa o hook personalizado para obter a largura da janela

// Importe os estilos CSS base do Swiper e dos módulos
import 'swiper/css';
import 'swiper/css/navigation'; 
import 'swiper/css/pagination'; 
import 'swiper/css/autoplay'; 

const baseSlidesData = [
  {
    src: "/assets/banner.png",
    alt: "Banner inicial da empresa",
    titulo: "Empresa especializada em serviços de engenharia e segurança contra incêndio e pânico ",
    text: "",
  },
  {
    src: "/assets/banner2.jpg",
    alt: "Banner de apresentação",
    titulo: "Proteja sua empresa conosco",
    text: "Apresentamos um projeto de segurança contra incêndio e pânico (PSCI) elaborado de acordo com as normas técnicas e padrões vigentes para a sua necessidade.",
  },
  {
    src: "/assets/banner3.jpeg",
    alt: "Banner de preocupações da empresa",
    titulo: "A prevenção começa antes",
    text: "Consideramos todos os aspectos que podem influenciar no surgimento e na propagação do incêndio no projeto da sua empresa.",
  },
];

function Slider() { 
  const windowWidth = useWindowWidth();

  const slidesData = baseSlidesData.map((slide, index) => {
    let modifiedSlide = { ...slide };

    if (windowWidth > 768) { 

      if (index === 0) {
        modifiedSlide.src = "/assets/img-carousel-home.png"; 
        modifiedSlide.titulo = ""; 
      }
    };
    return modifiedSlide; 
  });
  return (
    <div className={`carousel-inicial max-w-full h-full lg:max-w-[70%] xl:max-w-[60%] flex align-middle justify-center rounded-2xl relative overflow-hidden`}> 
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1} 
        speed={400} 
        spaceBetween={0} 
        autoplay={{
          delay: 10000, 
          disableOnInteraction: false, 
          stopOnLastSlide: false, 
        }}
        
        navigation 
        
        pagination={{
          clickable: true,
        }}
        
        className="w-full h-full" 
      >

        {slidesData.map((slide, index) => (
          <SwiperSlide key={index} className="w-full h-full"> 
            <img 
              src={slide.src} 
              alt={slide.alt} 

              className="w-full h-full object-fit" 
            />
            <div className="absolute text-white text-center inset-0 flex flex-col items-center justify-end xl:mb-10">
              {windowWidth < 768 && index === 0 ? <h2 className="overlay-text mb-8 md:text-3xl lg:text-2xl rounded-2xl font-bold text-secondary-color px-2 mx-8">{slide.titulo}</h2> : <h2 className="text-2xl text-white mb-0 md:text-4xl mx-3 font-bold">{slide.titulo}</h2>}
              <p className="text-xl lg:text-md text-white  md:text-2xl mb-8 px-8 font-400 max-w-md">{slide.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider;