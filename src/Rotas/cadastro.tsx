import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import FormInput from '../Componentes/Inputs/formInput';
//interfaces e tipos typescript

interface CadastroFormData {
    UserName: string;
    email: string;
    password: string;
    confirmPassword: string;
}

interface PasswordRequirement {
    id: string;
    text: string;
    regex: RegExp;
    valid: boolean;
}

type FormErrors = Partial<Record<keyof CadastroFormData | 'form', string>>;

export default function Cadastro() {

    // === ESTADOS ===

    //guarda os dados do formulário
    const [formData, setFormData] = useState<CadastroFormData>({
        UserName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [errors, setErrors] = useState<FormErrors>({}); // guarda os erros do formulário
    const [loading, setLoading] = useState(false); // estado de carregamento do firebase

    //parametros e estados para os requisitos de senha

    const [passwordRequirements, setPasswordRequirements] = useState<PasswordRequirement[]>([
        { id: 'length', text: 'Pelo menos 8 caracteres', regex: /.{8,}/, valid: false },
        { id: 'uppercase', text: 'Pelo menos uma letra maiúscula', regex: /[A-Z]/, valid: false },
        { id: 'lowercase', text: 'Pelo menos uma letra minúscula', regex: /[a-z]/, valid: false },
        { id: 'number', text: 'Pelo menos um número', regex: /\d/, valid: false },
        { id: 'special', text: 'Pelo menos um caractere especial', regex: /[!@#$%^&*(),.?":{}|<>]/, valid: false },
    ]);


    //Hooks
    const { signup } = useAuth(); // Função de cadastro do contexto de autenticação
    const navigate = useNavigate(); // Hook para navegação do usuario assim que logado

    // Função para lidar com mudanças nos campos de entrada
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setFormData(prevState => ({ ...prevState, [name]: value }));

        if (name === 'password') {
            setPasswordRequirements(prevReqs =>
                prevReqs.map(req => ({ ...req, valid: req.regex.test(value) }))
            );
        }
    };

    //valida os dados quando o usuario tenta enviar, se tudo estiver correto autoriza o envio do handleSubmit,se nao retorna os erros novos
    const validateForm = (): FormErrors => {
        const newErrors: FormErrors = {};

        if (!formData.UserName) newErrors.UserName = 'O nome é obrigatório.';
        if (!formData.email) newErrors.email = 'O e-mail é obrigatório.';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Formato de e-mail inválido.';

        if (!formData.password) newErrors.password = 'A senha é obrigatória.';
        const allRequirementsMet = passwordRequirements.every(req => req.valid);
        if (!allRequirementsMet) newErrors.password = 'A senha não atende a todos os requisitos.';

        if (!formData.confirmPassword) newErrors.confirmPassword = 'Confirme sua senha.';
        else if (formData.confirmPassword !== formData.password) newErrors.confirmPassword = 'As senhas não correspondem.';

        return newErrors;
    };

    // Função para lidar com o envio do formulário
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formErrors = validateForm();

        if (Object.keys(formErrors).length > 0) {//se houver erros retorna e atualiza eles
            setErrors(formErrors);
            return;
        }

        try {
            setErrors({});
            setLoading(true);
            await signup(formData.UserName,formData.email, formData.password);//aguarda o cadastro no firebase
            navigate('/'); // Redireciona para a home após o sucesso do cadastro
        } catch (err: any) {
            if (err.code === 'auth/email-already-in-use') {
                setErrors({ email: 'Este e-mail já está em uso.' });
            } else {
                setErrors({ form: 'Falha ao criar a conta. Tente novamente.' });
                console.error('Erro no cadastro:', err);
            }
        } finally {
            setLoading(false);
        }
    };

    // === RENDERIZAÇÃO (JSX) ===
    return (
        <div className="bg-secondary-color min-h-screen flex items-center justify-center p-4">
            <div className="bg-white w-full max-w-sm m-auto flex flex-col p-6 gap-4 rounded-lg shadow-md">
                <img src="/assets/logo-horizontal.png" alt="Logo" className="mx-auto h-18 w-auto" />
                <p className="text-center text-gray-900 font-bold text-xl">Faça seu cadastro</p>

                <form onSubmit={handleSubmit} className="flex flex-col" noValidate>
                    <FormInput
                    type="text"
                    name="UserName"
                    placeholder="Nome completo"
                    value={formData.UserName}
                    onChange={handleChange}
                    error={errors.UserName}
                    />

                    <FormInput
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    value={formData.email}
                    onChange={handleChange}
                    error={errors.email}
                    />
                    
                    <FormInput
                    type="password"
                    name="password"
                    placeholder="Crie uma senha"
                    value={formData.password}
                    onChange={handleChange}
                    error={errors.password}
                    />

                    {/* A lista de requisitos da senha continua aqui, pois é específica do cadastro */}
                    <ul className="mt-2 mb-4 space-y-0.5">
                    {passwordRequirements.map(req => (
                        <li key={req.id} className={`flex items-center text-xs ${req.valid ? 'text-green-600' : 'text-gray-500'}`}>
                        {req.valid ? '✔' : '✖'}
                        <span className="ml-2">{req.text}</span>
                        </li>
                    ))}
                    </ul>
                    
                    <FormInput
                    type="password"
                    name="confirmPassword"
                    placeholder="Digite a senha novamente"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    error={errors.confirmPassword}
                    />
                    
                    <button 
                    type="submit" 
                    disabled={loading}
                    className="bg-black cursor-pointer text-md outline-none text-white font-semibold py-2 px-4 rounded-md hover:shadow-md hover:bg-secondary-color transition duration-200"
                    >
                    {loading ? 'Cadastrando...' : 'Cadastrar'}
                    </button>
                    
                    {errors.form && <p className="text-red-500 text-sm text-center mt-2">{errors.form}</p>}
                </form>

                <p className="text-center text-gray-600 text-sm">
                    Já tem uma conta? <Link to="/login" className="text-secondary-color focus:outline-none           text-sm font-semibold hover:underline">Faça login</Link>
                </p>
            </div>
        </div>
    );
}