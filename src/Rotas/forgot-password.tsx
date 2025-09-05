import { Link } from "react-router";
import FormInput from "../Componentes/Inputs/formInput";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";

interface ForgotPasswordFormData {
    email: string;
}

type FormErrors = Partial<Record<keyof ForgotPasswordFormData | 'form', string>>;

export default function ForgotPassword() {

    const [formData, setFormData] = useState<ForgotPasswordFormData>({
        email: ''
    })

    const [errors, setErrors] = useState<FormErrors>({});
    const [loading, setLoading] = useState(false);


    //Hooks
    const { resetPassword } = useAuth();
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const validateForgotPasswordForm = (): FormErrors => {
        const newErrors: FormErrors = {};

        if (!formData.email) newErrors.email = 'O e-mail é obrigatório.';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Formato de e-mail inválido.';
        return newErrors;
    };

    const handleForgotPasswordSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formErrors = validateForgotPasswordForm();

        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }

        try {
            setErrors({});
            setLoading(true);
            await resetPassword(formData.email);
            alert('Link de recuperação enviado!');
            navigate('/login');
        } catch (error) {
            if (error.code === 'auth/user-not-found') {
                setErrors({ form: 'Usuário não encontrado.' });
            } else {
                setErrors({ form: 'Erro ao enviar link de recuperação.' });
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-secondary-color min-h-screen min-w-screen flex items-center justify-center">
            <div className="bg-white w-full gap-4 h-full max-w-sm m-auto flex flex-col p-6 rounded shadow-md">
                <img src="/assets/logo-horizontal.png" alt="Logo" className="px-15" />
                <p className="text-center text-gray-900 font-bold text-xl">Recuperar Senha</p>
                {errors.form && <p className="bg-red-100 text-center text-red-700 p-2 rounded mb-2">{errors.form}</p>}


                <form onSubmit={handleForgotPasswordSubmit} className="flex flex-col">
                    <FormInput
                        name="email"
                        type="email" 
                        placeholder="E-mail"
                        onChange={handleChange}
                        value={formData.email}
                    />
                    <button 
                        type="submit" 
                        className="bg-black hover:bg-secondary-color text-sm text-white p-2 rounded">
                            Enviar Link de Recuperação
                    </button>
                </form>

                <p className="text-center text-gray-600 text-sm">
                    Lembrou a senha? <Link to="/login" className="text-secondary-color text-sm hover:underline">Faça login</Link>
                </p>
            </div>
        </div>
    );
}
