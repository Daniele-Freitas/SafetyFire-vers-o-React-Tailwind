import ServicesCollapse from '../Componentes/ServicesCollapse/ServicesCollapse'

export default function Servicos (){
    return(
        <div className="flex flex-col justify-center align-middle m-auto pt-32 lg:pt-38 xl:pt-27">
            <div className='w-full px-6'>
                <h3 className="main-title text-2xl text-center">Serviços</h3>
                <p className="text-justify text-xl">Com a SAFETY FIRE sua empresa pode contar com a nossa alta capacitação e especialização no mercado de prevenção a incêndio e pânico. A segurança da sua empresa, condomínio ou estabelecimento não pode ser deixada ao acaso. Um incêndio pode gerar perdas irreparáveis, colocando vidas em risco e comprometendo o seu patrimônio. Por isso, oferecemos soluções completas e personalizadas para garantir que seu espaço esteja 100% regularizado e protegido contra qualquer situação de emergência. Clique nos nossos serviços para saber mais!</p>
            </div>
            <ServicesCollapse />
        </div>
    )
}