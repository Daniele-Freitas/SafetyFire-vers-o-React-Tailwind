// src/components/Collapse/Collapse.jsx
import React, { useState, useRef, useEffect } from 'react';

export default function Collapse({
  id,
  title,
  buttonContent, // Conteúdo customizado para o botão
  isActive, // Indica se este item está ativo/aberto
  toggleActiveItem,
  containerClassName = '',
  children
}) {
  const contentRef = useRef(null);
  const isOpen = isActive; // O estado interno reflete o prop isActive

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.maxHeight = isOpen ? `${contentRef.current.scrollHeight}px` : '0px';
    }
  }, [isOpen]);

  return (
    <div className={`max-w-[90%] mt-4 m-auto overflow-hidden ${containerClassName}`}>
      <button
        onClick={() => toggleActiveItem(id)}
        className={`
          w-full flex h-33 lg:h-39 xl:h-34  justify-center items-center px-4 py-2 border border-gray-300 
          transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white-500
          ${isActive ? 'bg-secondary-color' : 'bg-gray-50 hover:bg-gray-100'} 
        `}
        aria-expanded={isActive}
        aria-controls={`collapse-content-${id}`}
      >
        {/* Renderiza o buttonContent e passa 'isActive' para ele se for uma função */}
        {typeof buttonContent === 'function' ? buttonContent(isActive) : buttonContent}
      </button>

      <div
        id={`collapse-content-${id}`}
        ref={contentRef}
        className={`
          overflow-hidden
          transition-max-height duration-500 ease-in-out
        `}
        style={{ maxHeight: '0px' }}
      >
        {/* Conteúdo interno do card */}
        <div className="border border-gray-300 rounded-xl shadow-lg bg-white">
          {children}
        </div>
      </div>
    </div>
  );
}