import { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router";
import FormInput from "../Componentes/Inputs/formInput";

interface loginFormData {
    email: string;
    password: string;
}

type FormErrors = Partial<Record<keyof loginFormData | 'form', string>>;


export default function Login() {

    const [formData, setFormData] = useState<loginFormData>({
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [loading, setLoading] = useState(false);
    
    //Hooks
    const { login, loginWithGoogle } = useAuth();
    const navigate = useNavigate();
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => (
            {...prevState, [name]: value}
        ))
    }


    const validateLoginForm = (): FormErrors => {
        const newErrors: FormErrors = {};

        if (!formData.email) newErrors.email = 'O e-mail é obrigatório.';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Formato de e-mail inválido.';

        if (!formData.password) newErrors.password = 'A senha é obrigatória.';

        return newErrors;
    };

    const handleEmailLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const validationErrors = validateLoginForm();

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        try {
            setErrors({});
            setLoading(true);
            await login(formData.email,formData.password);
            navigate('/');
        } catch (err: any) {
            console.error("Erro de login:", err.code);
            if (err.code === 'auth/user-not-found' || err.code === 'auth/invalid-credential') {
                setErrors({ form: "E-mail ou senha inválidos." });
            } else {
                setErrors({ form: "Erro ao fazer login. Tente novamente." });
            }
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleLogin = async () => {
        try{
            setLoading(true);
            setErrors({});
            await loginWithGoogle();
            navigate('/');//redireciona para a pag inicial após login
        } catch (err) {
            setErrors({ form: "Erro ao fazer login com Google. Tente novamente." });
            console.error("Erro de login com Google:", err.code);
        } finally{
            setLoading(false);
        }
    };

    return (
        <div className="bg-secondary-color min-h-screen min-w-screen flex items-center justify-center">
            <div className="bg-white w-full gap-4 h-full max-w-sm m-auto flex flex-col p-6 rounded shadow-md">
                <img src="/assets/logo-horizontal.png" alt="Logo" className="px-15" />
                <p className="text-center text-black font-bold text-xl">Faça seu login</p>
                {errors.form && <p className="bg-red-100 text-center text-red-700 p-2 rounded mb-2">{errors.form}</p>}

                <form onSubmit={handleEmailLogin} className="flex flex-col">
                    <FormInput
                        name="email"
                        type="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        error={errors.email}
                    />
                    <FormInput
                        name="password"
                        type="password"
                        placeholder="Senha"
                        value={formData.password}
                        onChange={handleChange}
                        error={errors.password}
                    />

                    <button 
                        type="submit" 
                        disabled={loading} 
                        className="bg-black hover:bg-secondary-color text-sm text-white p-2 rounded">
                            {loading ? 'Entrando...' : 'Entrar'}
                    </button>

                    <div className="text-center text-sm mt-1">ou</div>
                    <button 
                        onClick={handleGoogleLogin}
                        disabled={loading}
                        className="bg-white border-gray-300 border hover:bg-gray-100 text-sm text-black p-2 rounded mt-2">
                        <FaGoogle className="inline mr-2 mb-1" />
                        Fazer login com Google
                    </button>
                </form>

                <div className='flex flex-col items-center gap-2'>
                    <Link to="/recuperar-senha" className="text-secondary-color focus:outline-none text-sm hover:underline">Esqueceu sua senha?</Link>
                    <p className="text-center text-gray-600 text-sm">
                        Não tem uma conta? <Link to="/cadastro" className="text-secondary-color focus:outline-none text-sm font-semibold hover:underline">Cadastre-se</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
