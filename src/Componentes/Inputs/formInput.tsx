import React from 'react';

// 1. Definimos os tipos para as props que o componente espera receber
interface FormInputProps {
  type: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string; // ✨ A nova prop de erro. É opcional (?).
  className?: string; // Prop de classe opcional para estilos extras
  required?: boolean; // Prop para indicar se o campo é obrigatório
}

export default function FormInput({ type, name, placeholder, value, onChange, error, className, required }: FormInputProps) {
  return (
    <div className="mb-4 grid w-full"> {/* Movido o mb-4 para um wrapper */}
      <input 
        type={type} 
        name={name}
        placeholder={placeholder} 
        value={value} 
        onChange={onChange} 
        className={`
          p-1.5 md:p-2 w-full border rounded transition-colors duration-300 shadow-sm focus:border-primary-color focus:border-2
          focus:outline-none focus-visible:shadow-md
          ${error ? 'border-red-500' : 'border-gray-300'} 
          ${className}
        `}
      />
      {/* Se a prop 'error' existir, renderiza a mensagem de erro abaixo do input */}
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}