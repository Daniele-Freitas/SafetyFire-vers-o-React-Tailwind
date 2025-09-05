import React, { useState } from 'react';
import FormInput from '../Inputs/formInput';
import FormTextarea from '../Inputs/FormTextarea';
import FormSelect from '../Inputs/FormSelect';

// INTERFACES E TIPOS

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  preferredContact: string;
}

interface FormStatus {
  submitting: boolean;
  message: string;
  isError: boolean;
}

interface ContactFormProps {
  title: string;
  formOrigin: string;
  apiEndpoint?: string;
}

// COMPONENTE

export default function ContactForm({
  title,
  formOrigin,
  apiEndpoint = "https://safetyfireservicos.com/send_mail.php"
}: ContactFormProps) {
  // === ESTADOS ===
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    preferredContact: 'email', // Valor padrão para o select
  });

  const [formStatus, setFormStatus] = useState<FormStatus>({
    submitting: false,
    message: '',
    isError: false,
  });

  // === FUNÇÕES ===
  // Handler para inputs de texto e textarea
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  // Handler específico para o select customizado do Headless UI
  const handleSelectChange = (value: string) => {
    setFormData(prevData => ({
      ...prevData,
      preferredContact: value
    }));
  };

  // Handler para submissão do formulário
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus({ submitting: true, message: '', isError: false });

    const data = new FormData();
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('phone', formData.phone);
    data.append('subject', formData.subject);
    data.append('message', formData.message);
    data.append('preferredContact', formData.preferredContact);
    data.append('origem_formulario', formOrigin);

    try {
      const response = await fetch(apiEndpoint, { method: "POST", body: data });
      const resultText = await response.text();
      if (!response.ok) throw new Error(resultText);
      
      setFormStatus({ submitting: false, message: resultText, isError: false });
      setFormData({ name: '', email: '', phone: '', subject: '', message: '', preferredContact: 'email' });
    } catch (error: any) {
      setFormStatus({
        submitting: false,
        message: "Erro ao enviar a mensagem. Por favor, tente novamente.",
        isError: true,
      });
    }
  };

  // Opções para o dropdown
  const contactOptions = [
    { value: 'email', label: 'Email' },
    { value: 'phone', label: 'Telefone' },
    { value: 'whatsapp', label: 'WhatsApp' },
  ];

  // === RENDERIZAÇÃO (JSX) ===
  return (
    <div className="w-full max-w-2xl mx-auto p-8 bg-white border border-gray-200 rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">{title}</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        
        <FormInput name="name" type="text" value={formData.name} onChange={handleChange} placeholder="Seu nome" required />
        <div className='grid grid-cols-1 m-0 md:grid-cols-2 gap-4'>
          <FormInput name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Seu e-mail" required />
          <FormInput name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="Telefone (opcional)" />
        </div>
        
        <FormSelect
          name="preferredContact"
          label="Meio de contato preferido:"
          value={formData.preferredContact}
          onChange={handleSelectChange}
          options={contactOptions}
        />
        
        <FormInput name="subject" type="text" value={formData.subject} onChange={handleChange} placeholder="Assunto" required />
        
        <FormTextarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Sua mensagem"
          required
          rows={4}
        />
        
        <button
          type="submit"
          disabled={formStatus.submitting}
          className="w-full bg-secondary-color text-white py-2 px-4 rounded-md font-semibold hover:bg-primary-color transition-colors disabled:bg-gray-400"
        >
          {formStatus.submitting ? 'Enviando...' : 'Enviar'}
        </button>

        {formStatus.message && (
          <p className={`text-center mt-4 text-sm ${formStatus.isError ? 'text-red-500' : 'text-green-500'}`}>{formStatus.message}</p>
        )}
      </form>
    </div>
  );
}