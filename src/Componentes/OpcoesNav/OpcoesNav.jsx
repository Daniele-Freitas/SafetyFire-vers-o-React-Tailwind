import { NavLink } from 'react-router-dom';

const navLinks = [
    { text: 'Home', path: '/' },
    { text: 'Empresa', path: '/empresa' },
    { text: 'Serviços', path: '/servicos' },
    { text: 'Produtos', path: '/produtos' },
    { text: 'Contato', path: '/contato' },
];


function OpcoesNav({ ulClasses = '', linkClasses = '', onLinkClick = () => {} }) { 
    return (
        <ul className={ulClasses}>
            {navLinks.map((link) => (
                // O <li> agora só serve como um contêiner, sem classes de estilo.
                <li key={link.text}> 
                    <NavLink 
                        onClick={onLinkClick}
                        // Garante que o link "Home" só fica ativo na página inicial exata
                        end={link.path === '/'}
                        to={link.path}
                        // Passo 3: A lógica de classes agora está centralizada aqui.
                        className={({ isActive }) => 
                            isActive ? `${linkClasses} active` : linkClasses
                        }
                    >
                        {link.text}
                    </NavLink>
                </li>
            ))}
        </ul>
    );
}

export default OpcoesNav;