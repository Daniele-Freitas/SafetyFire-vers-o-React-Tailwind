export default function CollapseButtonPanel({ title, buttonClassName = '', isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`
        w-full flex justify-between items-center p-4 
        bg-gray-50 md:rounded-4xl
        transition-colors duration-200 
        focus:outline-none
        ${buttonClassName}
        ${isActive ? 'bg-secondary-color text-white' : 'bg-gray-50 text-gray-800'} 
      `}
      aria-expanded={isActive} 
      aria-controls={`collapse-content-${title.replace(/\s/g, '-')}`} 
    >
      <span className="text-lg font-semibold">{title}</span>
      <svg
        className={`w-6 h-6 transform transition-transform duration-300 ${isActive ? 'rotate-180' : 'rotate-0'}`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
      </svg>
    </button>
  );
}