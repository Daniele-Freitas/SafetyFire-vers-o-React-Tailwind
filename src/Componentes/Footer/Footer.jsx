import {Link} from 'react-router-dom';
import OpcoesNav from '../OpcoesNav/OpcoesNav';
import {
    FaLinkedin,
    FaInstagram,
    FaWhatsapp,
    FaFacebook
} from "react-icons/fa";

const socialMedias = [
    { alt: 'LinkedIn', icon: FaLinkedin, link: '#' },
    { alt: 'Instagram', icon: FaInstagram, link: '#' },
    { alt: 'WhatsApp', icon: FaWhatsapp, link: '#' },
    { alt: 'Facebook', icon: FaFacebook, link: '#' }
];

const servicesList = [
    { service: 'Legalização junto ao Corpo de Bombeiros'},
    { service: 'Projetos de segurança contra incêndios'},
    { service:'Treinamento de brigada de incêndio'},
    { service:'Instalação e manutenção de sistemas'},
    { service:'Contratos de manutenção preventiva'},
    { service:'Recarga de extintores e testes de mangueiras'}
]
const produtos = [
    {categoria: 'Extintores portáteis' },
    {categoria: 'Extintores Sobre-Rodas/Carreta' }
]

function Footer(){
    return (
    <>
        <footer className='w-full p-6 h-auto text-white  bg-secondary-color text-xl text-center align-middle mt-4 justify-center xl:max-h-[430px]'>
            <div className="grid-footer grid grid-cols-1 mx-auto gap-6 justify-between  md:grid-cols-2 md:grid-rows-3 md:gap-x-4 lg:grid-cols-3 lg:grid-rows-2 lg:gap-8 xl:grid-cols-0 xl:grid-rows-0 xl:text-left xl:gap-8 xl:gap-y-2 xl:max-h-[400px] xl:px-6 ">
                <div className="footer-item xl:text-[1.1rem]">
                    <Link className="py-4" to="/">
                        <img src="/assets/Logo-vertical-branca.png"  width="100px" alt="Logo" className="m-auto" />
                    </Link>
                    <p className='mb-2 text-justify'>Somos uma empresa credenciada no CBMERJ para fazer projetos de segurança contra incêndio e pânico e obras de engenharia. </p>
                    <p className='mb-2'>Nosso registro no CBMERJ: 02-552</p>
                    <p className='mb-2'>Nosso CNPJ: 52.799.453/0001-23</p>
                </div>

                <div className="footer-item m-auto lg:m-4">
                    <h3>Companhia</h3>
                    <OpcoesNav />
                </div>

                <div className="footer-item md:py-10 lg:pt-16 xl:py-2 lg:m-4">
                    <h3>Produtos</h3>
                        <ul>
                            {produtos.map((item, index) => (
                                <li key= {index}>
                                    <Link to="/produtos">{item.categoria}</Link>
                                </li>
                            ))}
                        </ul>
                </div>

                <div className="footer-item md:py-10 lg:py-0  lg:m-0 ">
                    <h3>Serviços</h3>
                    <ul>
                        {servicesList.map((item, index) => (
                                <li key={index}>
                                    <Link to="/servicos.html">{item.service}</Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>

                <div className="footer-item md:col-span-2 lg:m-auto xl:col-span-1 xl:col-row-1 xl:m-0 font-light text-[#f0f0f0] xl:text-white xl:font-normal xl:text-[1.1rem] gap-1">
                    <h3>Contato</h3>
                    <p>Email: comercial@safetyfireservicos.com</p>
                    <p>Telefone:(21) 3012-5051</p>
                    <p>Endereço: Estrada do Tindiba, N°332 - Sala 306 - Pechincha, Rio de Janeiro, RJ.</p>
                    <p>Suporte em até 24h</p>
                    <h3 className='mt-2'>Nos acompanhe</h3>
                    <div className="flex justify-center items-center xl:text-left xl:justify-normal gap-4 ">
                        {socialMedias.map((socialMedia) => {
                            const Icon = socialMedia.icon;
                            return (
                                <Link to={socialMedia.link} className="border-2 rounded-[8px] border-white cursor-pointer hover:bg-white hover:text-secondary-color hover:scale-[1.1] hover:delay-100 transition-colors duration-300 " key={socialMedia.alt}>
                                    <Icon className="m-2 text-2xl" alt={socialMedia.alt} />
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
        </footer>
    <div className="text-center px-4 py-2 text-secondary-color xl:h-max-[50px] xl:text-[0.8rem]">
        <span className="text-[0.9rem]">2025&copy;Todos os direitos reservados por<strong> SAFETY FIRE</strong></span>
        <p className="text-[0.9rem]">Desenvolvimento web por Daniele Freitas</p>
    </div>
    </>
    );
}

export default Footer;