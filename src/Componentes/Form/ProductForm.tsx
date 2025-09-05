import React, { useState } from 'react';
import FormInput from '../Inputs/formInput';
import { MdOutlineReportProblem } from "react-icons/md";

// INTERFACES E TIPOS

interface FormData {
    name: string;
    email: string;
    phone: string;
}

interface FormStatus {
    submitting: boolean;
    message: string;
    isError: boolean;
}

interface ProductFormProps {
    title: string;
    formOrigin: string;
    apiEndpoint?: string;
}
type FormErrors = Partial<Record<keyof FormData | 'form', string>>;

// COMPONENTE

export default function ProductForm({
    title,
    formOrigin,
    apiEndpoint = "https://safetyfireservicos.com/send_mail.php"
}: ProductFormProps) {

  // === ESTADOS ===

    const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: ''
    });

    const [formStatus, setFormStatus] = useState<FormStatus>({
        submitting: false,
        message: '',
        isError: false,
    });

    const [errors, setErrors] = useState<FormErrors>({})

  // === FUNÇÕES ===
  // Handler para inputs de texto e textarea
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    const validateForm = (): FormErrors => {
        const newErrors: FormErrors = {};

        if (!formData.name) {
            newErrors.name = 'O nome é obrigatório.';
        } else if (!/^[a-zA-ZÀ-ú\s]+$/.test(formData.name)) {
            newErrors.name = 'O nome deve conter apenas letras.';
        }

        if (formData.phone) {
            const cleanedPhone = formData.phone.replace(/\D/g, '');
            
            // Testa se o telefone limpo tem 10 ou 11 dígitos
            if (!/^\d{10,11}$/.test(cleanedPhone)) {
                newErrors.phone = 'Formato de telefone inválido. Use (99)99999-9999 ou (99)9999-9999.';
            }
        }

        if (!formData.email) {
            newErrors.email = 'O e-mail é obrigatório.';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Formato de e-mail inválido.';
        }

        return newErrors;
    };


  // Handler para submissão do formulário
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formErrors = validateForm();

        if(Object.keys(formErrors).length > 0){
            setErrors(formErrors)
            return
        }

        setFormStatus({ submitting: true, message: '', isError: false });

        const data = new FormData();
        data.append('name', formData.name);
        data.append('email', formData.email);
        data.append('phone', formData.phone);
        data.append('origem_formulario', formOrigin);

        try {
        setErrors({})
            const response = await fetch(apiEndpoint, { method: "POST", body: data });
            const resultText = await response.text();
            if (!response.ok) throw new Error(resultText);
            
            setFormStatus({ submitting: false, message: resultText, isError: false });
            setFormData({ name: '', email: '', phone: ''});
        } catch (error: any) {
            setFormStatus({
            submitting: false,
            message: "Erro ao enviar a mensagem. Por favor, tente novamente.",
            isError: true,
            });
        }
    };

  // === RENDERIZAÇÃO (JSX) ===
    return (
        <div className="w-full min-w-xl max-w-2xl mx-auto p-4 md:p-8 max-h-[80%] bg-white border border-gray-200 rounded-lg shadow-lg">
            <h4 className="text-xl font-bold text-center text-gray-800 mb-3 md:mb-6">
                <MdOutlineReportProblem className="inline-block mr-2 text-red-500" />
                {title}
            </h4>
            <p className='text-sm text-justify mb-4'>Nossos produtos ainda não estão disponíveis para compra pelo site.
            Por favor, deixe seus dados abaixo que assim que disponível entraremos em contato com você e retornaremos o mais breve possível com mais informações.</p>
            <form onSubmit={handleSubmit} className="space-y-4">
            
            <FormInput 
                name="name" 
                type="text" 
                value={formData.name} 
                onChange={handleChange} 
                placeholder="Seu nome"
                error={errors.name}
                required 
            />
            <div className='grid grid-cols-1 m-0 md:grid-cols-2 md:gap-4'>
                <FormInput 
                    name="email"   
                    type="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    error={errors.email}
                    placeholder="Seu e-mail" 
                    required 
                />

                <FormInput 
                    name="phone" 
                    type="tel" 
                    value={formData.phone} 
                    onChange={handleChange} 
                    error={errors.phone}
                    placeholder="Telefone (opcional)" 
                />
            </div>
                    
            <button
                type="submit"
                disabled={formStatus.submitting}
                className="w-full bg-secondary-color text-white py-1.5 px-4 rounded-md font-semibold hover:bg-primary-color transition-colors disabled:bg-gray-400"
            >
                {formStatus.submitting ? 'Enviando...' : 'Enviar'}
            </button>

            {formStatus.message && (
                <p className={`text-center mt-2 text-sm ${formStatus.isError ? 'text-red-500' : 'text-green-500'}`}>{formStatus.message}</p>
            )}
            </form>
        </div>
    );
}