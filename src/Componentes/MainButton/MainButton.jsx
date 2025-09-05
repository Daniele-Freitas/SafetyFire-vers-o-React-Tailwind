import { Link } from 'react-router-dom'; // Importe Link se o botão for um link

function MainButton({ to, onClick, children, className = '' }) {
  const baseClasses = `
    block 
    h-auto 
    w-1/2
    mt-4
    mx-auto 
    border-2 
    border-primary-color
    text-center
    rounded 
    px-3 
    py-2 
    bg-transparent 
    text-[1rem] 
    transition-colors 
    duration-700 
    ease-in-out
    hover:bg-secondary-color 
    hover:border-secondary-color
    hover:text-white
  `;


  // Determine se o botão deve ser um Link ou um Button
  const renderContent = (
    <>
      <span className="font-semibold">
        {children}
      </span>
    </>
  );

  if (to) { // Se 'to' for fornecido, renderiza como um Link
    return (
      <Link 
        to={to} 
        className={`${baseClasses}  ${className} no-underline`} // no-underline remove o sublinhado padrão do link
        onClick={onClick}
      >
        {renderContent}
      </Link>
    );
  } else { // Caso contrário, renderiza como um Button
    return (
      <button 
        className={`${baseClasses} ${className}`}
        onClick={onClick}
      >
        {renderContent}
      </button>
    );
  }
}

export default MainButton;