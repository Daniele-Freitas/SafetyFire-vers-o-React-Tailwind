import React from 'react';

interface FormTextareaProps {
    name: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    error?: string;
    rows?: number;
    required?: boolean;
}

export default function FormTextarea({ name, placeholder, value, onChange, error, rows = 4, required = false }: FormTextareaProps) {
    return (
    <div className={`w-full`}>
        <textarea
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows={rows}
        required={required}
        className={`
            block w-full px-3 py-2 border rounded-md shadow-sm transition-colors
            focus:border-primary-color focus:border-2 focus:outline-none focus:shadow-md
            ${error ? 'border-red-500' : 'border-gray-300'}
        `}
        />
    {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
    );
}