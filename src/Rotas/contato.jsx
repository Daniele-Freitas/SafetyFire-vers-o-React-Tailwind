import ContactForm from "../Componentes/Form/Form";
import { FaMap, FaMobileScreen, FaRegEnvelope as FaEnvelopeRegular, FaRegClock as FaClockRegular } from 'react-icons/fa6';
const contactData = [
  {
    id: 'address',
    icon: FaMap, // Ícone do mapa
    text: 'Estrada do Tindiba, N°332 - Sala 306 - Pechincha, Rio de Janeiro, RJ.',
    type: 'mapa',
  },
  {
    id: 'email',
    icon: FaEnvelopeRegular, // Ícone de envelope
    text: 'comercial@safetyfireservicos.com',
    type: 'email',
  },
  {
    id: 'phone',
    icon: FaMobileScreen, // Ícone de telefone
    text: '(21) 3012-5051',
    type: 'telefone',
  },
  {
    id: 'hours',
    icon: FaClockRegular, // Ícone de relógio
    text: 'Segunda a sexta das 8:00 às 17:00',
    type: 'horario',
  },
];


export default function Contato (){
    return(
        <div className="w-full justify-center align-middle m-auto ">
            <section>
                <div className="container-img-contato pt-24 lg:pt-32 flex flex-col w-full h-[300px] lg:h-[350px] 2xl:h-[400px] relative text-2xl text-center text-white justify-center align-middle">
                    <div className="div-img h-[200px] lg:h-[250px] 2xl:h-[350px] pb-5">
                        <h3>Fale conosco</h3>
                        <p>Nos deixe uma mensagem teremos o maior prazer em te responder</p>
                    </div>
                </div>
            </section>
            <section className="mt-8 m-auto px-6 md:px-10 lg:px-12 xl:px-16 2xl:px-0 max-w-7xl">
                <div className="flex flex-col lg:grid lg:grid-cols-2 gap-x-8">
                    <div className="col-span-2 w-full h-fit">
                        <span className="text-[1rem]">ENTRE EM CONTATO</span>
                        <h2 className="text-2xl mt-0 mb-2">Marque uma visita</h2>
                    </div>
                    <div className="justify-center aling-middle"> 
                        <p className="text-xl mb-4 text-justify">
                        Possuímos um canal de atendimento diferenciado receba resposta em até 24 horas. Entre em contato conosco para tirar dúvidas, fazer orçamentos ou
                        solicitar nossos serviços que a SAFETY FIRE terá o maior prazer em atendê-lo. Prenchendo o formulário você enviará um email diretamente para nosso canal de atendimento.
                        </p>
                            <div className="flex flex-col gap-2 mb-4 justify-center text-left">
                                {contactData.map((item) => (
                                    <p key={item.id}>
                                        <item.icon className="inline-block mr-2" />
                                        {item.text}
                                    </p>
                                ))}
                            </div>
                    </div>
                    <div className="w-full">
                        <img className="w-full h-auto rounded-2xl" src="/assets/Localizacao-escritorio.png" />
                    </div>
                </div>
        </section>
        <div className="w-full mt-8 px-4 md:px-8">
            <ContactForm
                title="Entre em contato"
                formOrigin="Página de Contato"
            />
        </div>
    </div>
    )
}